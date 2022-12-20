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
            image.mv(path.resolve(__dirname, '..', 'static', fileName));
            //console.log(JSON.parse(instruction))
/*            instruction = JSON.parse(instruction);
            ingredients = JSON.parse(ingredients);*/
            for (let i = 0; i < instruction.length; i++) {
                instruction[i] = JSON.parse(instruction[i].toString().replace('""', '","'));
            }
            for (let i = 0; i < ingredients.length; i++) {
                ingredients[i] = JSON.parse(ingredients[i].toString().replace('""', '","'));
            }
            const product = await Product.create({name, price,ingredients, instruction, image: fileName});

/*            if (ingredients) {
                ingredients = JSON.parse(ingredients);

                ingredients.forEach(i =>
                    Ingredients.create({
                        name: i.name,
                        amount: i.amount,
                    })
                )
            }
            if (instruction) {
                instruction = JSON.parse(instruction);
                instruction.forEach(i =>
                    Ingredients.create({
                        name: i.name,
                        amount: i.amount,
                    })
                )
            }*/
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