angular.module('Bookmark.controllers')
  .controller('MainCtrl', ['$rootScope', '$scope', '$mdSidenav', '$mdDialog', 'Authors', 'Books', 'Toast',
  ($rootScope, $scope, $mdSidenav, $mdDialog, Authors, Books, Toast) => {

    Authors.all()
      .then((authors) => {
        $rootScope.authors = authors;
        $rootScope.selectedAuthor = author[0];
      })
      .catch((err) => {
        console.error('Authors.all()', err);
      });

    $scope.selectAuthor = (author) => $rootScope.selectedAuthor = author;

    $scope.toggleSidenav = () => $mdSidenav('left').toggle();

    $scope.newAuthorDialog = (ev) => {
      $mdDialog.show({
        templateUrl: 'views/dialogs/new-author.html',
        controller: 'AuthorDialogCtrl',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
      });
    };

    $scope.showAnAuthorsProfile = (ev) => {
      $mdDialog.show({
        templateUrl: 'views/dialogs/authors-profile.html',
        controller: 'AuthorDialogCtrl',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
      });
    };

    $scope.newBookDialog = (ev) => {
      $mdDialog.show({
        templateUrl: 'views/dialogs/new-book.html',
        controller: 'BookDialogCtrl',
        locals: { bookDetails: null },
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
      });
    };

    $scope.deleteBook = (ev, book) => {
      const deleteBook = $mdDialog.confirm()
        .title(`Delete ${book.name} ?`)
        .textContent(`${book.name} will be wiped off the face of the earth.`)
        .ariaLabel('Delete book')
        .ok('Yes')
        .cancel('No')

      $mdDialog.show(deleteBook)
        .then(() => {
          Books.delete(book.id)
            .then(() => {
              $scope.selectedAuthor.Books = $scope.selectedAuthor.Books.filter((index) => {
                index.id !== book.id
              });
              Toast.show(`${book.name} has been deleted`, 'top-right', 3000);
            })
            .catch((err) => {
              Toast.show(`Error deleting ${book.name} Please try again`, 'top-right', 3000);
            });
        })
        .catch((err) => {
          console.error('deleteBook', err);
        });
    };

    $scope.editBook = (ev, book) => {
      $mdDialog.show({
        templateUrl: 'views/dialogs/edit-book.html',
        controller: 'BookDialogCtrl',
        locals: { bookDetails: null },
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true,
      });
    }
  }]);
