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
        var fmensagem = jQuery("#fmensagem").val();
         
        // tipo dos dados, url do documento, tipo de dados, campos enviados     
        // para GET mude o type para GET  
        jQuery.ajax({
        type: "POST",
        url: "../php/enviarEmail.php",
        dataType: "html",
        data: "&fnome=" + fnome + "&ftelefone=" + ftelefone + "&fmensagem=" + fmensagem,
         
        // enviado com sucesso
        success: function(response){

            swal("Mensagem Enviada!", "Em breve entraremos em contato", "success");
            $('#myModal').modal('toggle');            

        },
        // quando houver erro
        error: function(){

            swal("Erro ao enviar a mensagem!", "", "error");     

        }
      });        
    }
    });
  