angular
  .module('venueApp')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'User', '$state'];
function CurrentUserService(TokenService, $rootScope, User, $state) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    if (decoded) {
      User
        .get({ id: decoded.id }).$promise
        .then(data => {
          self.currentUser = data;
          $rootScope.$broadcast('loggedIn');
        });
    }
  };
  self.getUser();

  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
    $state.go('login');
  };
}
