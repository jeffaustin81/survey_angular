surveyBot.controller('AnswersCtrl', function AnswersCtrl($scope, SurveyFactory) {
	$scope.answers = SurveyFactory.answers;
	$scope.responses = SurveyFactory.responses;
	$scope.SurveyFactory = SurveyFactory;
	
	$scope.countResponses = function(answered){
		var count = 0;
		$scope.responses.forEach(function(response) {
			if(response.response === answered.answer){
				count++; 
			}
		}, this);	
		return count;
	};
});