class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  //   4. shuffleQuestions()
  shuffleQuestions() {
    if (!this.questions.length) {
      return undefined;
    }
    for (let i = 0; i < this.questions.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      const temp = this.questions[i];
      this.questions[i] = this.questions[randomIndex];
      this.questions[randomIndex] = temp;
    }
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer === this.getQuestion().answer) {
      this.correctAnswers++;
    }
  }

  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
    return true;
  }
}
