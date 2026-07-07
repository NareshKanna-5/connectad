const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    clearErrors();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name===""){

        showError("name","Name is required");

        valid=false;

    }

    if(email===""){

        showError("email","Email is required");

        valid=false;

    }

    else if(!validateEmail(email)){

        showError("email","Enter a valid email");

        valid=false;

    }

    if(message===""){

        showError("message","Message is required");

        valid=false;

    }

    if(valid){

        alert("Message Sent Successfully!");

        form.reset();

    }

});

function showError(id,message){

    const input=document.getElementById(id);

    input.nextElementSibling.textContent=message;

}

function clearErrors(){

    document.querySelectorAll(".error").forEach(error=>{

        error.textContent="";

    });

}

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}