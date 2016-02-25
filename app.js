/**
 * Created by Tom on 2/23/2016.
 */

angular.module('WTF', ['ui.router']);

angular.module('WTF').config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'home/homeView.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about/aboutView.html',
            controller: 'aboutCtrl'
        })
        .state('company', {
            url: '/company',
            templateUrl: 'company/companyView.html',
            controller: 'companyCtrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'products/productsView.html',
            controller: 'productsCtrl',

        })
        .state('product', {
            url: '/products/:category/:productId',
            template: '<product></product>',

            resolve: {
                productInfo: function ($stateParams,productService) {

                    return productService.getProduct($stateParams.category,$stateParams.productId);
                }

            }
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contactView.html',
            controller: 'contactCtrl'
        })
});
