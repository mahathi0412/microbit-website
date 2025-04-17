const fullQuestionBank = {
    easy: [
      { q: "What is a micro:bit?", a: "B", options: ["A) A video game console", "B) A small, programmable computer", "C) A calculator", "D) A speaker"] },
      { q: "Which organization developed the micro:bit?", a: "C", options: ["A) Apple", "B) Google", "C) BBC", "D) NASA"] },
      { q: "What can you use to program a micro:bit?", a: "A", options: ["A) MakeCode", "B) Google Chrome", "C) PowerPoint", "D) YouTube"] },
      { q: "How do you power the micro:bit?", a: "A", options: ["A) With a USB cable or battery pack", "B) By plugging it into an HDMI port", "C) Using a solar panel", "D) With Bluetooth only"] },
      { q: "What does the 5x5 LED matrix on the micro:bit do?", a: "B", options: ["A) Connects to other devices", "B) Displays images, text, and animations", "C) Charges the battery", "D) Sends signals to other micro:bits"] },
      { q: "How many buttons does the micro:bit have?", a: "B", options: ["A) 1", "B) 2", "C) 3", "D) 4"] },
      { q: "What does the accelerometer on the micro:bit detect?", a: "C", options: ["A) Sound", "B) Light", "C) Movement and tilt", "D) Temperature"] },
      { q: "What does the micro:bit’s compass detect?", a: "C", options: ["A) Sound", "B) Light", "C) Direction", "D) Color"] },
      { q: "What is the function of the micro:bit’s radio feature?", a: "B", options: ["A) To play music", "B) To communicate wirelessly with other micro:bits", "C) To measure temperature", "D) To display colors"] },
      { q: "What are “pins” on the micro:bit?", a: "B", options: ["A) Tiny LEDs", "B) Connectors for external components", "C) Speakers", "D) Extra buttons"] },
      { q: "What is an example of an input on the micro:bit?", a: "B", options: ["A) LED matrix", "B) Button A and Button B", "C) Radio module", "D) Bluetooth"] },
      { q: "What is an example of an output on the micro:bit?", a: "B", options: ["A) Button A", "B) LED matrix", "C) Compass", "D) Temperature sensor"] },
      { q: "What is the function of the micro:bit’s Bluetooth feature?", a: "B", options: ["A) To display colors on the LED matrix", "B) To connect to a computer or mobile device wirelessly", "C) To measure temperature", "D) To control the compass"] },
      { q: "How many pins are on the edge connector of the micro:bit?", a: "D", options: ["A) 5", "B) 10", "C) 15", "D) 25"] },
      { q: "What is a “forever” loop in programming on the micro:bit?", a: "B", options: ["A) A loop that runs once", "B) A loop that runs continuously while the micro:bit is on", "C) A loop that stops when button A is pressed", "D) A loop that blinks the LED once"] },
      { q: "How can the micro:bit display a message on its LEDs?", a: "B", options: ["A) By using its compass", "B) By turning on specific LEDs in the 5x5 grid", "C) By connecting to a computer", "D) By pressing both buttons"] },
      { q: "What programming style does the MakeCode editor use for beginners?", a: "B", options: ["A) Java", "B) Block-based coding", "C) HTML", "D) SQL"] },
      { q: "How can you reset the micro:bit?", a: "A", options: ["A) Pressing the reset button on the back", "B) Turning it upside down", "C) Pressing buttons A and B together", "D) Connecting it to Bluetooth"] },
      { q: "What component on the micro:bit can measure temperature?", a: "C", options: ["A) Accelerometer", "B) Compass", "C) Temperature sensor", "D) LED matrix"] },
      { q: "What is an example of an event-driven program on the micro:bit?", a: "C", options: ["A) A program that shows a permanent message", "B) A loop that keeps blinking LEDs", "C) A program that responds when Button A is pressed", "D) A countdown timer"] }
    ],
    medium: [
      { q: "How would you program the micro:bit to send messages to another micro:bit?", a: "C", options: ["A) By using the light sensor", "B) By connecting a USB cable", "C) By using the radio library", "D) By pressing the reset button"] },
      { q: "What does the micro:bit’s tilt function measure?", a: "C", options: ["A) Temperature changes", "B) Pressure", "C) Angle of tilt", "D) Sound level"] },
      { q: "How can a micro:bit program “remember” data when it’s powered off?", a: "B", options: ["A) By storing it in a separate battery", "B) By saving data in storage memory", "C) By using the temperature sensor", "D) It can’t remember data"] },
      { q: "What is a method to make the micro:bit measure temperature more accurately?", a: "B", options: ["A) Using the compass for calibration", "B) Using external temperature sensors", "C) Adjusting the LED brightness", "D) Using the accelerometer"] },
      { q: "What is the purpose of the \"forever\" block in MakeCode?", a: "B", options: ["A) To stop a program after a few seconds", "B) To loop actions continuously", "C) To run code once", "D) To delete the code"] },
      { q: "Which block is used to show text or images on the micro:bit’s LED display?", a: "D", options: ["A) Show number", "B) Show string", "C) Show icon", "D) All of the above"] },
      { q: "What is the function of the \"on start\" block?", a: "B", options: ["A) To run code when a button is pressed", "B) To run code once at the beginning of the program", "C) To create a loop", "D) To end the program"] },
      { q: "Which category in MakeCode contains blocks for detecting button presses?", a: "B", options: ["A) Logic", "B) Input", "C) Loops", "D) Math"] },
      { q: "What is the purpose of the \"pause\" block in MakeCode?", a: "C", options: ["A) To stop the program permanently", "B) To slow down the micro", "C) To create a delay between actions", "D) To reset the program"] },
      { q: "In the MakeCode platform, which block is used to repeat a set of actions a specific number of times?", a: "C", options: ["A) Forever", "B) If - then", "C) Repeat", "D) While"] },
      { q: "Which block category allows you to use conditions like 'if' and 'else'?", a: "B", options: ["A) Variables", "B) Logic", "C) Input", "D) Loops"] },
      { q: "What is the purpose of the \"set variable\" block?", a: "B", options: ["A) To create loops", "B) To define a value that can be used later in the program", "C) To display a number on the LED screen", "D) To reset the program"] },
      { q: "How can you create a random number in MakeCode?", a: "A", options: ["A) Using the \"math.random\" block", "B) By pressing both buttons on the micro", "C) Using the \"logic.random\" block", "D) By shaking the micro:bit"] },
      { q: "What does the \"input on shake\" block do?", a: "B", options: ["A) Displays text when the micro:bit is tilted", "B) Runs a specific set of actions when the micro:bit is shaken", "C) Resets the micro:bit when it is shaken", "D) Stops the program"] },
      { q: "Which block category contains options for wireless communication using the radio feature?", a: "B", options: ["A) Input", "B) Radio", "C) Logic", "D) Variables"] },
      { q: "How can you display a heart icon on the micro’s LED matrix in MakeCode?", a: "B", options: ["A) Use the \"show string\" block", "B) Use the \"show icon\" block and select a heart", "C) Use the \"show number\" block", "D) Use the \"show LEDs\" block and draw a heart"] },
      { q: "What does the \"if...then\" block do in a MakeCode program?", a: "B", options: ["A) Repeats an action forever", "B) Executes an action only when a certain condition is true", "C) Stops the program", "D) Displays text on the LED screen"] },
      { q: "Which block is used to detect if a pin on the micro is touched?", a: "C", options: ["A) On button A pressed", "B) Pin is touched", "C) Digital read pin", "D) Analog write pin"] },
      { q: "How do you switch between block coding and text coding in MakeCode?", a: "B", options: ["A) By pressing the reset button", "B) By selecting the “JavaScript” or “Python” tab", "C) By updating the firmware", "D) By dragging the blocks to the LED screen"] },
      { q: "What happens if you delete a block from your MakeCode workspace?", a: "B", options: ["A) It permanently disappears", "B) It goes back to its category in the toolbox", "C) It disables the micro", "D) It resets the program"] }
    ],
    hard: [
      { q: "Which block would you use to program the micro:bit to play a melody?", a: "B", options: ["A) Show string", "B) Play melody", "C) On shake", "D) Repeat"] },
      { q: "What is the \"logic compare\" block used for?", a: "A", options: ["A) To compare numbers or values and return true or false", "B) To repeat actions", "C) To display a message", "D) To reset the program"] },
      { q: "Which block can be used to light up an external LED connected to the micro:bit?", a: "B", options: ["A) Set variable", "B) Digital write pin", "C) Show number", "D) On button A pressed"] },
      { q: "Can multiple micro:bits communicate using radio?", a: "A", options: ["A) Yes", "B) No", "C) Only 2", "D) Only 5"] },
      { q: "How do you test your program before downloading it?", a: "B", options: ["A) USB", "B) Simulator", "C) Button A", "D) Pause"] },
      { q: "What kind of data can be sent over radio?", a: "D", options: ["A) Only numbers", "B) Only icons", "C) Only text", "D) Text & numbers"] },
      { q: "How could you create a step counter?", a: "C", options: ["A) Bluetooth", "B) Compass", "C) Accelerometer", "D) LED"] },
      { q: "Why might a loop crash a program?", a: "D", options: ["A) Too short", "B) Uses icons", "C) No pause", "D) Runs too fast"] },
      { q: "What languages can be used to program the micro:bit?", a: "D", options: ["A) HTML", "B) Scratch", "C) C++", "D) Python and JavaScript"] },
      { q: "What’s the purpose of using variables in repeated operations?", a: "B", options: ["A) To slow code", "B) To store values", "C) To reset pins", "D) To control LEDs"] },
      { q: "Can a micro:bit store data permanently?", a: "B", options: ["A) Yes, with a chip", "B) No, only in RAM", "C) Yes, in the cloud", "D) Only on PC"] },
      { q: "What causes runtime errors in micro:bit programs?", a: "A", options: ["A) Bad logic", "B) Overheating", "C) Compass", "D) Reset"] },
      { q: "How do you get the direction the micro:bit is facing?", a: "D", options: ["A) Light sensor", "B) Accelerometer", "C) Tilt sensor", "D) Compass"] },
      { q: "What is the impact of too many 'pause' blocks in a forever loop?", a: "C", options: ["A) No output", "B) Confusion", "C) Slow program", "D) LED error"] },
      { q: "How does the radio block help communication?", a: "C", options: ["A) Plays music", "B) Links wires", "C) Sends messages", "D) Triggers input"] },
      { q: "What is the difference between Bluetooth and the radio feature?", a: "B", options: ["A) Both use same code", "B) Bluetooth is standard, radio is custom", "C) Radio uses WiFi", "D) Bluetooth needs battery"] },
      { q: "Can you program two micro:bits to play a multiplayer game?", a: "A", options: ["A) Yes", "B) No", "C) Only via USB", "D) Only in Python"] },
      { q: "Why is the 'on start' block important in coding?", a: "C", options: ["A) It stops the code", "B) It reads sensors", "C) It initializes setup", "D) It resets"] },
      { q: "What could you use the compass for in a project?", a: "D", options: ["A) Tilt detection", "B) Vibration sensing", "C) Temperature", "D) Direction navigation"] },
      { q: "What happens if you forget to use a pause in a forever loop?", a: "B", options: ["A) It runs normally", "B) The program may crash or run too fast", "C) LED lights up", "D) It stops"] }
    ]
  };
  
  function getRandomSubset(array, n) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
  }

  const selectedQuestions = [
    ...getRandomSubset(fullQuestionBank.easy, 5),
    ...getRandomSubset(fullQuestionBank.medium, 5),
    ...getRandomSubset(fullQuestionBank.hard, 5)
  ];
  const quizForm = document.getElementById('quiz-form');
  const resultContainer = document.getElementById('quiz-result');
  function generateQuestions() {
    selectedQuestions.forEach((q, i) => {
      const qDiv = document.createElement('div');
      qDiv.classList.add('question');
      qDiv.id = `question${i + 1}`;
      let html = `<p><strong>Q${i + 1}. ${q.q}</strong></p>`;
      q.options.forEach(opt => {
        html += `<label><input type="radio" name="q${i + 1}" value="${opt.charAt(0)}"> <span>${opt}</span></label><br>`;
      });
      qDiv.innerHTML = html;
      quizForm.insertBefore(qDiv, quizForm.querySelector('.submit-btn'));
    });
  }
  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    let score = 0;
    selectedQuestions.forEach((q, i) => {
      const userAnswer = quizForm[`q${i + 1}`]?.value;
      const qDiv = document.getElementById(`question${i + 1}`);
  
      const labels = qDiv.querySelectorAll('label');
      labels.forEach(label => {
        const input = label.querySelector('input');
        const span = label.querySelector('span');
  
        if (input.value === q.a) {
          span.style.color = 'green';
          if (input.checked) score++;
        } else if (input.checked) {
          span.style.color = 'red';
        }
      });
  
      const feedback = document.createElement('p');
      feedback.style.color = 'blue';
      feedback.style.fontStyle = 'italic';
      feedback.textContent = `Correct Answer: ${q.a}`;
      qDiv.appendChild(feedback);
    });
  
    resultContainer.textContent = `Your Score: ${score} out of ${selectedQuestions.length}`;
  });
  
  generateQuestions();