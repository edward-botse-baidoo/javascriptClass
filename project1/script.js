const quiz = [
          { question: "JavaScript is a statically typed language.", answer: "F" },
          { question: "The `this` keyword in JavaScript always refers to the global object.", answer: "F" },
          { question: "In JavaScript, `undefined` and `null` are strictly equal (`===`).", answer: "F" },
          { question: "The `let` keyword allows you to declare variables that are block-scoped.", answer: "T" },
          { question: "Arrow functions do not have their own `this` binding.", answer: "T" },
          { question: "JavaScript supports multiple inheritance.", answer: "F" },
          { question: "The `==` operator performs type coercion before comparison.", answer: "T" },
          { question: "A JavaScript function can return multiple values using an array or an object.", answer: "T" },
          { question: "A closure allows a function to remember the variables from its outer scope even after the outer function has finished executing.", answer: "T" },
          { question: "JavaScript is a compiled language.", answer: "F" },
          { question: "`NaN === NaN` evaluates to `true`.", answer: "F" },
          { question: "The `async` keyword makes a function return a Promise.", answer: "T" },
          { question: "The `map()` method modifies the original array.", answer: "F" },
          { question: "Objects in JavaScript are mutable even when declared with `const`.", answer: "T" },
          { question: "In JavaScript, the `typeof` operator returns `'array'` for an array.", answer: "F" },
          { question: "The `setTimeout` function blocks execution of the program until the timer expires.", answer: "F" },
          { question: "JavaScript's `for...in` loop is best used for iterating over arrays.", answer: "F" },
          { question: "The `includes()` method can be used to check if an array contains a specific value.", answer: "T" },
          { question: "The `bind()` method creates a new function with a specific `this` value.", answer: "T" },
          { question: "In JavaScript, template literals are enclosed by double quotes (`\" \"`).", answer: "F" }
        ];
        
        const trueButton = document.querySelector('#trueButton');
        const falseButton = document.querySelector('#falseButton');
        const gameText = document.querySelector('#gameText');
        const scoreText = document.querySelector('#scoreText');
        
        let gameScore = 0;
        
        function waitForAnswer() {
            return new Promise(resolve => {
                const handleClick = (event) => {
                    resolve(event.target.id === 'trueButton' ? 'T' : 'F');
                    trueButton.removeEventListener('click', handleClick);
                    falseButton.removeEventListener('click', handleClick);
                };
                
                trueButton.addEventListener('click', handleClick);
                falseButton.addEventListener('click', handleClick);
            });
        }
        
        async function runQuiz() {
            for (const q of quiz) {
                gameText.textContent = q.question; 
                const userAnswer = await waitForAnswer(); 
        
                if (userAnswer === q.answer) {
                    gameScore += 1;
                }
        
                scoreText.textContent = `Score: ${gameScore}`;
            }
        
            gameText.textContent = "Quiz finished!";
        }
        
        runQuiz();
        