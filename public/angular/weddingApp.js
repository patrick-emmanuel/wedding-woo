angular.module('weddingApp', ['ngResource']);

var guestbookData = function($resource) {
    return $resource('/api/guestbooks', {}, {
        query: { method: "GET", isArray: true },
    });
};
var songRequestData = function($resource) {
    return $resource('/api/songrequests', {}, {
        query: { method: "GET", isArray: true },
    });
};

var guestbookController = function($scope, guestbookData) {
    $scope.guestbooks = guestbookData.query();
    $scope.guestbook = {
        name: '',
        message: ''
    };

    $scope.addGuestbook = function() {
        guestbookData.save($scope.guestbook, function() {
            $scope.guestbooks.push($scope.guestbook);
            console.log('New guestbook added.');
        });

    };

};

var songRequestController = function($scope, songRequestData) {
    $scope.songRequests = songRequestData.query();

    $scope.songRequest = {
        name: '',
        song: '',
        artiste: ''
    };

    $scope.addSongRequest = function() {
        songRequestData.save($scope.songRequest, function() {
            $scope.songRequests.push($scope.songRequest);
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