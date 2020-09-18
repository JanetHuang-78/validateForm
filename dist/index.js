const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const pwd = document.getElementById("password")
const pwd2 = document.getElementById("password2")



function showError(input,Msg){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const errMsg = formControl.querySelector("small")
	errMsg.innerText = Msg;
}

function showSuccess(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isValid(email){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if (!re.test(String(email.value).toLowerCase())){
    	showError(email,'email is invalid')
	} else{showSuccess(email)}
	
}

function checkRequire(array){
		array.forEach(function(input){
			if (input.value.trim() ===""){
				showError(input,`${getFieldName(input)} is required`)
			} else{showSuccess(input)}
		})

}

function getFieldName(input){
	return input.id.charAt(0).toUpperCase()+ input.id.slice(1)
}

function checkLength(input,min,max){
	if(input.value.length < min){
			showError(input,`${getFieldName(input)} must be more than ${min} character`)
	} else if (input.value.length > max){
			showError(input,`${getFieldName(input)} must be less than ${max} character`)
	}else {showSuccess(input)}
}

function checkLength2(array,min,max){
		for(let input of array){
			if (input.value.length < min){
				showError(input,`${getFieldName(input)} must be more than ${min} haracter`)
			}else if (input.value.length>max){
				showError(input,`${getFieldName(input)} must be less than ${max} character`)
			}else{
				showSuccess(input)
			}
		} 
}

function checkPasswordMatch(input1,input2){
	if (input1.value!==input2.value){
		showError(input2,"Password do not match")
	}
}

form.addEventListener('submit', function(event){
	event.preventDefault();
	checkRequire([username,email,password,password2]);
	/*checkLength(username,3,15);
	checkLength(pwd,3,15);
	checkLength(pwd2,3,15);*/
	checkLength2([username,password,password2],3,15)
	isValid(email);
	
	checkPasswordMatch(password,password2)
})

