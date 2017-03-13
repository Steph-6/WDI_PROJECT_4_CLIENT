angular
  .module('venueApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .state('artists', {
      url: '/artists',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl',
      controllerAs: 'usersIndex'
    })
    .state('venues', {
      url: '/venues',
      templateUrl: '/js/views/venues/index.html',
      controller: 'VenuesIndexCtrl',
      controllerAs: 'venuesIndex'
    })
    .state('show', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl',
      controllerAs: 'usersShow'
    })
    .state('profile', {
      url: '/users/profile/:id',
      templateUrl: '/js/views/users/profile.html',
      controller: 'UsersProfileCtrl',
      controllerAs: 'usersProfile'
    })
    .state('new', {
      url: '/users/:id/event/new',
      templateUrl: '/js/views/events/new.html',
      controller: 'EventsNewCtrl',
      controllerAs: 'eventsNew'
    })
    .state('edit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'UsersEditCtrl',
      controllerAs: 'usersEdit'
    })
    .state('requestsIndex', {
      url: '/user/:id/requests',
      templateUrl: '/js/views/requests/index.html',
      controller: 'ReqIndexCtrl',
      controllerAs: 'reqIndex'
    });
  $urlRouterProvider.otherwise('/');
}
