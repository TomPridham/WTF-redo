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
        .state('company', {
            url: '/company',
            templateUrl: 'company/companyView.html',
            controller: 'companyCtrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'products/productsView.html',
            controller: 'productsCtrl'

        })
        .state('product', {
            url: '/products/:category/:productId',
            template: '<product></product>',
            controller:'productCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contactView.html',
            controller: 'contactCtrl'
        })
});
