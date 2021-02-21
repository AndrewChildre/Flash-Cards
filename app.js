
const questionBox = document.querySelector('.question')
const questionBtn = document.querySelector('.btn-1')
const answerBtn = document.querySelector('.btn-2')
const answerBox = document.querySelector('.answer')

//data1 = Object.entries(content1)
//console.log(data1)
    content1 = 
			{
				question1: 'answer1',
				question2: 'answer2',
				question3: 'answer3',
			},
    ``
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
                
                answerBtn.addEventListener('click', () => { 
        
                    // answerBtn.toggle('hidden')
                    console.log('click2') })
                    
                        




// answerBox.style.display = 'block';