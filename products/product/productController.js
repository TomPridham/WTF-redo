/**
 * Created by Tom on 2/25/2016.
 */
angular.module('WTF').controller('productCtrl', function ($scope, productService, $stateParams) {


    productService.getProduct($stateParams.category, $stateParams.productId).then(function (response) {
        $scope.productInfo = response;
        console.log($scope.productInfo)
    })


});