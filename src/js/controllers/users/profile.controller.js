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
      vm.artist = getSpotify(vm.user);

      SC.initialize({
        client_id: 'NikEKIyuP6ikbZL93LX2iSRWxfPWBu6o'
      });

      getSoundCloud(vm.user);
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

      if (vm.uri) {
        const spotify = document.getElementById('spotifyWidget');
        if (!spotify) return false;
        spotify.setAttribute('src', `https://embed.spotify.com/?uri=${vm.uri}`);
        vm.spotifyInfo = res.data.artists.items[0];
        const genre1 = res.data.artists.items[0].genres[0];
        vm.genre1 = genre1.charAt(0).toUpperCase() + genre1.slice(1);
        const genre2 = res.data.artists.items[0].genres[1];
        vm.genre2 = genre2.charAt(0).toUpperCase() + genre2.slice(1);
        return res.data.artists.items[0];
      }
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
        const soundcloud = document.getElementById('soundcloud');
        if (!soundcloud) return false;
        soundcloud.innerHTML = oEmbed.html;
      });
  }

  /*
   * When you are an artist, you can delete a request you have made
   */
  vm.deleteRequest = function deleteRequest(request) {
    Request
      .delete(request)
      .$promise
      .then(() => {
        init();
      });
  };

  /*
   * If you are a bar, you can accept a request to play
   */
  vm.acceptRequest = function acceptRequest(request) {
    request.status = 'accepted';

    Request
      .accept({id: request.id}, request)
      .$promise
      .then(data => {
        init();
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*
   * If you are a bar, you can reject a request to play
   */
  vm.rejectRequest = function rejectRequest(request) {
    request.status = 'rejected';

    Request
      .reject({id: request.id}, request)
      .$promise
      .then(data => {
        init();
      })
      .catch(err => {
        console.log(err);
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
