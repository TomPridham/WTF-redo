/**
 * Created by Tom on 2/29/2016.
 */

//directive that is used to format images nicely based on number of images in collection
angular.module('WTF').directive('imgDir', function () {
    return {
        templateUrl: 'products/product/image.html',
        restrict: 'E',
        require: '^^product',
        transclude: true,
        scope: {
            cols: '=',
            image: '=',
            images: '='
        },
        //programatically updates bootstrap column size based on number of images in collection
        link: function (scope, element, attrs, productCtrl) {
            scope.cols = productCtrl.getCols(scope.images);

            $(element).addClass(function () {
                var colSize = 12 / parseInt(scope.cols);
                return 'col-sm-' + colSize;
            });
        }
    };
});