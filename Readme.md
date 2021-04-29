Heroku url:
https://masterclickedmon.herokuapp.com/

Github url:
https://github.com/royalecode/Master-Click-DSL

Mostrar los clicks hechos por el usuario: En el cliente ya que los otros usuarios no necesitan saber este dato. Cada cliente lleva la cuenta de sus clicks.

Mostrar los clicks totales: Servidor para que puede sincronizar para todos los clientes los clicks totales simúltaniamente.

Mostrar la media de clicks por usuario y si el usuario está por encima y por debajo de la media: Se implementa en el cliente, pero usa información que va siendo actualitzada constantemente des del servidor como son los clicks totales i los usuarios conectados para poder calcular la media.

Mostrar la cantidad de usuarios conectados: Implementación en el servidor, seria el mismo objetivo que los clicks totales, hay que avisar a cada cliente en particular cuando alguien nuevo se ha conectado.

Añadir un botón o mecanismo para reiniciar el contador: El listener del boton obviamente en el cliente, pero la implementación esta en los dos sitios. Una parte en cliente porque hay que reiniciar el contador individual de clicks de usuario que está implementado en el cliente, y luego reiniciar el contador de los clicks totales que esto se debe hacer en el servidor que es quien lleva la cuenta.

Mover el botón del click por pantalla para darle más vidilla al juego: En el cliente directamente usando css con keyframes.

Deshabilitar el intro para que no se puedan hacer trampas: En el cliente con javascript y un listener para detectar cuando pulsen la tecla enter la aplicación no haga nada.