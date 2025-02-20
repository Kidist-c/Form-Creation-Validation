document.addEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById('form-feedback');
    form.addEventListener("submit",function(event){
        event.preventDefault();

        
    })
    const username=document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim;
    const isValid=true;
    const messages=[];
    if(username.length<3){
        isValid=false;
        messages.push("The length should be greaterthan 3.");
    }
    if(!email.includes("@")||!email.includes(".")){
        isValid=false;
        messages.push('The email should include those characters.');
    }
    if (password.length<8){
        isValid=false;
        messages.push("password should greater than 8");
    }
    feedbackDiv.style.display="block";
    if(isValid){
        feedbackDiv.textcontent="Registration successful!";
        feedbackDiv.style.color="#28a745";

    }else{
        feedbackDiv.innerHTML= messages.join('br');
       
        feedbackDiv.style.color="#dc3545";
    }
    



})