angular
  .module('venueApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
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
    .state('users', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl',
      controllerAs: 'usersIndex'
    })
    .state('show', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl',
      controllerAs: 'usersShow',
      resolve: {
        UserData: function(User, $stateParams) {
          return User.get($stateParams).$promise;
        }
      }
    })
    .state('edit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'UsersEditCtrl',
      controllerAs: 'usersEdit'
    });
  $urlRouterProvider.otherwise('/');
}
