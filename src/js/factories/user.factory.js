angular
  .module('venueApp')
  .factory('User', userFactory);

userFactory.$inject = ['$resource', 'API'];
function userFactory($resource, API){
  return $resource(`${API}/users/:id`,
    { id: '@_id'},
    {
      'register': { method: 'POST', url: `${API}/register` },
      'login': { method: 'POST', url: `${API}/login` }
    });
}
