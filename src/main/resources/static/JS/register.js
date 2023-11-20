let form = document.getElementById('form')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

form.addEventListener('submit',(event)=>{
	event.preventDefault()
	
	//verifica se nenhum dos campos está vazio
	if(!email.value || !password.value || !password.value){
		showReponse('Campo vazio','alert')
		return;
	}
	
	//verifica se a senha e confirmação da senha são iguais
	if(password.value != password2.value){
		showReponse('Confirmação de senha errado','alert')
		return; 
	}
	
		
	fetch('/register',{
		method:'POST',
		headers:{
           "Content-Type": "application/json"
		},
		body:JSON.stringify({
			email: email.value,
			password:password.value
			
		})})
		.then( res => {
			if(res.status == 201){
				return res.json()
			} else if(res.status == 409){
				throw new Error("Email já cadastrado")
			} else {
				throw new Error("Erro no servidor")
			}
		})
		.then(data =>{
						
			localStorage.setItem('email',data.email)
			localStorage.setItem('password',data.password)
			
			console.log(data.email , + " "+ data. password )
			
			setTimeout(()=>{
				location.replace('/register/information')
			},1000)
			
		})
		.catch(erro =>{
			console.log('Erro')

		})
	
	
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

