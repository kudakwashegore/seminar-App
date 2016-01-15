angular.module('fifApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) { 
	
})

.controller('SplashCtrl', function($scope, $ionicModal, $timeout) {
	  
	 $ionicModal.fromTemplateUrl('templates/tooltip.html', {
		scope: $scope
	  }).then(function(modal) {
		$scope.modal = modal;
		// Triggered in the login modal to close it
		  $scope.closeMessage = function() {
			window.localStorage["firstTimer"] = false;
			$scope.modal.hide();
		  };
		
		  // Open the login modal
		  $scope.showModal = function() {
			$scope.modal.show();
		  }; 
		  
		  if(window.localStorage["firstTimer"] == undefined || window.localStorage["firstTimer"] == "") 
			{ 	
				$scope.showModal();				
				window.localStorage["firstTimer"] = false;
			}	  
		 
	  });
	
})

.controller('ProgramCtrl', function($scope, Programs) {
  $scope.programs = Programs.all();
})

.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.all();
})

.controller('SpeakerCtrl', function($scope, $stateParams, Speakers) {
	$scope.speaker = Speakers.get($stateParams.speakerId);
})

.controller('SongsCtrl', function($scope, Songs) {
	$scope.songs = Songs.all();
})

.controller('SongCtrl', function($scope, $stateParams, Songs) {
	$scope.song = Songs.get($stateParams.songId);
})

.controller('VenueCtrl', function($scope, Map) {
	var countTime = 0;  
	//GoogleMaps();
	Map.drawMap();
	
	var initDist = setInterval(function(){	  	
			if(countTime > 300 && distance < 0){alert("Failed to get your current location."); countTime = 0;}
			if(Map.getDistance() != -1)
			{						
				$scope.distance = "You are about " + Map.getDistance() + " from the venue.";
				$scope.$apply();
				clearInterval(initDist);
			}
			countTime++;
	}, 100);  	
});
