angular.module('Bookmark.controllers')
  .controller('AuthorDialogCtrl', ['$rootScope', '$scope', '$mdDialog', 'Authors', 'Toast',
  ($rootScope, $scope, $mdDialog, Authors, Toast) => {
    $scope.saveAuthor = (author) => {
      Authors
        .new(author)
        .then((newAuthor) => {
          newAuthor.Books = [];
          $rootScope.authors.push(newAuthor);
          Toast.show('Author successfully created', 'top right', 3000);
          $mdDialog.cancel();
        })
        .catch((err) => {
          Toast.show('Error creating author', 'top right', 3000);
        });
    };
  }]);
