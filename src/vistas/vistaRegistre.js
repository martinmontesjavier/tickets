import { registroUsuarios } from "../bd/registroUsuarios"
import { vistaLogin } from "./vistaLogin"

export const vistaRegistre = {
    template: //html
    `
    <h1 class="mt-5 text-center">Registro</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input name="nombre" id="nombre" type="text" class="form-control" />
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" type="text" class="form-control" />
                        <label for="email" class="form-label">Email:</label>
                        <input name="email" id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input name="pass" id="pass" type="password" class="form-control" />
                        <label for="rol" class="form-label mt-3">Rol:</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="rol" id="usuario" value="usuario">
                            <label class="form-check-label" for="usuario">Usuario</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="rol" id="profesor" value="profesor">
                            <label class="form-check-label" for="profesor">Profesor</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="rol" id="administrador" value="administrador">
                            <label class="form-check-label" for="administrador">Administrador</label>
                        </div>
                        <a id="enviar" class="btn btn-primary w-100 mt-3" href="#">Enviar</a>
                    </form>
                </div>
    `,
    script:()=>{
        document.querySelector('#enviar').addEventListener('click',(event)=>{
            event.preventDefault
            const nombreValue = document.querySelector('#nombre').value
            const apellidosValue= document.querySelector('#apellidos').value
            const emailValue = document.querySelector('#email').value
            const passValue = document.querySelector('#pass').value
            const rolValue = document.querySelector('input[name="rol"]:checked')?.value;


            if (!nombreValue || !apellidosValue || !emailValue || !passValue || !rolValue) {
                alert('Por favor, completa todos los campos obligatorios.');
                return; 
            }

            const objeto = {
                nombre: nombreValue,
                email: emailValue,
                contrasenya: passValue,
                rol: rolValue
                
            } 

            if(registroUsuarios.length === 0){
                registroUsuarios.push(objeto)
                const texto = JSON.stringify(registroUsuarios)
                localStorage.setItem('BD', texto)
                document.querySelector('main').innerHTML=vistaLogin.template
                vistaLogin.script()
            }else{  
                registroUsuarios.forEach(element => {
                    if(element.email!=emailValue){
                        if(element.contrasenya!=passValue){
                            registroUsuarios.push(objeto)
                            const texto = JSON.stringify(registroUsuarios)
                            localStorage.setItem('BD', texto)
                            document.querySelector('main').innerHTML=vistaLogin.template
                            vistaLogin.script()
                        }else{
                            alert('La contraseña ya esta en uso')
                        }
                    }else{
                        alert('Ese correo esta ya en uso')
                    }
                });
            }

       
             // registroUsuarios.push(objeto)
                // const texto = JSON.stringify(registroUsuarios)
                // localStorage.setItem('BD', texto)
                // if(element.email==emailValue){
                //     alert('Ese correo esta ya en uso')
                // }
                // if(element.passValue==passValue){
                //     alert('La contraseña ya esta en uso')
                // }
        })

    }
}