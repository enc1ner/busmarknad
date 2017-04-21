var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin@ds060749.mlab.com:60749/busmarknad', ['purchases']);

// Get purchases
router.get('/purchases', function(req, res, next){
    db.purchases.find(function(err, purchases) {
        if (err) {
            res.send(err);
        } else {
            res.json(purchases);
        }
    });
});

//Get single purchase
router.get('/purchase/:id', function(req, res, next){
    db.purchases.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, purchase) {
        if(err) {
            res.send(err);
        } else {
            res.json(purchase);
        }
    });
});

//Save purchase
router.post('/purchase', function(req, res, next){
    var purchase = req.body;
    if(!purchase.seller || !(purchase.price > 0 || purchase.price)){
        res.status(400);
        res.json({
            "error": "Fel"
        });
    } else {
        db.purchases.save(purchase, function(err, result){
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

//Update purchase
router.put('/purchase/:id', function(req, res, next){
    var purchase = req.body;
    var updObj = {};

    if(purchase.seller) {
        updObj.seller = purchase.seller;
    }

    if(purchase.price){
        updObj.price = purchase.price;  
    }

    if(!updObj) {
        res.status(400);
        res.json({
            "error": "Fel"
        });
    } else {
        db.purchases.update({
            _id: mongojs.ObjectId(req.params.id) 
        }, updObj, {}, function (err, result) {
                if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

router.delete('/purchase/:id', function(req, res, next){
    db.purchases.remove({
        _id: mongojs.ObjectId(req.params.id) 
    }, '', {}, function (err, result) {
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
