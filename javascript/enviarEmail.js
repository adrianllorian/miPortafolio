
function enviarEmail() {
    $('#boton-enviar-email').click(function () {
        
        var json=
    
        {
            "direccion": $('#direccion-Email').val(),
            "texto": $('#texto-email').val()
        }
       
        llamadaServidor(json);
    });

}


/*Private*/ 
function llamadaServidor(json){
    $('#loading-enviarEmail').show();
    $.ajax({
        type: "post",
        url: "https://elclientenotienelarazon.com:8443/EnviarEmail/enviarEmail",
        data: JSON.stringify(json),
        contentType: "application/json; charset=UTF-8"
           
    })
    .done(function (data, textStatus, jqXHR) {
        console.log("El texto a recibir es: " + data);
       /*Funciona*/ 
       cerrarModal()
       if(data != null){
            CORRECTO(data);
            ERROR_ENVIO(data);
            ERROR_FORMATO_EMAIL(data);
            ERROR_TAMANO_TEXTO_CORTO(data);
            ERROR_TAMANO_TEXTO_LARGO(data);
            LIMITE_DE_EMAILS_DIARIOS(data);
            
       }
       else{
        Swal.fire({
            text:"El servicio se encuentra caido. Pruebe mañana",
            icon:'error',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })
       }
       
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("La solicitud a fallado: " + textStatus + ' son cosas que pasan');

    });
}

/*Private Constantes*/
function CORRECTO(data){
    if(data == "El mensaje ha sido enviado a la perfección"){
        Swal.fire({
            text:data,
            icon:'success',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })
    }
}

function ERROR_ENVIO(data){
    if(data == "Algo ha fallado durante el envío"){
        Swal.fire({
            text:data,
            icon:'error',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })

    }
}

function ERROR_FORMATO_EMAIL(data){
    if(data == "El email no es correcto"){
        Swal.fire({
            text:data,
            icon:'error',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })

    }
}

function ERROR_TAMANO_TEXTO_CORTO(data){
    if(data == "El mensaje es demasiado corto"){
        Swal.fire({
            text:data,
            icon:'error',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })
    }
}

function ERROR_TAMANO_TEXTO_LARGO(data){
    if(data == "El mensaje es demasiado largo"){
        Swal.fire({
            text:data,
            icon:'error',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })

    }
}

function LIMITE_DE_EMAILS_DIARIOS(data){
    if(data == "Se ha alcanzado el limite diario de emails"){
        Swal.fire({
            text:data,
            icon:'warning',
            confirmButtonText: 'Cerrar',
            backdrop: true
        })

    }
}

function cerrarModal(){
     //$('#emailModal').modal('toggle');
     $('#emailModal').toggle();
     $(document.body).removeClass("modal-open");
     $(".modal-backdrop").remove();
     $(".fluid-container").attr('style','overflow: visible')
     $('#loading-enviarEmail').hide();
}