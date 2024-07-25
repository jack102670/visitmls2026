<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6">Quiz</h1>
      <div v-if="currentQuestion < quiz.length" class="mb-6">
        <p class="text-lg font-semibold mb-4">{{ quiz[currentQuestion].question }}</p>
        <ul>
          <li v-for="(choice, index) in quiz[currentQuestion].choices" :key="index" class="mb-2">
            <button 
              @click="selectAnswer(choice)"
              :class="{
                'bg-blue-500 text-white': selectedAnswer === choice,
                'bg-green-500': correctAnswer === choice,
                'bg-red-500': incorrectAnswer === choice && selectedAnswer === choice,
                'bg-gray-200': !selectedAnswer
              }"
              class="w-full p-2 rounded-md hover:bg-blue-400 transition"
              :disabled="selectedAnswer"
            >
              {{ choice }}
            </button>
          </li>
        </ul>
        <div v-if="selectedAnswer" class="mt-4">
          <p v-if="isCorrect" class="text-green-500 font-semibold">Correct!</p>
          <p v-else class="text-red-500 font-semibold">Wrong! The correct answer is {{ quiz[currentQuestion].answer }}.</p>
          <button @click="nextQuestion" class="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
            Next Question
          </button>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-lg font-semibold">Quiz Completed!</p>
        <p class="text-lg">Your score: {{ score }} / {{ quiz.length }}</p>
        <button @click="restartQuiz" class="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition">Restart Quiz</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizD",
  data() {
    return {
      quiz: [
        {
          question: "Siapakah yang mencipta Python?",
          choices: [
            "Guido van Rossum",
            "Google",
            "Matz",
            "Dennis Ritchie",
          ],
          answer: "Guido van Rossum",
        },
        {
          question: "Apakah laman web rasmi Python?",
          choices: [
            "python.com",
            "python.net",
            "python.org",
            "python-lang.com",
          ],
          answer: "python.org",
        },
        {
          question: "Nyatakan versi Python yang terkini",
          choices: [
            "2.7",
            "3.11",
            "3.9",
            "3.12",
          ],
          answer: "3.12",
        },
        {
          question: "Yang manakah antara berikut BUKAN libraries dalam python",
          choices: [
            "requests",
            "django",
            "laravel",
          ],
          answer: "laravel",
        },
      ],
      currentQuestion: 0,
      selectedAnswer: null,
      score: 0,
      correctAnswer: null,
      incorrectAnswer: null,
      isCorrect: false,
    };
  },
  methods: {
    selectAnswer(choice) {
      this.selectedAnswer = choice;
      if (choice === this.quiz[this.currentQuestion].answer) {
        this.score++;
        this.isCorrect = true;
        this.correctAnswer = choice;
      } else {
        this.isCorrect = false;
        this.incorrectAnswer = choice;
        this.correctAnswer = this.quiz[this.currentQuestion].answer;
      }
    },
    nextQuestion() {
      this.currentQuestion++;
      this.resetQuestionState();
    },
    resetQuestionState() {
      this.selectedAnswer = null;
      this.correctAnswer = null;
      this.incorrectAnswer = null;
      this.isCorrect = false;
    },
    restartQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
      this.resetQuestionState();
    },
  },
};
</script>

<style>
/* Additional styling if needed */
</style>
