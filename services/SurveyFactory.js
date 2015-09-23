surveyBot.factory('SurveyFactory', function SurveyFactory() {
	var factory = {};
	factory.questions = [{question: "What do you prefer Cats or Dogs?"}, {question: "Pizza or Burgers?"}];
	factory.answers = [{question: 0, answer: "Cat"}, {question: 0, answer:"Dog"}, {question: 1, answer: "Pizza"}, {question: 1, answer:"Burger"}];
	
	factory.responses =[];
	
	factory.addResponses = function () {
		var response = {response: factory.newResponse};
		factory.responses.push(response);
		factory.newResponse = null;
	}
	
	return factory;
});