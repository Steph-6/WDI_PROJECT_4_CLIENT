angular
  .module('venueApp')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function UsersEditCtrl(User, CurrentUserService, $state) {
  const vm = this;
  vm.user = CurrentUserService.currentUser;

  vm.update = () => {

  }
}
