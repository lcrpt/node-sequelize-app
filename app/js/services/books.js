angular.module('Bookmark.services')
  .factory('Books', ['$http', '$q', ($http, $q) => {
    return {
      new(book) {
        const deferred = $q.defer();

        $http.post('/books', book)
          .then((res) => {
            deferred.resolve(res.data);
          })
          .catch((err) => {
            deffered.reject(err);
          });

        return deferred.promise;
      },

      update(book) {
        const deferred = $q.defer();

        $http.put(`/books/${book.id}`, book)
          .then((res) => {
            deferred.resolve(res.data);
          })
          .catch((err) => {
            deffered.reject(err);
          });

        return deferred.promise;
      },

      delete(bookId) {
        const deferred = $q.defer();

        $http.delete(`/books/${bookId}`)
          .then((res) => {
            deferred.resolve(res.data);
          })
          .catch((err) => {
            deffered.reject(err);
          });

        return deferred.promise;
      },
    }
  }]);
