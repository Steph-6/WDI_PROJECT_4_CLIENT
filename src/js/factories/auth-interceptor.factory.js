angular
  .module('venueApp')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['TokenService'];
function AuthInterceptor(TokenService) {
  return {
    request(config) {
      const token = TokenService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    response(res) {
      if (res.data.token) {
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}
