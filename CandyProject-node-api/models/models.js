const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue: "USER"}
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}
})

const CartProduct = sequelize.define('cart_product', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull:false },
    price:{type: DataTypes.INTEGER, allowNull:false},
    instruction: {type: DataTypes.TEXT, allowNull:false},
    image:{type: DataTypes.STRING,  allowNull:false}
})

/*const ProductInfo = sequelize.define('product_info', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    instruction: {type: DataTypes.STRING}
})*/

const Ingredient = sequelize.define('ingredient', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull:false }
})

const ProductIngredient = sequelize.define('product_ingredient', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    amount: {type: DataTypes.STRING, allowNull: false}
})

const NutritionEnergyValues = sequelize.define('nutrition_energy_values', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    proteins:{type: DataTypes.INTEGER, allowNull:false },
    fats:{type: DataTypes.INTEGER, allowNull:false },
    carbohydrates:{type: DataTypes.INTEGER, allowNull:false },
    kcal:{type: DataTypes.INTEGER, allowNull:false }
})

//связуюшая модель ProductIngredient и Ingredient
const ProductIngredientIngredient = sequelize.define('product_ingredient_ingredient',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}
})

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartProduct)
CartProduct.belongsTo(Cart)

Product.hasOne(CartProduct)
CartProduct.belongsTo(Product)

/*Product.hasOne(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)*/

Product.hasOne(ProductIngredient, {as: 'ingredients'})
ProductIngredient.belongsTo(Product)

NutritionEnergyValues.hasMany(Product)
Product.belongsTo(NutritionEnergyValues) //, {as: 'ntrenv'}

ProductIngredient.belongsToMany(Ingredient, {through: ProductIngredientIngredient})
Ingredient.belongsToMany(ProductIngredient, {through: ProductIngredientIngredient})

module.exports = {
    User,
    Cart,
    CartProduct,
    Product,
    //ProductInfo,
    Ingredient,
    ProductIngredient,
    NutritionEnergyValues

}
