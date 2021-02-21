
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
    
            data1 = Object.entries(content1)
    let randomQuestion = data1[Math.floor(Math.random() * data1.length)]
    console.log(randomQuestion)   


/questionBtn.addEventListener('click', () => {

})
answerBtn.addEventListener('click', () => { answerBox.style.display = 'block'
    
console.log('click2') })
