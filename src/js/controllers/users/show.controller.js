angular
.module('venueApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['CurrentUserService', 'Event', 'User', 'Request', '$stateParams', '$state', '$http', 'NgMap'];
function UsersShowCtrl(CurrentUserService, Event, User, Request, $stateParams, $state, $http, NgMap) {
  const vm = this;

  init();
  function init() {
    User
      .get($stateParams)
      .$promise
      .then((data) => {
        vm.user = data;
        vm.artist = getSpotify(vm.user);

        SC.initialize({
          client_id: 'NikEKIyuP6ikbZL93LX2iSRWxfPWBu6o'
        });
        getSoundCloud(vm.user);

        getLocation(vm.user);

        if (vm.user.is_bar === 'yes') {
          NgMap
          .getMap()
          .then(map => {
            console.log(map.getCenter());
          })
          .catch(err => {
            console.log(err);
          });
        }
      });
  }

  function getLocation(user) {
    vm.lat = user.lat;
    vm.lng = user.lng;
    //geocode location from user.bar_location for lat and lng
  }

  function getSoundCloud(user){
    const artist = user.name.toLowerCase().split(' ').join('');
    const track_url = `http://soundcloud.com/${artist}`;

    SC.oEmbed(track_url,{ auto_play: false })
      .then(function(oEmbed) {
        console.log('oEmbed response: ', oEmbed);
        document.getElementById('soundcloud').innerHTML = oEmbed.html;
      });
  }

  function getSpotify(user){
    const artist = user.name.toLowerCase().split(' ').join('+');
    $http({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist`
    }).then((res) => {
      if (!res.data.artists.items[0]) return false;
      vm.uri = res.data.artists.items[0].uri;
      document.getElementById('spotifyWidget').setAttribute('src', `https://embed.spotify.com/?uri=${vm.uri}`);
      vm.spotifyInfo = res.data.artists.items[0];
      const genre1 = res.data.artists.items[0].genres[0];
      vm.genre1 = genre1.charAt(0).toUpperCase() + genre1.slice(1);
      const genre2 = res.data.artists.items[0].genres[1];
      vm.genre2 = genre2.charAt(0).toUpperCase() + genre2.slice(1);
      return res.data.artists.items[0];
    });
  }

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
        init();
        CurrentUserService.getUser();
        Event
        .query()
        .$promise.then((data)=>{
          vm.events = data;
        });
      });
  };

  vm.currentUser = CurrentUserService.currentUser;

  vm.checkRequests = checkRequests;

  function checkRequests(eventId) {
    let check = true;
    [
      'my_accepted_requests',
      'my_pending_requests',
      'my_rejected_requests'
    ].forEach((requests) => {
      CurrentUserService.currentUser[requests].forEach((request) => {
        request.event.id === eventId ? check = false : null;
      });
    });
    return check;
  }
}
