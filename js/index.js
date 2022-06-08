
function validateForm() {
   
    const loginForm =document.getElementById('createAccount');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm-password');
    


    let isValid = true;
   
    //name
    if (fullname.value.trim()==''){
        setError(fullname, 'Name required');
        isValid = false;
        return;
        
    }
        
    
    else if (! fullname.value.toLowerCase().match('[a-z]+') ){
        setError(fullname, 'Name must contain only letters');
        isValid = false;
        return;
        
        
    }
    else{
        fullname.parentElement.classList.remove('error')
    }
    
    //email
    if (! email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        setError(email, 'Please enter a valid email');
        isValid = false;
        return;
        
        
    }
    
    else
    {
        email.parentElement.classList.remove('error');
        
    }
   
    //phone
    if (phone.value.trim()==''){
        setError(phone, 'Phone number required');
        isValid = false;
        return;
       
    }

    
    else if (! phone.value.toLowerCase().match(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/))
    {
        setError(phone, 'invalid Phone Number');
        isValid = false;
        return;
        
    }
    else {
        phone.parentElement.classList.remove('error')
    }

    //username
    if (username.value.trim()==''){
        setError(username, 'Username required');
        isValid = false;
        return;
        
    }
    
    else if (username.value.trim().length < 5){
        setError(username, 'Username must be at least 5 characters');
        isValid = false;
        return;
        
    }
    else {
        username.parentElement.classList.remove('error')
    }
    
    //password
    if (password.value.trim()==''){
        setError(password, 'Password required');
        isValid = false;
        return;
        
    }
    
    else if (password.value.trim().length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isValid = false;
        return;
        
    }
    else {
        password.parentElement.classList.remove('error') }
    
        //confirm password
    if(password.value != confirm.value || confirm.value == null)
    {
        setError(confirm, 'Passwords do not match');
        isValid = false;
        valid = isValid;
        return;
    }

    else{
        confirm.parentElement.classList.remove('error')
        isValid = true;
    }

    if (isValid = true){
        storeInfo()
     window.location.href = 'information.html'

    

}
function setError(element, errorMessage){
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function storeInfo() {
    localStorage.setItem('fullname', document.getElementById('fullname').value)
    localStorage.setItem('email', document.getElementById('email').value)
    localStorage.setItem('phone', document.getElementById('phone').value)
    localStorage.setItem('username', document.getElementById('username').value)
    localStorage.setItem('password', document.getElementById('password').value)

}


}

function formTransfer() {
    
    document.getElementById('fullNameList').innerHTML = localStorage.getItem('fullname')
    
    document.getElementById('emailList').innerHTML = localStorage.getItem('email')
    
    document.getElementById('phoneList').innerHTML = localStorage.getItem('phone')
    
    document.getElementById('usernameList').innerHTML = localStorage.getItem('username')
    
    document.getElementById('passwordList').innerHTML = localStorage.getItem('password')

}