angular
  .module('venueApp')
  .controller('UsersProfileCtrl', UsersProfileCtrl);

UsersProfileCtrl.$inject = ['User', '$stateParams', '$state', '$http', 'Request', 'Event'];
function UsersProfileCtrl(User, $stateParams, $state, $http, Request, Event) {
  const vm = this;

  init();
  function init(){
    User.get({id: $stateParams.id})
    .$promise
    .then(data => {
      vm.user = data;
      console.log(vm.user, 'user');
      vm.artist = getSpotify(vm.user);
      SC.initialize({
        client_id: 'NikEKIyuP6ikbZL93LX2iSRWxfPWBu6o'
      });
      getSoundCloud(vm.user);
    });
  }

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
      const genre1 = res.data.artists.items[0].genres[0]
      vm.genre1 = genre1.charAt(0).toUpperCase() + genre1.slice(1);
      const genre2 = res.data.artists.items[0].genres[1]
      vm.genre2 = genre2.charAt(0).toUpperCase() + genre2.slice(1);
      return res.data.artists.items[0];
    });
  }

  function getSoundCloud(user){
    const artist = user.name.toLowerCase().split(' ').join('');
    const track_url = `http://soundcloud.com/${artist}`;
    SC.oEmbed(
      track_url,
      { auto_play: false })
      .then(function(oEmbed) {
        console.log('oEmbed response: ', oEmbed);
        document.getElementById('soundcloud').innerHTML = oEmbed.html;
      });
  }

  vm.deleteRequest = function deleteRequest(request) {
    Request
      .delete(request)
      .$promise
      .then(() => {
        init();
      });
  };

  vm.acceptRequest = function acceptRequest(request) {
    request.status = 'accepted';
    init();
    Request
      .accept({id: request.id}, request)
      .$promise
      .then(data => {
        console.log(data);
      });
  };

  vm.rejectRequest = function rejectRequest(request) {
    request.status = 'rejected';
    init();
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
