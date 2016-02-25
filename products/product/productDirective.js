/**
 * Created by Tom on 2/23/2016.
 */
angular.module('WTF').directive('product', function () {
    return {
        templateUrl: 'products/product/product.html',
        restrict: 'E',
        controller: 'productsCtrl',
        scope: {
            productInfo:'='
        }//link
    };
});