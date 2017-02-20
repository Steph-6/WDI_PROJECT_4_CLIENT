angular
  .module('venueApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/login',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })


    ;
  $urlRouterProvider.otherwise('/');
}
