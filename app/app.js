angular.module('Bookmark.controllers', []);
angular.module('Bookmark.services', []);

const Bookmark = angular.module('Bookmark', [
  'ngMaterial',
  'ngMdIcons',
  'Bookmark.controllers',
  'Bookmark.services',
]);

Bookmark
  .config(['$mdThemingProvider', ($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
  }])
  .config(['$mdIconProvider', ($mdIconProvider) => {
    $mdIconProvider.icon('author', './images/svg/person.svg');
  }]);
