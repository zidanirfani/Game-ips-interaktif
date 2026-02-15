// quiz-data.js

class QuizDataManager {
    constructor() {
        this.quizzes = [];
    }

    async loadQuizData(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.quizzes = await response.json();
        } catch (error) {
            console.error('Error loading quiz data:', error);
        }
    }

    getQuizzes() {
        return this.quizzes;
    }
}

export default QuizDataManager;