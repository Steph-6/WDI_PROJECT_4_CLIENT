angular
.module('venueApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['CurrentUserService', 'User', 'Request', '$stateParams', '$state'];
function UsersShowCtrl(CurrentUserService, User, Request, $stateParams, $state) {
  const vm = this;

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

  vm.sendRequest = function sendRequest() {
    Request
      .pending($stateParams)
      .$promise
      .then((data) => {
        console.log(data);
        console.log(`vm.user.events.pending_requests`);
      });
  };

  vm.acceptRequest = function acceptRequest() {
    Request
      .accept($stateParams)
      .$promise
      .then((data) => {
        console.log(data);
      });
  };

  vm.rejectRequest = function rejectRequest() {
    Request 
      .reject($stateParams)
      .$promise
      .then((data) => {
        console.log(data);
      });
  };

  // vm.artist
  // "https://api.spotify.com/v1/search?q=Daft+Punk&type=artist"

  // const googleMap = new google.maps.Map;

}
