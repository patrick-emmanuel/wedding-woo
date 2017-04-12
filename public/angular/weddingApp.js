angular.module('weddingApp', ['ngResource']);

var guestbookData = function($resource) {
    return $resource('/api/guestbooks');
};

var guestbookController = function($scope, guestbookData) {
    $scope.guestbooks = guestbookData.query();

    $scope.guestbookData = new guestbookData();

    $scope.addGuestbook = function() {
        $scope.guestbookData.$save(function() {
            console.log('New guestbook added.');
        });
        $scope.guestbooks = guestbookData.query();
    };
};

angular.module('weddingApp')
    .controller('guestbookController', guestbookController)
    .factory('guestbookData', guestbookData);