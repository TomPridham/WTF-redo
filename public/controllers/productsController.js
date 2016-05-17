/**
 * Created by Tom on 2/23/2016.
 */

angular.module('WTF').controller('productsCtrl', function ($scope, productService) {


    productService.getProducts().then(function (products) {
        $scope.products = products;
        //$scope.test = "test";
        //console.log($scope.products)
    });



});