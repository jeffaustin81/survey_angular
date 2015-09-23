surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, SurveyFactory) {
	$scope.questions = SurveyFactory.questions;
	$scope.SurveyFactory = SurveyFactory;
});