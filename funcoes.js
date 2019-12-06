$(document).ready(function(){

    $("#gravar").click(function(){
        
        var sobrenome = $("#sobrenome").val();
        var matricula = $("#matricula").val();
        var usuario = $("#usuario").val();
        var senha = $("#senha").val();
        var cSenha = $("#cSenha").val();

            if($("#nome").val()=='') {  
                $("#nome").css('border', 'solid 2px #FA5858');
            } 
            else {
                var imprimir += toString.($("#nome").val()); 
            }

            if($("#sobrenome").val()=='') {  
                $("#sobrenome").css('border', 'solid 2px #FA5858');
            } 
            else {
                var imprimir += toString.($("#sobrenome").val()); 
            }

            if($("#matricula").val()=='') {  
                $("#matricula").css('border', 'solid 2px #FA5858');
            } 
            else {
                var imprimir += toString.($("#matricula").val());
            }

            if($("#usuario").val()=='') {  
                $("#usuario").css('border', 'solid 2px #FA5858');
            } 
            else {
                var imprimir += toString.($("#usuario").val());
            }

            if($("#senha").val()=='') {  
                $("#senha").css('border', 'solid 2px #FA5858');
            }
            else {
                var imprimir += toString.($("#senha").val());
            }

            if($("#cSenha").val()=='') {  
                $("#cSenha").css('border', 'solid 2px #FA5858');
            } 
            else {
                var imprimir += toString.($("#cSenha").val());
            }

            alert(imprimir);


            $.ajax({
        type:"POST",
        url:"php.php",
        dataType:"json",

        success:function(retorno){
          for (var i = 0; i < retorno.length; i++) {
                echo (retorno[i].nome);
                echo (retorno[i].sobrenome);
                echo (retorno[i].matricula);
                echo (retorno[i].usuario);
                echo (retorno[i].senha);
            }  

        }
       });  
    });
});