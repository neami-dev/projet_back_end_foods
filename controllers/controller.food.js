const Food = require("../models/model.foods");
const httpStatusCode = require("../utils/httpStatusText");
const asyncWrapper = require("../middlewares/asyncWrapper");
const appError = require("../utils/appError");
const getAllFood = asyncWrapper(async (req, res) => {
    // const query = req.query;
    // const limit = +query.limit || 6;
    // const page = +query.page || 1;
    // const skip = (page - 1) * limit;

    const food = await Food.find({}, { __v: false });
    res.status(200).json({ status: httpStatusCode.SUCCESS, data: food });
});
// Food.insertMany([
//     { 
//         "title": "Tartiflette burger",
//         "price": "5",
//         "description": "Un beau burger façon savoyard avec une garniture de tartiflette, on adore !",
//         "category": "Hamburger",
//         "image": "https://img.mesrecettesfaciles.fr/wp-content/uploads/2017/01/tartifletteburger-1000x500.webp",

//         "cuisine": "française",
//         "time": 40
//     },
//     {
//         "title": "Burger au bacon",
//         "price": "4.5",
//         "description": "Un bon hamburger maison avec du cheddar et du bacon, pour se régaler comme à New York !",
//         "category": "Hamburger",
//         "image": "https://img.mesrecettesfaciles.fr/wp-content/uploads/2017/02/baconburger-1000x500.webp",

//         "cuisine": "américaine",
//         "time": 50
//     },
//     {
//         "title": "Cheeseburger",
//         "price": "5",
//         "description": "La recette du véritable cheeseburger à l'américaine avec ce burger maison facile et rapide à préparer, que vous pourrez accompagner de frites !",
//         "category": "Hamburger",
//         "image": "https://img.mesrecettesfaciles.fr/2019-05/cheeseburger-16354-1000x500.webp",

//         "cuisine": "américaine",
//         "time": 30
//     },
//     {
//         "title": "Burgers aux filets de poisson",
//         "price": "4",
//         "description": "Un beau hamburger maison version poisson pour un déjeuner rapide en famille, à accompagner de frites bien sûr !",
//         "category": "Hamburger",
//         "image": "https://img.mesrecettesfaciles.fr/wp-content/uploads/2017/08/burgerfiletsdepoisson-1000x500.webp",

//         "cuisine": "américaine",
//         "time": 30
//     },
//     {
//         "title": "Fish burger",
//         "price": "3",
//         "description": "Un délicieux hamburger au poisson pané, on adore, et les enfants aussi !",
//         "category": "Hamburger",
//         "image": "https://img.mesrecettesfaciles.fr/wp-content/uploads/2017/02/fishburger-1000x500.webp",

//         "cuisine": "américaine",
//         "time": 25
//     },
//     {
//         "title": "Burgers aux filets de poisson",
//         "price": "5",
//         "description": "Un beau hamburger maison version poisson pour un déjeuner rapide en famille, à accompagner de frites bien sûr !",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/wp-content/uploads/2017/08/burgerfiletsdepoisson-1000x500.webp",

//         "cuisine": "américaine",
//         "time": 30
//     },
//     {
//         "title": "Tajine de poulet aux pruneaux",
//         "price": "10",
//         "description": "Une recette très facile de tajine de poulet aux carottes et pommes de terre pour un repas d'inspiration marocaine. Un véritable régal !",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/wp-content/uploads/2015/05/Tajine-de-poulet-aux-pruneaux.webp",

//         "cuisine": "marocaine",
//         "time": 135
//     },
//     {
//         "title": "Tajine de poulet aux petits pois et pommes de terre",
//         "price": "8",
//         "description": "Ce tajine de poulet aux petits pois et pommes de terre, est une recette orientale très facile à préparer et délicieuse !",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/2023-01/tajine-de-poulet-aux-petits-pois-et-pommes-de-terre-enl2.webp",

//         "cuisine": "marocaine",
//         "time": 45
//     },

//     {
//         "title": "Tajine kefta pommes de terre",
//         "price": "7",
//         "description": "Offrez-vous un repas original grâce à cette recette de tajine kefta pommes de terre. Ce plat unique est idéal pour apporter de la chaleur et du réconfort à toute la famille lorsque le froid s’installe.",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/2022-12/tajine-kefta-pommes-de-terre-my12.webp",

//         "cuisine": "marocaine",
//         "time": 80
//     },
//     {
//         "title": "Tajine de poulet aux pommes de terre",
//         "price": "6",
//         "description": "Voyagez en orient avec cette recette de tajine de poulet et pommes de terre à la saveur épicée. Il sera parfait pour impressionner vos invités ou pour simplement faire plaisir à toute la famille !",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/2023-02/tajine-de-poulet-et-pommes-de-terre-j8j2.webp",

//         "cuisine": "marocaine",
//         "time": 50
//     },
//     {
//         "title": "Tajine d’agneau aux épices et fruits secs",
//         "price": "9",
//         "description": "Un plat savoureux et chaleureux à déguster en hiver, aux parfums d'épices orientales, riches en fruits secs : pruneaux, abricots secs, amandes... Un vrai délice !",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/2020-02/tajine-dagneau-aux-epices-et-fruits-secs-1.webp",
//         "cuisine": "marocaine",
//         "time": 105

//     },
//     {
//         "title": "Tajine d’agneau aux épices et fruits secs",
//         "price": "9",
//         "description": "Un plat savoureux et chaleureux à déguster en hiver, aux parfums d'épices orientales, riches en fruits secs : pruneaux, abricots secs, amandes... Un vrai délice !",
//         "category": "Tajine",
//         "image": "https://img.mesrecettesfaciles.fr/2020-02/tajine-dagneau-aux-epices-et-fruits-secs-1.webp",
//         "cuisine": "marocaine",
//         "time": 105

//     }
// ])
const addFood = asyncWrapper(async (req, res) => {
    const newFood = new Food(req.body);
    await newFood.save();
    res.status(201).json({ status: httpStatusCode.SUCCESS, data: newFood });
});
const getFood = asyncWrapper(async (req, res, next) => {
    const FoodId = req.params.foodId;
    const food = await Food.findById(FoodId);
    if (!food) {
        const error = appError.create(
            "food not found!",
            404,
            httpStatusCode.FAIL
        );
        return next(error);
    }
    res.status(200).json({ status: httpStatusCode.SUCCESS, data: food });
});
const deleteFood = asyncWrapper(async (req, res, next) => {
    const id = req.params.foodId;

    const deleteFood = await Food.findByIdAndDelete(id);
    console.log("deleteFood===", deleteFood);
    if (!deleteFood) {
        const error = appError.create(
            "food not found!",
            404,
            httpStatusCode.FAIL
        );
        return next(error);
    }
    res.status(201).json({ status: httpStatusCode.SUCCESS, data: deleteFood });
});
const editFood = asyncWrapper(async (req, res, next) => {
    const id = req.params.foodId;
    const editFood = await Food.findByIdAndUpdate(id, req.body);
    if (!editFood) {
        const error = appError.create(
            "food not found!",
            404,
            httpStatusCode.FAIL
        ); 
        return next(error);
    }
    res.status(200).json({ status: httpStatusCode.SUCCESS, data: null });
});

module.exports = {
    getAllFood,
    getFood,
    addFood,
    deleteFood,
    editFood,
};
