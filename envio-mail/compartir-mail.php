
<?php
// Guardar los datos recibidos en variables:
// $nombreape = $_POST['nombreape'];
$foto = $_POST['foto'];
$nombre = $_POST['nombre'];
$emaildes = $_POST['emaildes'];
$emailrem = $_POST['emailrem'];

// Definir el correo de destino:
$dest = $emaildes;
 
// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
$headers = "From: $nombre <$emailrem>\r\n";  
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
 
// Aqui definimos el asunto y armamos el cuerpo del mensaje
$asunto = "¿Aún no te has Mortadelizado? Yo sí. ¡Mírame y flipa!";

$cuerpo .= '<!DOCTYPE html>
		
  	<body>
 <table width="100%" border="0" cellspacing="0" cellpadding="0">
 	<tr>
 		<td>
 			<table cellspacing="0" cellpadding="0" border="0" width="600" align="center">
 				<tr>
 					<td colspan="3" height="23"></td>
 				</tr>		
 				<tr>	
 					<td colspan="3" height="23"></td>
 				</tr>
 				<tr>
 					<td colspan="3"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v3_r1_c1_r1_c1.jpg" width="600" height="176"></td>
 				</tr>
 				<tr>
 					<td width="146"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v3_r1_c1_r2_c1.jpg" width="146" height="356"></td>
 					<td width="300" valign="top" bgcolor="#ffffff"><img style="display: block;" src="'.$foto.'" width="300" height="356"></td>
 					<td width="154" bgcolor="#ffffff"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v3_r1_c1_r2_c3.jpg" width="154" height="356"></td>
 				</tr> 				
 				<tr>
 					<td colspan="3" valign="top"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v3_r1_c1_r3_c1.jpg" width="600" height="225">
		      </tr>														
				<tr>
					<td colspan="3">
					  <table width="600px" bgcolor="#000000"  border="0" cellspacing="0" cellpadding="0">
					    <tr>
					      <td width="427" valign="middle"><p style="color: #787878; font-family:Helvetica, Arial, sans-serif; font-size:9px; margin:15px 0 0 20px;">&copy; 2014 WARNER BROS. ENT. INC. TODOS LOS DERECHOS RESERVADOS.<br>
				          PENDIENTE DE CALIFICACIÓN POR EDADES.</p></td>
					      <td width="70" valign="middle"><p style="color: #787878; font-family:Helvetica, Arial, sans-serif; font-size:9px; margin-top:15px;">SIGUENOS EN:</p></td>
                          <td width="32"><a href="https://www.facebook.com/MyF3D" target="_blank"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v2_r2_c2_r1_c1_r4_c6.jpg" width="32" height="48" alt="Facebook"></a></td>
					      <td width="33"><a href="https://twitter.com/WarnerBrosSpain" target="_blank"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v2_r2_c2_r1_c1_r4_c7.jpg" width="33" height="48" alt="Twitter"></a></td>
					      <td width="38"><a href="https://www.youtube.com/user/warnerbrosespana" target="_blank"><img style="display: block;" src="http://proyectos.yslandia.com/r/warner/mortadeloyfilemon3D/mortadelizatev1/images/app_emailing_mortadelizate_v2_r2_c2_r1_c1_r4_c8.jpg" width="38" height="48" alt="Youtube"></a></td>
				        </tr>
				      </table>
					</td>
				</tr>	
 			</table>
 		</td>
 	</tr>
 </table>

 	</body>
 </html>';

 
// Esta es una pequena validación, que solo envie el correo si todas las variables tiene algo de contenido:
if($foto != '' && $emaildes != ''){
    mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
}
?>