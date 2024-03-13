(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const f=[{id:"T002",autor:"Torrente",fecha:"2023-11-22",opinion:"¿Nos hacemos unas pajillas?"},{id:"T002",autor:"Batman",fecha:"2023-11-23",opinion:"Soy batman"},{id:"T002",autor:"Brad Pitt",fecha:"2023-11-25",opinion:"Gooooouuuuuurlami"}],b={template:`
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
    `,script:()=>{i(),document.querySelector(".volver").addEventListener("click",()=>{document.querySelector("main").innerHTML=l.template,l.script()});function i(){let a="";f.filter(e=>e.id==l.idTicket).forEach(e=>{a+=`
            <div class="card p-3 mt-2">
              <h5 class="text-end">Autor: <span>${e.autor}</span><span class="ms-4">${e.fecha}</span></h5>
              <p>${e.opinion}</p>
            </div>
            `}),document.querySelector(".contendorComentarios").innerHTML=a}document.querySelector(".nuevoComentario")&&document.querySelector(".nuevoComentario").addEventListener("click",a=>{a.preventDefault();let s=document.querySelector("#usuarioComentario").value,e=document.querySelector("#fechaComentario").value.slice(0,10),t=document.querySelector("#textoComentario").value,o={id:l.idTicket,autor:s,fecha:e,opinion:t};f.push(o),console.log(f),i()})}};let d=[{codigo:"T001",fecha:"2023-11-28",aula:"Aula 101",grupo:"Grupo A",ordenador:"PC001",descripcion:"Problema con la conexión a Internet",alumno:"Juan Pérez",estado:"Pendiente"},{codigo:"T002",fecha:"2023-11-29",aula:"Aula 102",grupo:"Grupo B",ordenador:"PC002",descripcion:"Problema con el software de la computadora",alumno:"María González",estado:"Resuelto"},{codigo:"T003",fecha:"2023-11-30",aula:"Aula 103",grupo:"Grupo C",ordenador:"PC003",descripcion:"No se puede imprimir desde la impresora",alumno:"Carlos Rodríguez",estado:"Resuelto"},{codigo:"T004",fecha:"2023-12-01",aula:"Aula 104",grupo:"Grupo D",ordenador:"PC004",descripcion:"Problema con el proyector",alumno:"Ana López",estado:"Pendiente"},{codigo:"T005",fecha:"2023-12-02",aula:"Aula 105",grupo:"Grupo E",ordenador:"PC005",descripcion:"No se puede acceder a ciertas páginas web",alumno:"Pedro Martínez",estado:"Resuelto"}];const l={template:`
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
    
    `,bdRepuesto:null,idTicket:null,rol:null,script:()=>{i();function i(){let a="",s="";l.rol=document.querySelector("#nombreUsuario").dataset.rol,console.log(l.rol),d.forEach(e=>{e.estado=="Pendiente"&&(a+=`
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
                  `),e.estado=="Resuelto"&&(s+=`
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
                  <td><button class="d-none btn btn-dark editarTicket ${e.codigo}" title="Editar Ticket">✏️<i class="bi  bi-pencil text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
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
              `)}),document.querySelector("#tablaPendiente").innerHTML=a,document.querySelector("#tablaResuelto").innerHTML=s,l.rol=="profesor"&&(document.querySelectorAll(".eliminarTicket").forEach(r=>{r.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(r=>{r.classList.add("d-none")}),document.querySelectorAll(".editarTicket").forEach(r=>{r.classList.add("d-none")})),l.rol=="usuario"&&(document.querySelector(".divResueltos").classList.add("d-none"),document.querySelectorAll(".eliminarTicket").forEach(r=>{r.classList.add("d-none")}),document.querySelectorAll(".resolver").forEach(r=>{r.classList.add("d-none")}),document.querySelectorAll(".editarTicket").forEach(r=>{r.classList.add("d-none")}))}document.querySelector("body").addEventListener("click",a=>{if(a.target.classList.contains("resolver")&&(l.idTicket=a.target.classList[a.target.classList.length-1],d.forEach(s=>{s.codigo==a.target.classList[a.target.classList.length-1]&&s.estado=="Pendiente"&&(s.estado="Resuelto")}),i()),document.querySelectorAll(".eliminarTicket").forEach(s=>{s.addEventListener("click",e=>{const t=e.target.classList[e.target.classList.length-1],o=d.findIndex(r=>r.codigo===t);o!==-1&&(d.splice(o,1),l.script())})}),a.target.classList.contains("verComentario")&&(l.idTicket=a.target.classList[a.target.classList.length-1],document.querySelector("main").innerHTML=b.template2,b.script()),a.target.classList.contains("anyadirComentario")&&(l.idTicket=a.target.classList[a.target.classList.length-1],document.querySelector("main").innerHTML=b.template,b.script()),a.target.classList.contains("anyadirTicket")&&document.querySelector("#ticketForm").classList.replace("d-none","d-block"),a.target.classList.contains("editarTicket")){let s=a.target.classList[a.target.classList.length-1],e=document.querySelector("#exampleModal");e.classList.add("show"),e.style.display="block",document.querySelector("#btnEditarTicket").addEventListener("click",()=>{event.preventDefault(),d.forEach(t=>{t.codigo==s&&(t.codigo=document.querySelector("#codigoEditar").value,t.fecha=document.querySelector("#fechaEditar").value.slice(0,10),t.aula=document.querySelector("#aulaEditar").value,t.grupo=document.querySelector("#grupoEditar").value,t.ordenador=document.querySelector("#ordenadorEditar").value,t.descripcion=document.querySelector("#descripcionEditar").value,t.alumno=document.querySelector("#alumnoEditar").value)}),e.classList.add("show"),e.style.display="none",i()})}if(a.target.classList.contains("btn-close")){let s=document.querySelector("#exampleModal");s.classList.add("show"),s.style.display="none"}}),document.querySelector("#guardarTicketNuevo").addEventListener("click",a=>{a.preventDefault();let s=document.querySelector("#codigoTicketNuevo").value,e=document.querySelector("#fechaTicketNuevo").value.slice(0,10),t=document.querySelector("#aulaTicketNuevo").value,o=document.querySelector("#grupoTicketNuevo").value,r=document.querySelector("#ordenadorTicketNuevo").value,p=document.querySelector("#descripcionTicketNuevo").value,c=document.querySelector("#alumnoTicketNuevo").value;const v={codigo:s,fecha:e,aula:t,grupo:o,ordenador:r,descripcion:p,alumno:c,estado:"Pendiente"};d.push(v),i(),document.querySelector("#ticketForm").classList.replace("d-block","d-none")})}},u=[],m={template:`
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
    `,script:()=>{document.querySelector("#enviar").addEventListener("click",i=>{var p;i.preventDefault;const a=document.querySelector("#nombre").value,s=document.querySelector("#apellidos").value,e=document.querySelector("#email").value,t=document.querySelector("#pass").value,o=(p=document.querySelector('input[name="rol"]:checked'))==null?void 0:p.value;if(!a||!s||!e||!t||!o){alert("Por favor, completa todos los campos obligatorios.");return}const r={nombre:a,email:e,contrasenya:t,rol:o};if(u.length===0){u.push(r);const c=JSON.stringify(u);localStorage.setItem("BD",c),document.querySelector("main").innerHTML=n.template,n.script()}else u.forEach(c=>{if(c.email!=e)if(c.contrasenya!=t){u.push(r);const v=JSON.stringify(u);localStorage.setItem("BD",v),document.querySelector("main").innerHTML=n.template,n.script()}else alert("La contraseña ya esta en uso");else alert("Ese correo esta ya en uso")})})}},n={template:`
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
    `,script:()=>{document.querySelector("#iniciarSesion").addEventListener("click",i=>{i.preventDefault;const a=localStorage.getItem("BD"),s=JSON.parse(a);console.log(s);const e=document.querySelector("#email").value,t=document.querySelector("#pass").value;s.forEach(o=>{e==o.email?t==o.contrasenya?(alert("Has iniciado sesion correctamente"),document.querySelector("#nombreUsuario").innerHTML=e,document.querySelector("#nombreUsuario").dataset.rol=o.rol,document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block"),document.querySelector("#panel").classList.remove("d-none"),document.querySelector("main").innerHTML=l.template,l.script()):alert("La contraseña no es correcta"):alert("Este correo no esta registrado")})}),document.querySelector("#cerrarSesion").addEventListener("click",i=>{i.preventDefault,document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none"),document.querySelector("main").innerHTML=n.template,n.script()}),document.querySelector("#registrox").addEventListener("click",i=>{i.preventDefault,document.querySelector("main").innerHTML=m.template,m.script()})}},h={template:`
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
    `,script:()=>{document.querySelector("#nombreUsuario").innerHTML==""&&document.querySelector("#panel").classList.add("d-none"),document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=l.template,l.script()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=n.template,n.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()})}};document.querySelector("header").innerHTML=h.template;h.script();document.querySelector("main").innerHTML=m.template;m.script();
