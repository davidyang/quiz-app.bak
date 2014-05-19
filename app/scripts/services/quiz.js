'use strict';

angular
  .module('Quiz.factories', ['angularLocalStorage'])
    .factory('Quiz', function(storage) {
        
        function Quiz() {
          this.getQuestions = function() {
            return storage.get("questions") || [];
          };

          this.addQuestion = function(question) {
            var questions = storage.get("questions") || [];
            questions.push(question);
            storage.set("questions", questions);
          };
        }

        return new Quiz;
    })
    .factory('Question', function() {
      function Question(text, options) {
        this.question_text = text;
        this.options = options;
      }

      return Question;
    });
