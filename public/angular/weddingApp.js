angular.module('weddingApp', ['ngResource']);

var guestbookData = function($resource) {
    return $resource('/api/guestbooks');
};
var songRequestData = function($resource) {
    return $resource('/api/songrequests');
};

var guestbookController = function($scope, guestbookData) {
    $scope.guestbooks = guestbookData.query();
    $scope.count = $scope.guestbooks.length;

    $scope.guestbookData = new guestbookData();

    $scope.addGuestbook = function() {
        $scope.guestbookData.$save(function() {
            console.log('New guestbook added.');
        });
        $scope.guestbooks = guestbookData.query();
    };
};
var songRequestController = function($scope, songRequestData) {
    $scope.songRequests = songRequestData.query();
    $scope.count = $scope.songRequests.length;

    $scope.songRequestData = new songRequestData();

    $scope.addSongRequest = function() {
        $scope.songRequestData.$save(function() {
            console.log('New song request added.');
        });
        $scope.songRequests = songRequestData.query();
    };
};

angular.module('weddingApp')
    .controller('guestbookController', guestbookController)
    .controller('songRequestController', songRequestController)
    .factory('guestbookData', guestbookData)
    .factory('songRequestData', songRequestData);