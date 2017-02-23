angular
.module('venueApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['CurrentUserService', 'Event', 'User', 'Request', '$stateParams', '$state', '$http'];
function UsersShowCtrl(CurrentUserService, Event, User, Request, $stateParams, $state, $http) {
  const vm = this;

  vm.currentUser = CurrentUserService.currentUser;

  User
  .get($stateParams)
  .$promise
  .then((data) => {
    vm.user = data;
    vm.getSpotify();
  });
  Event.query().$promise.then((data)=>{
    vm.events = data;
    console.log(vm.events);
  });

  vm.delete = function usersDelete() {
    User
      .delete($stateParams)
      .$promise
      .then(() => {
        $state.go('users');
      });
  };

  vm.getSpotify = function getSpotify(){
    const artist = vm.user.name.split(' ').join('+');
    $http({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`
    }).then((res) => {
      vm.artist = res.data.artists.items[0];
      console.log(vm.artist);
    }, (err) => {
      console.error(err);
    });
  };

  vm.sendRequest = function sendRequest(eventId) {
    const request = {
      event_id: eventId,
      user_id: CurrentUserService.currentUser.id,
      band_name: CurrentUserService.currentUser.name,
      status: 'pending'
    };
    Request
      .save(request)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
        Event.query().$promise.then((data)=>{
          vm.events = data;
        });
      });
  };

  vm.checkRequests = function checkRequests(eventId) {
    let check = true;
    ['my_accepted_requests', 'my_pending_requests', 'my_rejected_requests'].forEach((requests) => {
      CurrentUserService.currentUser[requests].forEach((request) => {
        request.event_id === eventId ? check = false : null;
      });
    });
    return check;
  };

  // vm.artist
  // "https://api.spotify.com/v1/search?q=Daft+Punk&type=artist"

  // const googleMap = new google.maps.Map;

}
