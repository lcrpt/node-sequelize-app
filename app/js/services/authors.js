angular.module('Bookmark.services')
  .factory('Authors', ['$http', '$q', ($http, $q) => {
    return {
      all() {
        const deferred = $q.defer();

        $http.get('/authors')
          .then((res) => {
            deferred.resolve(res.data);
          })
          .catch((err) => {
            deferred.reject(err);
          });

        return deferred.promise;
      },

      new(author) {
        const deferred = $q.defer();

        $http.post('/authors', author)
          .then((res) => {
            deferred.resolve(res.data);
          })
          .catch((err) => {
            deferred.reject(err);
          });

        return deferred.promise;
      },
    };
  }]);
