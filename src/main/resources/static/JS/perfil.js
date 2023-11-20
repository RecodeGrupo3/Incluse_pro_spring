

fetch(`/user?email=${localStorage.getItem('email')}`,{
	method:'GET'
})
.then(res => res.json())
.then(data =>{
	
	document.getElementById('username').innerText = data.username 
	document.getElementById('status').innerHTML = data.status
	
	data.jobs.forEach(element =>{
		document.getElementById('my-jobs').appendChild(
			addJob(element.work , element.type , (element.start + " - " + element.end )) )
	})
	data.skills.forEach(element =>{
		document.getElementById('my-skills').appendChild(
			addJob(element.course , element.type , (element.start + " - " + element.end )) )
	})

	console.log(data)

})
.catch()

function addJob(companyText, workText, dateText) {
    // Cria o elemento pai
    let father = document.createElement('div');
    father.className = 'my-job';

    // Cria o elemento para a empresa
    let company = document.createElement('div');
    company.className = 'company';
    let textCompany = document.createElement('p');
    textCompany.innerText = companyText;
    company.appendChild(textCompany);

    // Cria o elemento para o trabalho
    let work = document.createElement('div');
    work.className = 'work';
    let textWork = document.createElement('p');
    textWork.innerText = workText;
    work.appendChild(textWork);

    // Cria o elemento para a data
    let date = document.createElement('div');
    date.className = 'date';
    let textDate = document.createElement('p');
    textDate.innerText = dateText;
    date.appendChild(textDate);

    // Adiciona os elementos filhos ao pai
    father.appendChild(company);
    father.appendChild(work);
    father.appendChild(date);
	
	return father;
}


function addSkill(companyText, courseText, dateText) {
    // Cria o elemento pai
    let father = document.createElement('div');
    father.className = 'my-skill';

    // Cria o elemento para a empresa
    let company = document.createElement('div');
    company.className = 'company';
    let textCompany = document.createElement('p');
    textCompany.innerText = companyText;
    company.appendChild(textCompany);

    // Cria o elemento para o curso
    let course = document.createElement('div');
    course.className = 'course';
    let textCourse = document.createElement('p');
    textCourse.innerText = courseText;
    course.appendChild(textCourse);

    // Cria o elemento para a data
    let date = document.createElement('div');
    date.className = 'date';
    let textDate = document.createElement('p');
    textDate.innerText = dateText;
    date.appendChild(textDate);

    // Adiciona os elementos filhos ao pai
    father.appendChild(company);
    father.appendChild(course);
    father.appendChild(date);

    return father;
}
