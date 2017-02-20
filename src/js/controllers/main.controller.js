angular
  .module('venueApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['rootScope', 'CurrentUserService'];
function MainCtrl($rootScope, CurrentUserService) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });

}
