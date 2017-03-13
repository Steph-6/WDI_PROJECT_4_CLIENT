angular
  .module('venueApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = [
  'User',
  'CurrentUserService',
  '$state'
];
function RegisterCtrl(
  User,
  CurrentUserService,
  $state
) {
  const vm    = this;

  vm.register = () => {
    User
      .register(vm.user)
      .$promise
      .then(() => {
        CurrentUserService
        .getUser()
        .then(user => {
          $state.go('profile', {id: user.id});
        });
      }, err => {
        console.log(err);
      });
  };
}
