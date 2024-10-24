####  registro/auth de nuestro proyecto

-Entrar al formulario de registro donde ingresara sus datos:

-nombre
-email
-contrasena

-El front enviara este formulario (fetch) a nuestro servidor (/api/auth/register)

-El backend validara los datos y si todo esta bien enviara al email registrado un email de verificacion

-1. validar los datos que vienen del formulario
-1.1 validar que ese email ya exista
-2. crear un token de validacion firmado con una clave-secreta desde nuestro backend y se lo enviaremos al email del usuario (aun falta defirnir)
-3. encriptar/hashear la contraseña y se guardara en la DB (data-base)
-4. guardamos en la DB al usuario
-5. respondo al frontend