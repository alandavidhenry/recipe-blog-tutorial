require('../models/database');
const category = require('../models/category');
const Category = require('../models/category');

/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    res.render('index', { title: 'Cooking Blog - Home' });
}

async function insertDummyCategoryData() {
    try {
        await category.insertMany([
            {
            "name": "Thai",
            "image": "thai-food.jpg"
            },
            {
            "name": "American",
            "image": "american-food.jpg"
            }, 
            {
            "name": "Chinese",
            "image": "chinese-food.jpg"
            },
            {
            "name": "Mexican",
            "image": "mexican-food.jpg"
            }, 
            {
            "name": "Indian",
            "image": "indian-food.jpg"
            },
            {
            "name": "Spanish",
            "image": "spanish-food.jpg"
            }
        ]);
    }   catch (error) {
            console.log('err', + error)
    }
}

insertDummyCategoryData();