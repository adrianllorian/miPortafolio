function enlaces(){
    /*Trabajos*/
    enlace_Trabajos1();
    enlace_Trabajos2();
    enlace_Trabajos3();
    enlace_Trabajos4();
    enlace_Trabajos5();


    /*Ver más Trabajos en GitHub*/
    ver_mas_trabajos_GitHub();


    /*Colaboraciones*/
    enlace_Colaboracion1()
    enlace_Colaboracion2()
    enlace_Colaboracion3()

}

/*Colaboraciones*/

function enlace_Colaboracion1(){
    $('#colaboracion-1').click(function(){
        window.open('https://es-es.facebook.com/pages/category/Automotive-Repair-Shop/Talleres-JOYMA-204081826313438/','_blank');
    });
}

function enlace_Colaboracion2(){
    $('#colaboracion-2').click(function(){
        window.open('https://halkysl.com','_blank');
    });
}

function enlace_Colaboracion3(){
    $('#colaboracion-3').click(function(){
        window.open('https://www.instagram.com/allyouneedisskateboarding/?hl=es','_blank');
    });
}


/*Trabajos*/

function enlace_Trabajos1(){
    $('#boton-Trabajo-1').click(function(){
        window.open('https://elclientenotienelarazon.com','_blank');
    });
}

function enlace_Trabajos2(){
    $('#boton-Trabajo-2').click(function(){
        window.open('https://rosasdecolores.com','_blank');
    });
}

function enlace_Trabajos3(){
    $('#boton-Trabajo-3').click(function(){
        window.open('https://halkysl.com','_blank');
    });
}

function enlace_Trabajos4(){
    $('#boton-Trabajo-2').click(function(){
        window.open('https://adrianllorian.github.io/scarpeo-web/','_blank');
    });
}

function enlace_Trabajos5(){
    $('#boton-Trabajo-3').click(function(){
        window.open('https://adrianllorian.github.io/gestion-asociacion/','_blank');
    });
}


/*Ver más trabajos en github  ver-mas-trabajos */
function ver_mas_trabajos_GitHub(){
    $('#ver-mas-trabajos').click(function(){
        window.open('https://github.com/adrianllorian','_blank');
    });
}