const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');
const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal); //we can use post
router.post('/editMeal', editMeal); //we can use post or put

module.exports = router;