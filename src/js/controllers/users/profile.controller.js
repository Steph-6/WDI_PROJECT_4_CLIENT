angular
  .module('venueApp')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['CurrentUserService', 'Event', 'User', '$stateParams', '$state', 'Request', '$http'];
function UsersProfileCtrl(CurrentUserService, Event, User, $stateParams, $state, Request, $http) {
  const vm = this;

  User.get({id: $stateParams.id})
  .$promise
  .then(data => {
    vm.user = data;
    console.log(vm.user, 'user');
    vm.artist = getSpotify(vm.user);
  });
  Event.query().$promise.then((data)=>{
    vm.events = data;
  });

  vm.requests = Request.query();

  console.log(vm.requests, 'requests');
  console.log(vm.user, 'user');
  console.log(vm.events, 'event');


  function getSpotify(user){
    const artist = user.name.toLowerCase().split(' ').join('+');
    console.log(artist);
    $http({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`
    }).then((res) => {
      console.log(res.data.artists.items[0]);
      vm.uri = res.data.artists.items[0].uri;
      document.getElementById('spotifyWidget').setAttribute('src', `https://embed.spotify.com/?uri=${vm.uri}`);
      vm.spotifyInfo = res.data.artists.items[0];
      return res.data.artists.items[0];
    });
  }

  vm.acceptRequest = function acceptRequest(request) {
    request.status = 'accepted';
    console.log('accepting');
    Request
      .accept({id: request.id}, request)
      .$promise
      .then((data) => {
        console.log(data);
      });
  };

  vm.rejectRequest = function rejectRequest(request) {
    request.status = 'rejected';
    Request
      .reject({id: request.id}, request)
      .$promise
      .then((data) => {
        console.log(data);
      });
  };

  vm.delete = function usersDelete() {
    User
      .delete($stateParams)
      .$promise
      .then(() => {
        $state.go('login');
      });
  };
}
