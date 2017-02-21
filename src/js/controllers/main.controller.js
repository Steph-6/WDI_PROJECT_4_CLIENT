angular
  .module('venueApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('users');
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });

  vm.logout = () => {
    console.log('logging out');
    CurrentUserService.removeUser();
  };

}
