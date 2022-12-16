const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
//const productpageRouter = require('./productpageRouter');
//const cartRouter = require('./cartRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
//router.use('/productpage', productpageRouter);
//router.use('/cart', cartRouter);

module.exports = router;