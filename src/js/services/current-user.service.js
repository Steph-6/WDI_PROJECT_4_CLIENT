angular
  .module('venueApp')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = [
  'TokenService',
  '$rootScope',
  'User',
  '$state',
  '$q'
];
function CurrentUserService(
  TokenService,
  $rootScope,
  User,
  $state,
  $q
) {
  const self = this;

  self.getUser = () => {
    return $q((resolve, reject) => {
      const decoded = TokenService.decodeToken();
      if (decoded) {
        User
          .get({ id: decoded.id }).$promise
          .then(data => {
            self.currentUser = data;
            $rootScope.$broadcast('loggedIn');
            return resolve(self.currentUser);
          })
          .catch(reject);
      }
    });
  };
  
  self.getUser();

  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
    $state.go('login');
  };
}
