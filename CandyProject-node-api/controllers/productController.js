const {Product, ProductInfo, NutritionEnergyValues, ProductIngredient,Ingredient} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ProductController {
    async create(req, res, next){
        try {
            let {name, price, instruction, ingredients} = req.body;
            const {image} = req.files;
            let fileName = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, instruction, image: fileName})

            if (ingredients) {
                ingredients = JSON.parse(ingredients);
                ingredients.forEach(i =>
                    ProductIngredient.create({
                        amount: i.amount,
                        productId: product.id,
                        ingredientId: i.ingredientId,
                    })
                )
            }
/*            if (ntrenv) {
                await NutritionEnergyValues.create({
                    proteins: ntrenv.proteins,
                    fats: ntrenv.fats,
                    carbohydrates: ntrenv.carbohydrates,
                    kcal: ntrenv.kcal,
                    productId: product.id
                })
            }*/


            return res.json(product)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }

    };
    async getAll(req, res){
        let {limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page*limit - limit; // отступ
        let products;

        products = await Product.findAndCountAll({limit, offset});
        return res.json(products);
    };

    async getOne(req,res) {
        const {id} = req.params;

        const product = await Product.findOne(
            {
                where: {id},
                //include: [{model: ProductIngredient, as: 'ingredients'}, {model: NutritionEnergyValues, as: 'ntrenv'}]
            },
        )

        return res.json(product);
    };
}

module.exports = new ProductController();