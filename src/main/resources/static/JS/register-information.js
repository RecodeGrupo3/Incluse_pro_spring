
let buttonAddSkill = document.getElementById('add-skill')
let buttonAddJob = document.getElementById('add-job')


buttonAddSkill.addEventListener('click',()=>{
	document.querySelector('.my-skills').appendChild( addSkill() )
	
	
})

buttonAddJob.addEventListener('click',()=>{
	document.querySelector('.my-jobs').appendChild( addSkill() )
	
	
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
	job.className = "skill"
	
	let course = document.createElement('input')
	course.className = "Emprego"
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



