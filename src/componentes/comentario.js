export const crearComentario = (autor, fecha, opinion) => {
    const template = `
      <div class="card p-3 mt-2" >
        <h5 id="autor" class="text-end">${autor}</h5>
        <p id="fecha">${fecha}</p>
        <p id="opinion">${opinion}</p>
      </div>
    `;
    return template;
  };