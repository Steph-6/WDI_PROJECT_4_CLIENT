angular
  .module('venueApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', 'CurrentUserService'];
function UsersIndexCtrl(User, CurrentUserService){
  const vm = this;

  vm.user = CurrentUserService.currentUser.is_bar;
  vm.users = User.query();

  console.log(vm.users);

  // if (vm.users.is_bar)
}
