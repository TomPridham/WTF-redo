/**
 * Created by Tom on 2/25/2016.
 */

angular.module('WTF').service('productService', function ($q, $http) {

    this.getProducts = function(){
        var defer = $q.defer();
        $http.get('products/products.json').then(
            function(response){
                var products = response.data.products;
                defer.resolve(products);
            }
        );
        return defer.promise;
    };

    this.getProduct = function(category, productId){
        var defer = $q.defer();
        $http.get('products/products.json').then(
            function(response){
                //console.log(category)
                //console.log(productId)
                //console.log(response)

                var productInfo = response.data.products.categories[category].fixtures[productId];
                //console.log(productInfo)
                defer.resolve(productInfo);
            }
        );
        return defer.promise;
    };

});