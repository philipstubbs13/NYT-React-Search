const db = require("../models");

// Defining methods for the articlesController
module.exports = {
    create: function (req, res) {
        const article = {
            _id: req.body._id,
            title: req.body.headline.main,
            url: req.body.web_url,
            date: req.body.pub_date
        };
        db.Article
            .create(article)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Article
            .find(req.query)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    }
};
