angular
.module('venueApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['CurrentUserService', 'User', '$stateParams', '$state'];
function UsersShowCtrl(CurrentUserService, User, $stateParams, $state) {
  const vm = this;

  // vm.currentUser = CurrentUserService.currentUser;
  vm.user = User.get($stateParams);
  console.log(vm.user);

  vm.delete = function usersDelete() {
    User
    .delete($stateParams)
    .$promise
    .then(() => {
      console.log(`deleted ${vm.user}`);
      $state.go('users');
    });
  };

  // vm.artist
  // "https://api.spotify.com/v1/search?q=Daft+Punk&type=artist"

  // const googleMap = new google.maps.Map;

}
