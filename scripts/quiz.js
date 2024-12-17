const questions = [
    { question: "1. What is the micro:bit?", options: ["A) A video game console", "B) A small, programmable computer", "C) A calculator", "D) A speaker"], answer: "B" },
    { question: "2. Which organization developed the micro:bit?", options: ["A) Apple", "B) Google", "C) BBC", "D) NASA"], answer: "C" },
    { question: "3. What can you use to program a micro:bit?", options: ["A) MakeCode", "B) Google Chrome", "C) PowerPoint", "D) YouTube"], answer: "A" },
    { question: "4. How do you power the micro:bit?", options: ["A) With a USB cable or battery pack", "B) By plugging it into an HDMI port", "C) Using a solar panel", "D) With Bluetooth only"], answer: "A" },
    { question: "5. What does the 5x5 LED matrix on the micro:bit do?", options: ["A) Connects to other devices", "B) Displays images, text, and animations", "C) Charges the battery", "D) Sends signals to other micro"], answer: "B" },
    { question: "6. How many buttons does the micro:bit have?", options: ["A) 1", "B) 2", "C) 3", "D) 4"], answer: "B" },
    { question: "7. What does the accelerometer on the micro:bit detect?", options: ["A) Sound", "B) Light", "C) Movement and tilt", "D) Temperature"], answer: "C" },
    { question: "8. What does the micro:bit’s compass detect?", options: ["A) Sound", "B) Light", "C) Direction", "D) Color"], answer: "C" },
    { question: "9. What is the function of the micro:bit’s radio feature?", options: ["A) To play music", "B) To communicate wirelessly with other micro", "C) To measure temperature", "D) To display colors"], answer: "B" },
    { question: "10. What are “pins” on the micro:bit?", options: ["A) Tiny LEDs", "B) Connectors for external components", "C) Speakers", "D) Extra buttons"], answer: "B" },
    { question: "11. What is an example of an input on the micro:bit?", options: ["A) LED matrix", "B) Button A and Button B", "C) Radio module", "D) Bluetooth"], answer: "B" },
    { question: "12. What is an example of an output on the micro:bit?", options: ["A) Button A", "B) LED matrix", "C) Compass", "D) Temperature sensor"], answer: "B" },
    { question: "13. What is the function of the micro:bit’s Bluetooth feature?", options: ["A) To display colors on the LED matrix", "B) To connect to a computer or mobile device wirelessly", "C) To measure temperature", "D) To control the compass"], answer: "B" },
    { question: "14. How many pins are on the edge connector of the micro:bit?", options: ["A) 5", "B) 10", "C) 15", "D) 25"], answer: "D" },
    { question: "15. What is a “forever” loop in programming on the micro:bit?", options: ["A) A loop that runs once", "B) A loop that runs continuously while the micro:bit is on", "C) A loop that stops when button A is pressed", "D) A loop that blinks the LED once"], answer: "B" },
    { question: "16. How can the micro:bit display a message on its LEDs?", options: ["A) By using its compass", "B) By turning on specific LEDs in the 5x5 grid", "C) By connecting to a computer", "D) By pressing both buttons"], answer: "B" },
    { question: "17. What programming style does the MakeCode editor use for beginners?", options: ["A) Java", "B) Block-based coding", "C) HTML", "D) SQL"], answer: "B" },
    { question: "18. How can you reset the micro:bit?", options: ["A) Pressing the reset button on the back", "B) Turning it upside down", "C) Pressing buttons A and B together", "D) Connecting it to Bluetooth"], answer: "A" },
    { question: "19. What component on the micro:bit can measure temperature?", options: ["A) Accelerometer", "B) Compass", "C) Temperature sensor", "D) LED matrix"], answer: "C" },
    { question: "20. What is an example of an event-driven program on the micro:bit?", options: ["A) A program that shows a permanent message", "B) A loop that keeps blinking LEDs", "C) A program that responds when Button A is pressed", "D) A countdown timer"], answer: "C" },
    { question: "21. How would you program the micro:bit to send messages to another micro:bit?", options: ["A) By using the light sensor", "B) By connecting a USB cable", "C) By using the radio library", "D) By pressing the reset button"], answer: "C" },
    { question: "22. What does the micro:bit’s tilt function measure?", options: ["A) Temperature changes", "B) Pressure", "C) Angle of tilt", "D) Sound level"], answer: "C" },
    { question: "23. How can a micro:bit program “remember” data when it’s powered off?", options: ["A) By storing it in a separate battery", "B) By saving data in storage memory", "C) By using the temperature sensor", "D) It can’t remember data"], answer: "B" },
];

const quizForm = document.getElementById('quiz-form');
const resultContainer = document.getElementById('quiz-result');

// Function to generate questions dynamically
function generateQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        let questionHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            questionHTML += `<label>
                                <input type="radio" name="q${index + 1}" value="${option.charAt(0)}"> ${option}
                             </label><br>`;
        });

        questionDiv.innerHTML = questionHTML;
        quizForm.insertBefore(questionDiv, quizForm.querySelector('.submit-btn'));
    });
}

// Event listener for form submission
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    questions.forEach((q, index) => {
        const userAnswer = quizForm[`q${index + 1}`]?.value;
        if (userAnswer === q.answer) score++;
    });

    resultContainer.textContent = `Your Score: ${score} out of ${questions.length}`;
});

// Generate questions when the page loads
generateQuestions();
