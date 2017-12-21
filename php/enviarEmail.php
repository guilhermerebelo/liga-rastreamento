8<?php

$para = "contato@ligarastreamento.com.br";
$fnome = $_POST['fnome'];
$ftelefone = $_POST['ftelefone'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

$corpo = "
Nome: $fnome
Telefone: $ftelefone
Dia: $data_envio
Hora: $hora_envio

Dados enviados pelo site Liga Rastremento.

";

/*codigo que nao funcina
//$header .= "Content-type: text/html; charset = utf-8\n";  avaliar
//$header = "From: $para Reply-to: $para\n";
codigo que não funciona*/


/*codigo que funcina*/
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset= utf-8".$charset."\r\n";
$headers .= "Reply-To: ".$para."\r\n";
//$headers .= "Cc: guilhermerebelo@live.com\r\n"; //CAMPO COPIA OPCIONAL
//$headers .= "Bcc: copiaoculta@seudominio\r\n"; //CAMPO COPIA OCULTA OPCIONAL
$headers .= "From: \"Formulário enviado pelo site\" \r\n";
/*codigo que funcina*/

@mail($para,$assunto,$corpo,$header);
?>