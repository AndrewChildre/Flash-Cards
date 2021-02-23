
const questionBox = document.querySelector('.question')
const questionBtn = document.querySelector('.btn-1')
const answerBtn = document.querySelector('.btn-2')
const answerBox = document.querySelector('.answer')

    content1 = 
			{
				'What are 5 Javascript data types': 'Strings, Boolean, Number, Object, Undefined',

				'What is the use of isNaN function?': 'It returns TRUE if the argument is not a number, otherwise it is false',
				
                'Which company developed JavaScript?': 'Netscape',

                'What is "this" keyword in JavaScript?': 'It refers to the object from which it was called',

                'What is the data type of a variable?': 'Variables are objects',

                'What is a for-in loop?': 'it\'s used to loop through the properties of an object',

                'What does "unshift" do?': 'It adds an item to the begining of an array',

                'How many ways can JavaScript be involved in HTML': '3, inline, internal, external',

                'What does "const" mean?': 'It\'s a variable assignment that cant be reassigned',

                'What does DOM stand for?': 'DOM = Document Object Model'
			},
    
            data1 = Object.entries(content1)
            
            function random1() {
     randomQuestion = data1[Math.floor(Math.random() * data1.length)]
                questionBox.innerText = `${randomQuestion[0]}`
                answerBox.innerText = `${randomQuestion[1]}`
                
                console.log(randomQuestion)  } 
                
                function tog1() {answerBox.classList.toggle('hidden')};
                
                questionBtn.addEventListener('click', () => {
                    random1();
                })
