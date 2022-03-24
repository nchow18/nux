const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes.js');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/products/seamless_tape_in', productRoutes);
router.use('/products/classic_tape_in', productRoutes);
router.use('/products/invisible_tape_in', productRoutes);

module.exports = router;