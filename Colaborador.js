document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar el formulario
  const formulario = document.getElementById('formularioEvaluacion');

  // Agregar evento de envío del formulario
  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Aquí puedes agregar el código para enviar los datos del formulario (por ejemplo, mediante fetch() o XMLHttpRequest)
    // También puedes realizar validaciones del formulario antes de enviar los datos

    // Ejemplo de cómo mostrar los datos en la consola del navegador
    console.log('Datos del formulario:');
    console.log('Nombre del Colaborador:', formulario.nombre.value);
    // Agrega más líneas para mostrar otros campos del formulario
  });
});
