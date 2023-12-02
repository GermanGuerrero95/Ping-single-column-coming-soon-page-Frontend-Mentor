

//Selectores
const   btnSend = document.querySelector("button"),
        inputEmail = document.querySelector("input"),  
        errorText = document.querySelector("p");  

        
//Eventos


const validarEmail = (email) => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
};




//Funciones 

btnSend.addEventListener("click",(e)=>{


    e.preventDefault();

    const mensajeError = document.querySelector(".errorTextClass");

    if(mensajeError){
        mensajeError.textContent ="";
    }



   
    if(inputEmail.value === ""){
        errorText.textContent ="Please provide an email address";
        errorText.classList.add("errorTextClass");
        return;
    }

    


    if(!validarEmail(inputEmail.value) && inputEmail.value.length>0){
        errorText.textContent ="Please provide a valid email address";
        errorText.classList.add("errorTextClass");
       
    } else{
        alert("correctly sent email");
    }
        
});





