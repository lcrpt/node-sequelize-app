angular.module('Bookmark.controllers')
  .controller('BookDialogCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'Books', 'bookDetails',
  ($rootScope, $scope, $mdDialog, Toast, Book, bookDetails) => {
    $scope.book = bookDetails;

    if ($scope.book) {
      $scope.publication_date = new Date($scope.book.publication_date);
    }

    $scope.saveBook = (book) => {
      book['author_id'] = $rootScope.selectedAuthor.id;

      Books
        .new(book)
        .then((newBook) => {
           Toast.show('Book successfully created', 'top right', 3000);
           $rootScope.selectedAuthor.Books.push(newBook);
           $mdDialog.cancel();
        })
        .catch((err) => {
          Toast.show('Error creating book', 'top right', 3000);
        })
    };

    $scope.updateBook = (book) => {
      Books
        .update(book)
        .then(() => {
          Toast.show('Book successfully updated', 'top right', 3000);
          $mdDialog.cancel();
        })
        .catch((err) => {
          Toast.show('Error updating book', 'top right', 300);
        });
    }
  }]);
