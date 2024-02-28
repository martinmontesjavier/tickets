(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const b=[{codigo:"T001",fecha:"2023-11-28",aula:"Aula 101",grupo:"Grupo A",ordenador:"PC001",descripcion:"Problema con la conexión a Internet",alumno:"Juan Pérez",estado:"Pendiente"},{codigo:"T002",fecha:"2023-11-29",aula:"Aula 102",grupo:"Grupo B",ordenador:"PC002",descripcion:"Problema con el software de la computadora",alumno:"María González",estado:"Resuelto"},{codigo:"T003",fecha:"2023-11-30",aula:"Aula 103",grupo:"Grupo C",ordenador:"PC003",descripcion:"No se puede imprimir desde la impresora",alumno:"Carlos Rodríguez",estado:"Resuelto"},{codigo:"T004",fecha:"2023-12-01",aula:"Aula 104",grupo:"Grupo D",ordenador:"PC004",descripcion:"Problema con el proyector",alumno:"Ana López",estado:"Pendiente"},{codigo:"T005",fecha:"2023-12-02",aula:"Aula 105",grupo:"Grupo E",ordenador:"PC005",descripcion:"No se puede acceder a ciertas páginas web",alumno:"Pedro Martínez",estado:"Resuelto"}],d={template:`
    <h1>Administración de incidencias</h1>
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
    
    `,script:()=>{let a="",r="";b.forEach(e=>{e.estado=="Pendiente"&&(a+=`
                  <tr>
                      <td>${e.codigo}</td>
                      <td>${e.fecha}</td>
                      <td>${e.aula}</td>
                      <td>${e.grupo}</td>
                      <td>${e.ordenador}</td>
                      <td>${e.descripcion}</td>
                      <td>${e.alumno}</td>
                      <td>${e.estado}</td>
                      <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
                      <td><button class="btn btn-warning" title="Añadir comentario">✏️<i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                      </button>
                      </td>
                      <td><button class="btn btn-info" title="Ver comentarios">✅<i class="bi bi-chat-left-text"></i>
                      </button></td>
                      <td><button class="btn btn-danger" title="Eliminar ticket">🗑️<i class="bi bi-trash3"></i>
                      </i>
                      </button></td>
                  </tr>
                  `),e.estado=="Resuelto"&&(r+=`
              <tr>
                  <td>${e.codigo}</td>
                  <td>${e.fecha}</td>
                  <td>${e.aula}</td>
                  <td>${e.grupo}</td>
                  <td>${e.ordenador}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.alumno}</td>
                  <td>${e.estado}</td>
                  <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
                  <td><button class="btn btn-warning" title="Añadir comentario">✏️<i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                  </button>
                  </td>
                  <td><button class="btn btn-info" title="Ver comentarios">✅<i class="bi bi-chat-left-text"></i>
                  </button></td>
                  <td><button class="btn btn-danger" title="Eliminar ticket">🗑️<i class="bi bi-trash3"></i>
                  </i>
                  </button></td>
              </tr>
              `)}),document.querySelector("#tablaPendiente").innerHTML=a,document.querySelector("#tablaResuelto").innerHTML=r}},i=[],l={template:`
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
                        <a id="enviar" class="btn btn-primary w-100 mt-3" href="#">Enviar</a>
                    </form>
                </div>
    `,script:()=>{document.querySelector("#enviar").addEventListener("click",a=>{a.preventDefault;const r=document.querySelector("#nombre").value,e=document.querySelector("#apellidos").value,s=document.querySelector("#email").value,t=document.querySelector("#pass").value;if(!r||!e||!s||!t){alert("Por favor, completa todos los campos obligatorios.");return}const o={nombre:r,email:s,contrasenya:t};if(i.length===0){i.push(o);const n=JSON.stringify(i);localStorage.setItem("BD",n),document.querySelector("main").innerHTML=c.template,c.script()}else i.forEach(n=>{if(n.email!=s)if(n.contrasenya!=t){i.push(o);const m=JSON.stringify(i);localStorage.setItem("BD",m),document.querySelector("main").innerHTML=c.template,c.script()}else alert("La contraseña ya esta en uso");else alert("Ese correo esta ya en uso")})})}},c={template:`
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
    `,script:()=>{document.querySelector("#iniciarSesion").addEventListener("click",a=>{a.preventDefault;const r=localStorage.getItem("BD"),e=JSON.parse(r);console.log(e);const s=document.querySelector("#email").value,t=document.querySelector("#pass").value;e.forEach(o=>{s==o.email?t==o.contrasenya?(alert("Has iniciado sesion correctamente"),document.querySelector("#nombreUsuario").innerHTML=s,document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block"),document.querySelector("main").innerHTML=d.template,d.script()):alert("La contraseña no es correcta"):alert("Este correo no esta registrado")})}),document.querySelector("#cerrarSesion").addEventListener("click",a=>{a.preventDefault,document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none"),document.querySelector("main").innerHTML=c.template,c.script()}),document.querySelector("#registrox").addEventListener("click",a=>{a.preventDefault,document.querySelector("main").innerHTML=l.template,l.script()})}},u={template:`
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
    `,script:()=>{document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=d.template,d.script()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=c.template,c.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=l.template,l.script()})}};document.querySelector("header").innerHTML=u.template;u.script();document.querySelector("main").innerHTML=l.template;l.script();
