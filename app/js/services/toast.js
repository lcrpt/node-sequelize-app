angular.module('Bookmark.services')
  .factory('Toast', ['$mdToast', ($mdToast) => {
    return {
      show: (text, position, delay) => {
        $mdToast.show(
          $mdToast.simple()
          .textContent(text)
          .position(position)
          .hideDelay(delay)
        );
      };
    };
  }]);
