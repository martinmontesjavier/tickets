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
    <div class="divPendientes">
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
    </div>
    <div class="divResueltos">
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
    </div>
    <div class="modal" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Ticket</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" class="form card p-3 shadow" id="editarForm">
              <label for="codigoTicket" class="form-label">Código: </label>
              <input type="text" class="form-control mb-3" id="codigoEditar">

              <label for="fecha" class="form-label">Fecha: </label>
              <input type="date" class="form-control mb-3" id="fechaEditar">

              <label for="aula" class="form-label">Aula: </label>
              <input type="text" class="form-control mb-3" id="aulaEditar">

              <label for="ordenador" class="form-label">Ordenador: </label>
              <input type="text" class="form-control mb-3" id="ordenadorEditar">

              <label for="descripcion" class="form-label">Descripción: </label>
              <textarea class="form-control mb-3" id="descripcionEditar" rows="3"></textarea>

              <label for="alumno" class="form-label">Alumno: </label>
              <input type="text" class="form-control mb-3" id="alumnoEditar">

              <label for="grupo" class="form-label">Grupo: </label>
              <input type="text" class="form-control mb-3" id="grupoEditar">

              <div class="d-flex align-items-center">
                <button id="btnEditarTicket" class="btn btn-success ms-auto">EDITAR TICKET</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>-->
          </div>
        </div>
      </div>
    </div>
    
    `,
    bdRepuesto:null,
    idTicket:null,
    rol:null,
    script:()=>{
    pintarTablas()
    function pintarTablas(){
      let html= ``
      let html2=``
      vistaPanel.rol = document.querySelector('#nombreUsuario').dataset.rol
      console.log(vistaPanel.rol)
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
                      <td><button class="d-none btn btn-success resolver ${element.codigo}" title="Resolver ticket">Resolver</button></td>
                      <td><button class="btn btn-dark editarTicket ${element.codigo}" title="Editar Ticket">✏️<i class="bi  bi-pencil text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
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
                  <td><button class="d-none btn btn-dark editarTicket ${element.codigo}" title="Editar Ticket">✏️<i class="bi  bi-pencil text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                  </button></td>
                  <td><button class="btn btn-warning anyadirComentario ${element.codigo}" title="Añadir comentario">✏️<i class="bi  bi-pencil"></i>
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

      if(vistaPanel.rol == 'profesor'){
        let botones = document.querySelectorAll('.eliminarTicket')
        botones.forEach(boton => {
          boton.classList.add('d-none')
        });

        let botonesResolver = document.querySelectorAll('.resolver')
        botonesResolver.forEach(boton => {
          boton.classList.add('d-none')
        });

        let botonesEditar = document.querySelectorAll('.editarTicket')
        botonesEditar.forEach(boton => {
          boton.classList.add('d-none')
        });
      }

      if(vistaPanel.rol == 'usuario'){
        document.querySelector('.divResueltos').classList.add('d-none')
        let botonesEliminar = document.querySelectorAll('.eliminarTicket')
        botonesEliminar.forEach(boton => {
          boton.classList.add('d-none')
        });

        let botonesResolver = document.querySelectorAll('.resolver')
        botonesResolver.forEach(boton => {
          boton.classList.add('d-none')
        });
        
        let botonesEditar = document.querySelectorAll('.editarTicket')
        botonesEditar.forEach(boton => {
          boton.classList.add('d-none')
        });
      }
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
        // if(e.target.classList.contains('eliminarTicket')){
        //   vistaPanel.idTicket = e.target.classList[e.target.classList.length-1]
        //   tickets.forEach(element =>{
        //     if(element.codigo == e.target.classList[e.target.classList.length-1]){
        //       let codigoTicket = e.target.classList[e.target.classList.length - 1];

        //       // Crear una copia de la base de datos original
        //       vistaPanel.bdRepuesto = tickets.slice();
              
        //       // Filtrar los tickets excluyendo el que se quiere eliminar
        //       let nuevosTickets = tickets.filter((item) => item.codigo != codigoTicket);
        //       console.log(nuevosTickets)
        //       console.log(tickets)
        //       // Asignar los nuevos tickets a la base de datos
        //       // tickets = nuevosTickets;
        //       pintarTablas()
        //     }
            
        //   })
          
        // }

        document.querySelectorAll('.eliminarTicket').forEach((elemento) => {
          elemento.addEventListener('click', (e) => {
            // Obtener el código del ticket directamente desde el botón Eliminar
            const codigoTicket =  e.target.classList[e.target.classList.length-1]
        
            // Filtrar el array para eliminar el ticket con el código correspondiente
            const index = tickets.findIndex((ticket) => ticket.codigo === codigoTicket);
        
            if (index !== -1) {
              tickets.splice(index, 1);
              // Volver a ejecutar el script para actualizar las tablas
              vistaPanel.script();
            } else {
              
            }
          });
        });

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
          
          
          // document.querySelector('#ticketForm').classList.replace('d-block', 'd-none');
        }

        // MODAL
        if(e.target.classList.contains('editarTicket')){
          let id = e.target.classList[e.target.classList.length-1]
          let modal = document.querySelector('#exampleModal')
          modal.classList.add('show')
          modal.style.display='block'

          document.querySelector('#btnEditarTicket').addEventListener('click',()=>{
            event.preventDefault()
            tickets.forEach(ticket => {
              if(ticket.codigo == id){
                ticket.codigo = document.querySelector('#codigoEditar').value,
                ticket.fecha = document.querySelector('#fechaEditar').value.slice(0, 10),
                ticket.aula = document.querySelector('#aulaEditar').value,
                ticket.grupo = document.querySelector('#grupoEditar').value,
                ticket.ordenador = document.querySelector('#ordenadorEditar').value,
                ticket.descripcion = document.querySelector('#descripcionEditar').value,
                ticket.alumno = document.querySelector('#alumnoEditar').value
              }
            });
            modal.classList.add('show')
            modal.style.display='none'
            pintarTablas()
          })
          
        }

        if(e.target.classList.contains('btn-close')){
          let modal = document.querySelector('#exampleModal')
          modal.classList.add('show')
          modal.style.display='none'
        }
      
      })
      document.querySelector('#guardarTicketNuevo').addEventListener('click',(event)=>{
        event.preventDefault()
        let codigoNuevo = document.querySelector('#codigoTicketNuevo').value
        let fechaNuevo = document.querySelector('#fechaTicketNuevo').value.slice(0, 10)
        let aulaNuewvo = document.querySelector('#aulaTicketNuevo').value
        let grupoNuevo = document.querySelector('#grupoTicketNuevo').value
        let ordenadorNuevo = document.querySelector('#ordenadorTicketNuevo').value
        let descripcionNuevo = document.querySelector('#descripcionTicketNuevo').value
        let alumnoNuevo = document.querySelector('#alumnoTicketNuevo').value

        const ticketNuevo = {
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
    }
    
}