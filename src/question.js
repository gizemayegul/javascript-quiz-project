class Question {
  // YOUR CODE HERE:
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  //

  // 2. shuffleChoices()
  shuffleChoices() {
    for (let i = 0; i < this.choices.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      const temp = this.choices[i];
      this.choices[i] = this.choices[randomIndex];
      this.choices[randomIndex] = temp;
    }
  }

  //!Another way to do it
  //   shuffleChoices() {
  //     let currentIndex = this.choices.length;
  //     while (currentIndex !== 0) {
  //       let randomIndex = Math.floor(Math.random() * currentIndex);
  //       this.choices.push(this.choices[randomIndex]);
  //       this.choices.splice(randomIndex, 1);
  //       currentIndex--;
  //     }
  //   }
}
