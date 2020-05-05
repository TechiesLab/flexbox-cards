const formBtn = document.querySelector('.frame')
const input = document.querySelector('.code')
const tasksBtn = document.querySelectorAll('.task')

// FAST / NOT CLEAN AND TO ENHANCE!

// code to provide to the kids randomly to unlock the next steps
// after validation of their frames
const validCodes = ['TC2020', 'FLX2020', 'TCLB20']
console.log(validCodes)

const enableTasks = () => {
  tasksBtn.forEach( button => {
    button.disabled = false
  })
}

const unlock = (e) => {

  const code = input.value

  if((validCodes.includes(code))){
    // unlock next steps and display solution
    solutionButton.click()
    enableTasks()
  }else{
    // display error message
    errorMessage.innerText = ` ❌ Mauvais CODE !`
    errorMessage.classList.add('display')
    setTimeout( () => { errorMessage.classList.remove('display') } ,5000 )
  }
  e.preventDefault()
}


formBtn.addEventListener('click', unlock)
