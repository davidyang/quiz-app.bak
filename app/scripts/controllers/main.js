'use strict';


angular.module('quizApp')
  .controller('MainCtrl', function ($scope, Quiz, Question) {
    $scope.quiz = Quiz.getQuestions();

    $scope.question_text = "";
    $scope.question_options = [{answer: ""}];

    this.deleteOption = function(index) {
      $scope.question_options.splice(index, 1);
    };

    this.addOption = function() {
      $scope.question_options.push({});
    };

    this.addQuestion = function($valid) {
      if(!$valid) {
        alert("Can't save form.");
      } else {
        var newQ = new Question($scope.question_text, $scope.question_options);
        Quiz.addQuestion(newQ);
        $scope.quiz = Quiz.getQuestions();
      }
    };

  })
  .controller('Topbar', function($scope, Quiz) {
    var quiz = Quiz;
    $scope.questions = function() {
      return Quiz.getQuestions();
    };

  });
