angular
  .module('venueApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = [
  'User',
  'CurrentUserService',
  '$state'
];
function LoginCtrl(
  User,
  CurrentUserService,
  $state
) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
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
