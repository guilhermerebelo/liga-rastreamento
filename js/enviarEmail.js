	$("#sucesso-envio, #erro-envio").hide(); // fechar as informações de envio ou erro
    
    // evitando que os dados sejam submetidos pelo modo tradicional
    jQuery(document).ready(function(){
    jQuery("#dadosFormulario").submit(function(){
    return false;
    });
            
    // carregando a função para o envio
    jQuery("#fBotao").click(function(){
    envia_form();
    });
     
    // limpando a div antes de um novo envio
    function envia_form() {
        //jQuery("#retorno").empty();
                
        // pegando os campos do formulário
        var fnome = jQuery("#fnome").val();
        var ftelefone = jQuery("#ftelefone").val();
         
        // tipo dos dados, url do documento, tipo de dados, campos enviados     
        // para GET mude o type para GET  
        jQuery.ajax({
        type: "POST",
        url: "../php/enviarEmail.php",
        dataType: "html",
        data: "&fnome=" + fnome + "&ftelefone=" + ftelefone,
         
        // enviado com sucesso
        success: function(response){

            $("#sucesso-envio").fadeIn();
            setTimeout(function(){
            	$("#sucesso-envio").fadeOut();
            },4000);
            $("#msg-trocar").text("Entraremos em contato em breve")

            $(".form-control").val("");

            },
        // quando houver erro
        error: function(){

            $("#erro-envio").fadeIn();
            setTimeout(function(){
            	$("#erro-envio").fadeOut();
            },4000);

        }
      });        
    }
    });
  