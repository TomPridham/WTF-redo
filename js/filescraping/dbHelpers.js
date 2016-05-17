/**
 * updated by Tom on 4/4/2016.
 */
`use strict`;


const q        = require(`q`);
const mongoose = require('mongoose');
const fs       = require(`fs`);
const product  = required(`../../schemas/product`);
const article  = required(`../..schemas/article`);

mongoose.set(`debug`, true);
mongoose.connect(`mongodb://127.0.0.1:27017/wtf`);
mongoose.connection.once(`open`, () => {
    console.log(`connected to mongodb`)
});
const promises = [];

module.exports = {
    postProduct(data){
        let defer = q.defer();
        product.findOneAndUpdate({"astm": data.astm}, data, {upsert: true}, (err, s) => {
            // console.log(data);
            if (err) {
                console.log(err);
                defer.reject(new Error(err));
            } else {
                // console.log(s)
                defer.resolve();
            }
        });
        promises.push(defer.promise);
    },
    postArticle(data){
        let defer = q.defer();
        article.findOneAndUpdate({astm: data.astm}, data, {upsert: true}, (err, result) => {
                if (err) {
                    console.log(err);
                    defer.reject(new Error(err));
                } else {
                    // console.log(s)
                    defer.resolve();
                }
            }
        )
        ;
        promises.push(defer.promise);
    },
    getQueued: (path) => {
        let defer = q.defer();
        fs.readdir(path, (err, response)=> {
            if (err) {
                defer.reject(new Error(err));
            } else {
                defer.resolve(response);
            }
        });
        return defer.promise;
    },
    movePic: (data, url)=> {
        let defer = q.defer();
        plant.findOneAndUpdate({latin: data}, {$set: {"pic": url}}, {new: true}, (err, s) => {
            // console.log(data);
            if (err) {
                console.log(err);
                defer.reject(new Error(err));
            } else {
                // console.log(s);
                defer.resolve();
            }
        });
        promises.push(defer.promise);
    },
    checked: (check)=> {
        let defer = q.defer();
        plant.findOne({"latin": check}, 'pic',
            function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    // console.log(docs.pic);
                    if (docs.pic) {
                        defer.resolve(true);
                    } else {
                        defer.resolve(false);
                    }
                }
            }
        );
        return defer.promise;
    },
    close: ()=> {
        q.allSettled(promises).done(()=> {
            mongoose.connection.close();
        })
    }
}
;