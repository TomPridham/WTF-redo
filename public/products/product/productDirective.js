/**
 * Created by Tom on 2/23/2016.
 */
angular.module('WTF').directive('product', function () {
    return {
        templateUrl: 'products/product/product.html',
        restrict: 'E',
        controller: 'productCtrl',
        transclude: true,
        scope: {
            productInfo:'='
        }
    };
});