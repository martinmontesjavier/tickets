import { baseComentarios } from "../bd/bdComentarios";
import { crearComentario } from "./comentario";

export const comentarios = {
    template: 
    `
    <div id="contenedorComentarios" class="mt-5"></div> 
    `,
    script:()=>{
        let html = ''
        baseComentarios.forEach(element => {
            html+= crearComentario(element.autor,element.fecha,element.opinion)
        });
        document.querySelector('#contenedorComentarios').innerHTML = html
    }
}