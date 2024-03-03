// import { tickets } from "../bd/ltickets";
import { vistaComentarios } from "./vistaComentarios";
import{ tickets } from "../bd/ltickets";

export const vistaPanel = {
    template: //html
    `
    <div class="d-flex">
    <h1>Administración de incidencias</h1> 
    <button class="m-2 p-2 bg-primary text-light anyadirTicket">Añadir Ticket</button>
    </div>
      <form id="ticketForm" class="w-50 p-2 d-none">
          <div class="mb-3">
            <label for="codigo" class="form-label">Código:</label>
            <input type="text" class="form-control" id="codigoTicketNuevo" name="codigo">
          </div>
          <div class="mb-3">
            <label for="fecha" class="form-label">Fecha:</label>
            <input type="date" class="form-control" id="fechaTicketNuevo" name="fecha">
          </div>
          <div class="mb-3">
            <label for="aula" class="form-label">Aula:</label>
            <input type="text" class="form-control" id="aulaTicketNuevo" name="aula">
          </div>
          <div class="mb-3">
            <label for="grupo" class="form-label">Grupo:</label>
            <input type="text" class="form-control" id="grupoTicketNuevo" name="grupo">
          </div>
          <div class="mb-3">
            <label for="ordenador" class="form-label">Ordenador:</label>
            <input type="text" class="form-control" id="ordenadorTicketNuevo" name="ordenador">
          </div>
          <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción:</label>
            <textarea class="form-control" id="descripcionTicketNuevo" name="descripcion" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="alumno" class="form-label">Alumno:</label>
            <input type="text" class="form-control" id="alumnoTicketNuevo" name="alumno">
          </div>
          <button type="submit" id="guardarTicketNuevo" class=" bg-primary text-light">Guardar</button>
        </form>
    
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      </tbody>
    </table>
    
    `,
    bdRepuesto:null,
    idTicket:null,
    script:()=>{
    pintarTablas()
    function pintarTablas(){
      let html= ``
      let html2=``
      tickets.forEach(element => {
        
        if(element.estado == 'Pendiente'){
                  html+= 
                  `
                  <tr>
                      <td>${element.codigo}</td>
                      <td>${element.fecha}</td>
                      <td>${element.aula}</td>
                      <td>${element.grupo}</td>
                      <td>${element.ordenador}</td>
                      <td>${element.descripcion}</td>
                      <td>${element.alumno}</td>
                      <td>${element.estado}</td>
                      <td><button class="btn btn-success resolver ${element.codigo}" title="Resolver ticket">Resolver</button></td>
                      <td><button class="btn btn-warning anyadirComentario ${element.codigo}" title="Añadir comentario">✏️<i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                      </button>
                      </td>
                      <td><button class="btn btn-info verComentario ${element.codigo}" title="Ver comentarios">📄<i class="bi bi-chat-left-text"></i>
                      </button></td>
                      <td><button class="btn btn-danger eliminarTicket ${element.codigo}" title="Eliminar ticket">🗑️<i class="bi bi-trash3"></i>
                      </i>
                      </button></td>
                      </tr>
                  `       
          }
          
          if(element.estado == 'Resuelto'){ 
              html2+= 
              `
              <tr>
                  <td>${element.codigo}</td>
                  <td>${element.fecha}</td>
                  <td>${element.aula}</td>
                  <td>${element.grupo}</td>
                  <td>${element.ordenador}</td>
                  <td>${element.descripcion}</td>
                  <td>${element.alumno}</td>
                  <td>${element.estado}</td>
                  <!--<td><button class="btn btn-success resolver ${element.codigo}" title="Resolver ticket">Resolver</button></td>-->
                  <td><button class="btn btn-warning anyadirComentario ${element.codigo}" title="Añadir comentario">✏️<i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                  </button>
                  </td>
                  <td><button class="btn btn-info verComentario ${element.codigo}" title="Ver comentarios">📄<i class="bi bi-chat-left-text"></i>
                  </button></td>
                  <td><button class="btn btn-danger eliminarTicket ${element.codigo}" title="Eliminar ticket">🗑️<i class="bi bi-trash3"></i>
                  </i>
                  </button></td>
              </tr>
              `
          }
      });
      document.querySelector('#tablaPendiente').innerHTML=html
      document.querySelector('#tablaResuelto').innerHTML=html2
    }
     

      document.querySelector('body').addEventListener('click',(e)=>{
        if(e.target.classList.contains('resolver')){
          vistaPanel.idTicket = e.target.classList[e.target.classList.length-1]
          tickets.forEach(element =>{
            if(element.codigo == e.target.classList[e.target.classList.length-1]){
              if(element.estado == 'Pendiente'){
                element.estado = 'Resuelto'
              }
            }
          })
          pintarTablas()
        }
        if(e.target.classList.contains('eliminarTicket')){
          vistaPanel.idTicket = e.target.classList[e.target.classList.length-1]
          tickets.forEach(element =>{
            if(element.codigo == e.target.classList[e.target.classList.length-1]){
              let codigoTicket = e.target.classList[e.target.classList.length - 1];

              // Crear una copia de la base de datos original
              vistaPanel.bdRepuesto = tickets.slice();
              
              // Filtrar los tickets excluyendo el que se quiere eliminar
              let nuevosTickets = tickets.filter((item) => item.codigo != codigoTicket);
              console.log(nuevosTickets)
              console.log(tickets)
              // Asignar los nuevos tickets a la base de datos
              // tickets = nuevosTickets;
              pintarTablas()
            }
            
          })
          
        }

        if(e.target.classList.contains('verComentario')){
          vistaPanel.idTicket = e.target.classList[e.target.classList.length-1]
          document.querySelector('main').innerHTML = vistaComentarios.template2
          vistaComentarios.script()
        }

        if(e.target.classList.contains('anyadirComentario')){
          vistaPanel.idTicket = e.target.classList[e.target.classList.length-1]
          document.querySelector('main').innerHTML = vistaComentarios.template
          vistaComentarios.script()
        }
        
        if(e.target.classList.contains('anyadirTicket')){
          document.querySelector('#ticketForm').classList.replace('d-none', 'd-block');
          document.querySelector('#guardarTicketNuevo').addEventListener('click',(event)=>{
            event.preventDefault()
            let codigoNuevo = document.querySelector('#codigoTicketNuevo').value
            let fechaNuevo = document.querySelector('#fechaTicketNuevo').value.slice(0, 10)
            let aulaNuewvo = document.querySelector('#aulaTicketNuevo').value
            let grupoNuevo = document.querySelector('#grupoTicketNuevo').value
            let ordenadorNuevo = document.querySelector('#ordenadorTicketNuevo').value
            let descripcionNuevo = document.querySelector('#descripcionTicketNuevo').value
            let alumnoNuevo = document.querySelector('#alumnoTicketNuevo').value

            let ticketNuevo = {
              codigo: codigoNuevo,
              fecha: fechaNuevo,
              aula: aulaNuewvo,
              grupo: grupoNuevo,
              ordenador: ordenadorNuevo,
              descripcion: descripcionNuevo,
              alumno: alumnoNuevo,
              estado: 'Pendiente'
            }

            tickets.push(ticketNuevo)
            pintarTablas()
            document.querySelector('#ticketForm').classList.replace('d-block', 'd-none');
            
          })
          
          // document.querySelector('#ticketForm').classList.replace('d-block', 'd-none');
        }
        

      })
    }
}