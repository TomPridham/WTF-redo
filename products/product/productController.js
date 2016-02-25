/**
 * Created by Tom on 2/25/2016.
 */
angular.module('WTF').controller('productCtrl', function ($scope, productService, productInfo) {

    $scope.productInfo = productInfo;

    //productService.getProduct(category,product).then(function(response){
    //    $scope.productInfo = response;
    //})


});