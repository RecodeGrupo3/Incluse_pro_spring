let form =  document.getElementById('form')
let email = document.getElementById('email')
let password = document.getElementById('password')

form.addEventListener('submit',(event)=>{
	event.preventDefault()
	
	//verifica se nenhum dos campos está vazio
	if(!email.value || !password.value || !password.value){
		showReponse('Campo vazio','alert')
		return;
	}
	
	fetch('/login',{
		method:'POST',
		headers:{
           "Content-Type": "application/json"
		},
		body:JSON.stringify({
			email:'teste',
			password:'Password'
			
		})})
		.then( res =>res.text())
		.then(data =>{
			console.log('Okay')
		})
	
	deletResponse()	
	
})

function showReponse(response,responseValue){
	
	let divResponse = document.createElement('div')
	let textResponse = document.createElement('p')
	let containerResponse = document.querySelector('.container-response')

	
	deletResponse()

	divResponse.className = `response ${responseValue}`
	
	textResponse.innerText = response
	
	divResponse.appendChild(textResponse)
	
	containerResponse.appendChild(divResponse)
	
}

function deletResponse(){
	
	let lastResponse = document.querySelector('.container-response .response')
	
	//Deletar resposta anterior	
	if(lastResponse){
		lastResponse.remove()
	}	
}
