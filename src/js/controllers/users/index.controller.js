angular
  .module('venueApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', 'CurrentUserService'];
function UsersIndexCtrl(User, CurrentUserService){
  const vm = this;

  vm.user = CurrentUserService.currentUser;
  vm.users = User.query();

}
