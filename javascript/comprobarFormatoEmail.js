function enviarEmail(){

}

var numeroDeLetrasTexto = 0;
var controlTextoEmail = false;
var controlDireccionEmail = false;


function contarCaracteres(){
    $('#texto-email').keyup(function () { 
        numeroDeLetrasTexto = $(this).val().length;
        $('#numeroDeCaracteres').text(numeroDeLetrasTexto);
        if(numeroDeLetrasTexto < 1){
            //Mas pequeño que 1
            //$('#boton-enviar-email').prop("disabled",true);
            controlTextoEmail = false;
        }
        else if(numeroDeLetrasTexto > 600){
            //Mas grande que 600
            //$('#boton-enviar-email').prop("disabled",true);
            controlTextoEmail = false;
        }
        else{
            //Todo Correcto
            //$('#boton-enviar-email').prop("disabled",false);
            controlTextoEmail = true;
        }
         
    });

    $('#texto-email').change(function () { 
        numeroDeLetrasTexto = $(this).val().length;
        $('#numeroDeCaracteres').text(numeroDeLetrasTexto);
        if(numeroDeLetrasTexto < 1){
            //Mas pequeño que 1
            controlTextoEmail = false;
        }
        else if(numeroDeLetrasTexto > 600){
            //Mas grande que 600
            controlTextoEmail = false;
        }
        else{
            //Todo Correcto
            controlTextoEmail = true;
        }
    });
}

function comprobarFormatoEmail(){
    $('#direccion-Email').keyup(function () {
        var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
        if(!re) {
            controlDireccionEmail = false;
           
        } else {
            controlDireccionEmail = true;
            
        }
    })
}

/*Private*/
function activarBotonEnviarEmail(){
    if(controlTextoEmail == true && controlDireccionEmail == true){
        $('#boton-enviar-email').prop("disabled",false);
    }
    else{
        $('#boton-enviar-email').prop("disabled",true);
    }
}

function activadorBotonEnviarEmail(){
    $('#direccion-Email').keyup(function () {
        activarBotonEnviarEmail();
    });

    $('#texto-email').keyup(function () { 
        activarBotonEnviarEmail();
    });
}