(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const f=[{id:"T002",autor:"Torrente",fecha:"2023-11-22",opinion:"¿Nos hacemos unas pajillas?"},{id:"T002",autor:"Batman",fecha:"2023-11-23",opinion:"Soy batman"},{id:"T002",autor:"Brad Pitt",fecha:"2023-11-25",opinion:"Gooooouuuuuurlami"}],b={template:`
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto volver"> Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span>123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow">
        <label for="usuario" class="form-label">Nombre: </label>
        <input id="usuarioComentario" type="text" class="form-control w-25">
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea id="textoComentario" class="form-control" col="3"></textarea>
        <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
        <div class="d-flex align-items-center">
          <input id="fechaComentario" type="datetime-local" class="form-control w-25">
          <button class="btn btn-success ms-auto nuevoComentario">Añadir comentario</button>
        </div>
      </form>

      <div class="contendorComentarios">
      <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        
        
      </div>
    </div>
    </div>
    `,template2:`
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto volver"> Volver</button>
    </div>
      <div class="contendorComentarios">
      <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        <div class="card p-3 mt-2">
          <h5 class="text-end">Autor: <span>Javier Caraculo</span><span class="ms-4">12/10/2022</span></h5>
        <p>Este es un comentario Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet dignissimos laudantium blanditiis fuga recusandae sed culpa, earum pariatur repellat esse provident eaque totam quo sint iste, inventore deleniti quis.</p>
        </div>
        
        
      </div>
    </div>
    </div>
    `,script:()=>{l(),document.querySelector(".volver").addEventListener("click",()=>{document.querySelector("main").innerHTML=r.template,r.script()});function l(){let t="";f.filter(e=>e.id==r.idTicket).forEach(e=>{t+=`
            <div class="card p-3 mt-2">
              <h5 class="text-end">Autor: <span>${e.autor}</span><span class="ms-4">${e.fecha}</span></h5>
              <p>${e.opinion}</p>
            </div>
            `}),document.querySelector(".contendorComentarios").innerHTML=t}document.querySelector(".nuevoComentario")&&document.querySelector(".nuevoComentario").addEventListener("click",t=>{t.preventDefault();let o=document.querySelector("#usuarioComentario").value,e=document.querySelector("#fechaComentario").value.slice(0,10),a=document.querySelector("#textoComentario").value,s={id:r.idTicket,autor:o,fecha:e,opinion:a};f.push(s),console.log(f),l()})}};let d=[{codigo:"T001",fecha:"2023-11-28",aula:"Aula 101",grupo:"Grupo A",ordenador:"PC001",descripcion:"Problema con la conexión a Internet",alumno:"Juan Pérez",estado:"Pendiente"},{codigo:"T002",fecha:"2023-11-29",aula:"Aula 102",grupo:"Grupo B",ordenador:"PC002",descripcion:"Problema con el software de la computadora",alumno:"María González",estado:"Resuelto"},{codigo:"T003",fecha:"2023-11-30",aula:"Aula 103",grupo:"Grupo C",ordenador:"PC003",descripcion:"No se puede imprimir desde la impresora",alumno:"Carlos Rodríguez",estado:"Resuelto"},{codigo:"T004",fecha:"2023-12-01",aula:"Aula 104",grupo:"Grupo D",ordenador:"PC004",descripcion:"Problema con el proyector",alumno:"Ana López",estado:"Pendiente"},{codigo:"T005",fecha:"2023-12-02",aula:"Aula 105",grupo:"Grupo E",ordenador:"PC005",descripcion:"No se puede acceder a ciertas páginas web",alumno:"Pedro Martínez",estado:"Resuelto"}];const r={template:`
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
    
    `,bdRepuesto:null,idTicket:null,rol:null,script:()=>{l();function l(){let t="",o="";r.rol=document.querySelector("#nombreUsuario").dataset.rol,console.log(r.rol),d.forEach(e=>{e.estado=="Pendiente"&&(t+=`
                  <tr>
                      <td>${e.codigo}</td>
                      <td>${e.fecha}</td>
                      <td>${e.aula}</td>
                      <td>${e.grupo}</td>
                      <td>${e.ordenador}</td>
                      <td>${e.descripcion}</td>
                      <td>${e.alumno}</td>
                      <td>${e.estado}</td>
                      <td><button class="d-none btn btn-success resolver ${e.codigo}" title="Resolver ticket">Resolver</button></td>
                      <td><button class="btn btn-dark editarTicket ${e.codigo}" title="Editar Ticket">✏️<i class="bi  bi-pencil text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
                      <td><button class="btn btn-warning anyadirComentario ${e.codigo}" title="Añadir comentario">✏️<i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                      </button>
                      </td>
                      <td><button class="btn btn-info verComentario ${e.codigo}" title="Ver comentarios">📄<i class="bi bi-chat-left-text"></i>
                      </button></td>
                      <td><button class="btn btn-danger eliminarTicket ${e.codigo}" title="Eliminar ticket">🗑️<i class="bi bi-trash3"></i>
                      </i>
                      </button></td>
                      </tr>
                  `),e.estado=="Resuelto"&&(o+=`
              <tr>
                  <td>${e.codigo}</td>
                  <td>${e.fecha}</td>
                  <td>${e.aula}</td>
                  <td>${e.grupo}</td>
                  <td>${e.ordenador}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.alumno}</td>
                  <td>${e.estado}</td>
                  <!--<td><button class="btn btn-success resolver ${e.codigo}" title="Resolver ticket">Resolver</button></td>-->
                  <td><button class="btn btn-dark editarTicket ${e.codigo}" title="Editar Ticket">✏️<i class="bi  bi-pencil text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                  </button></td>
                  <td><button class="btn btn-warning anyadirComentario ${e.codigo}" title="Añadir comentario">✏️<i class="bi  bi-pencil"></i>
                  </button>
                  </td>
                  <td><button class="btn btn-info verComentario ${e.codigo}" title="Ver comentarios">📄<i class="bi bi-chat-left-text"></i>
                  </button></td>
                  <td><button class="btn btn-danger eliminarTicket ${e.codigo}" title="Eliminar ticket">🗑️<i class="bi bi-trash3"></i>
                  </i>
                  </button></td>
              </tr>
              `)}),document.querySelector("#tablaPendiente").innerHTML=t,document.querySelector("#tablaResuelto").innerHTML=o,r.rol=="profesor"&&(document.querySelectorAll(".eliminarTicket").forEach(i=>{i.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(i=>{i.classList.add("d-none")}),document.querySelectorAll(".editarTicket").forEach(i=>{i.classList.add("d-none")})),r.rol=="usuario"&&(document.querySelector(".divResueltos").classList.add("d-none"),document.querySelectorAll(".eliminarTicket").forEach(i=>{i.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(i=>{i.classList.add("d-none")}),document.querySelectorAll(".editarTicket").forEach(i=>{i.classList.add("d-none")}))}document.querySelector("body").addEventListener("click",t=>{if(t.target.classList.contains("resolver")&&(r.idTicket=t.target.classList[t.target.classList.length-1],d.forEach(o=>{o.codigo==t.target.classList[t.target.classList.length-1]&&o.estado=="Pendiente"&&(o.estado="Resuelto")}),l()),document.querySelectorAll(".eliminarTicket").forEach(o=>{o.addEventListener("click",e=>{const a=e.target.classList[e.target.classList.length-1],s=d.findIndex(i=>i.codigo===a);s!==-1&&(d.splice(s,1),r.script())})}),t.target.classList.contains("verComentario")&&(r.idTicket=t.target.classList[t.target.classList.length-1],document.querySelector("main").innerHTML=b.template2,b.script()),t.target.classList.contains("anyadirComentario")&&(r.idTicket=t.target.classList[t.target.classList.length-1],document.querySelector("main").innerHTML=b.template,b.script()),t.target.classList.contains("anyadirTicket")&&document.querySelector("#ticketForm").classList.replace("d-none","d-block"),t.target.classList.contains("editarTicket")){r.idTicket=t.target.classList[t.target.classList.length-1];let o=document.querySelector("#exampleModal");o.classList.add("show"),o.style.display="block",document.querySelector("#btnEditarTicket").addEventListener("click",()=>{event.preventDefault(),d.forEach(e=>{e.codigo==r.idTicket&&(e.codigo=document.querySelector("#codigoEditar").value,e.fecha=document.querySelector("#fechaEditar").value.slice(0,10),e.aula=document.querySelector("#aulaEditar").value,e.grupo=document.querySelector("#grupoEditar").value,e.ordenador=document.querySelector("#ordenadorEditar").value,e.descripcion=document.querySelector("#descripcionEditar").value,e.alumno=document.querySelector("#alumnoEditar").value)}),o.classList.add("show"),o.style.display="none",l()})}if(t.target.classList.contains("btn-close")){let o=document.querySelector("#exampleModal");o.classList.add("show"),o.style.display="none"}}),document.querySelector("#guardarTicketNuevo").addEventListener("click",t=>{t.preventDefault();let o=document.querySelector("#codigoTicketNuevo").value,e=document.querySelector("#fechaTicketNuevo").value.slice(0,10),a=document.querySelector("#aulaTicketNuevo").value,s=document.querySelector("#grupoTicketNuevo").value,i=document.querySelector("#ordenadorTicketNuevo").value,p=document.querySelector("#descripcionTicketNuevo").value,c=document.querySelector("#alumnoTicketNuevo").value;const v={codigo:o,fecha:e,aula:a,grupo:s,ordenador:i,descripcion:p,alumno:c,estado:"Pendiente"};d.push(v),l(),document.querySelector("#ticketForm").classList.replace("d-block","d-none")})}},u=[],m={template:`
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
    `,script:()=>{document.querySelector("#enviar").addEventListener("click",l=>{var p;l.preventDefault;const t=document.querySelector("#nombre").value,o=document.querySelector("#apellidos").value,e=document.querySelector("#email").value,a=document.querySelector("#pass").value,s=(p=document.querySelector('input[name="rol"]:checked'))==null?void 0:p.value;if(!t||!o||!e||!a||!s){alert("Por favor, completa todos los campos obligatorios.");return}const i={nombre:t,email:e,contrasenya:a,rol:s};if(u.length===0){u.push(i);const c=JSON.stringify(u);localStorage.setItem("BD",c),document.querySelector("main").innerHTML=n.template,n.script()}else u.forEach(c=>{if(c.email!=e)if(c.contrasenya!=a){u.push(i);const v=JSON.stringify(u);localStorage.setItem("BD",v),document.querySelector("main").innerHTML=n.template,n.script()}else alert("La contraseña ya esta en uso");else alert("Ese correo esta ya en uso")})})}},n={template:`
    <h1 class="mt-5 text-center">Inicia sesión</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="email" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input id="pass" type="password" class="form-control" />
            <div class="form-check mt-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                    Recordar sesión
                </label>
            </div>
            <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
            <a id="iniciarSesion" class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
        </form>
        <a id="registrox" class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
        >
    </div>
    `,script:()=>{document.querySelector("#iniciarSesion").addEventListener("click",l=>{l.preventDefault;const t=localStorage.getItem("BD"),o=JSON.parse(t);console.log(o);const e=document.querySelector("#email").value,a=document.querySelector("#pass").value;o.forEach(s=>{e==s.email?a==s.contrasenya?(alert("Has iniciado sesion correctamente"),document.querySelector("#nombreUsuario").innerHTML=e,document.querySelector("#nombreUsuario").dataset.rol=s.rol,document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block"),document.querySelector("#panel").classList.remove("d-none"),document.querySelector("main").innerHTML=r.template,r.script()):alert("La contraseña no es correcta"):alert("Este correo no esta registrado")})}),document.querySelector("#cerrarSesion").addEventListener("click",l=>{l.preventDefault,document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none"),document.querySelector("main").innerHTML=n.template,n.script()}),document.querySelector("#registrox").addEventListener("click",l=>{l.preventDefault,document.querySelector("main").innerHTML=m.template,m.script()})}},h={template:`
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
            <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
            <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
            <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
        </div>
        <div>
            <span id="nombreUsuario" class="d-none"></span>
            <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
        </div>
        </div>
    </nav>
    `,script:()=>{document.querySelector("#nombreUsuario").innerHTML==""&&document.querySelector("#panel").classList.add("d-none"),document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=r.template,r.script()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=n.template,n.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()})}};document.querySelector("header").innerHTML=h.template;h.script();document.querySelector("main").innerHTML=m.template;m.script();
