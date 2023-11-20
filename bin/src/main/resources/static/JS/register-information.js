
let buttonAddSkill = document.getElementById('add-skill')
let buttonAddJob = document.getElementById('add-job')


buttonAddSkill.addEventListener('click',()=>{
	document.querySelector('.my-skills').appendChild( addSkill() )
	
	
})

buttonAddJob.addEventListener('click',()=>{
	document.querySelector('.my-jobs').appendChild( addJob() )
	
	
})


function addSkill(){
	
	let skill = document.createElement('div')
	skill.className = "skill"
	
	let course = document.createElement('input')
	course.className = "course"
	course.placeholder = "Curso"
	
	skill.appendChild(course)
	
	let funcationCourse = document.createElement('input')
	funcationCourse.className = "funcation"
	funcationCourse.placeholder = "Tipo do curos"
	
	skill.appendChild(funcationCourse)
	
	let dateStart = document.createElement('input')
	dateStart.className = "date-start"
	dateStart.type="date"
	
	skill.appendChild(dateStart)
	
	let dateEnd = document.createElement('input')
	dateEnd.className = "date-end"
	dateEnd.type="date"

	skill.appendChild(dateEnd)
	
	return skill;
	
}

function addJob(){
	
	let job = document.createElement('div')
	job.className = "job"
	
	let course = document.createElement('input')
	course.className = "work"
	course.placeholder = "Curso"
	
	job.appendChild(course)
	
	let funcationCourse = document.createElement('input')
	funcationCourse.className = "funcation"
	funcationCourse.placeholder = "Tipo do curos"
	
	job.appendChild(funcationCourse)
	
	let dateStart = document.createElement('input')
	dateStart.className = "date-start"
	dateStart.type="date"
	
	job.appendChild(dateStart)
	
	let dateEnd = document.createElement('input')
	dateEnd.className = "date-end"
	dateEnd.type="date"

	job.appendChild(dateEnd)
	
	return job;

}

//Enviar informações para o back-end
document.getElementById('send').addEventListener('click',()=>{
	
	if(localStorage.getItem('email').value || localStorage.getItem('password').value){
		
	}
	showMessage()
	
	
	let user = {
		email: localStorage.getItem('email'),
		password: localStorage.getItem('password'),
		username: document.getElementById('name').value.trim(),
		birth: document.getElementById('birth').value.trim(),
		status: document.getElementById('status').value.trim(),
		skills:[],
		jobs:[],
	}
	
	document.querySelectorAll('.skill').forEach(element =>{
		skill = {
			course: element.querySelector('.course').value,
			type: element.querySelector('.funcation').value,
			start: element.querySelector('.date-start').value,
			end: element.querySelector('.date-end').value
		}
		
		user.skills.push(skill)
		
	})
	
	document.querySelectorAll('.job').forEach(element =>{
		job = {
			work: element.querySelector('.work').value,
			type: element.querySelector('.funcation').value,
			start: element.querySelector('.date-start').value,
			end: element.querySelector('.date-end').value
		}
		
		
		user.jobs.push(job)
		
	})
	
	console.log(user)
	
	fetch("/register/information",{
		method:'POST',
		headers: {
    		'Content-Type': 'application/json' 
  		},
		body: JSON.stringify(user)
	})
	.then(res => res.text())
	.then(data =>{
		if(data == "success"){
			showMessage("Informações cadastrada com sucesso")
		} else if(date == "failure"){
			showMessage("Erro ao cadastrar informações")

		} else {
			
		}
		
	})
	.catch(data =>{
		console.log('Erro')
	})
	
})


function showMessage(myText){
	let div = document.getElementById('response')
	let LastMassage = div.querySelector('.message')
	
	LastMassage.remove()
	
	let message = document.createElement('div')
	message.className = "message"
	
	let text = document.createElement('p')
	text.innerText = myText
	
	message.appendChild(text)
	
	document.getElementById('response').appendChild(message)
	
	
}

