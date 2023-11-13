let form =  document.getElementById('form')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')

form.addEventListener('submit',(event)=>{
	event.preventDefault()
	
	console.log(`Email: ${email.value} \nPassword: ${password.value} \nPassword2: ${password2.value}`)
	
})