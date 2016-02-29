/**
 * Created by Tom on 2/25/2016.
 */
angular.module('WTF').controller('productCtrl', function ($scope, productService, $stateParams) {

    //gets product for productDirective
    productService.getProduct($stateParams.category, $stateParams.productId).then(function (response) {
        $scope.productInfo = response;
    });

    //gets number of images in collection for imageDirective
    this.getCols = function (images) {
       return $scope.cols = images.length;
    };


});