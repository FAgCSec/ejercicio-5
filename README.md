# Interactive Navigation Menu

Este proyecto consiste en un menú de navegación interactivo con tres enlaces que cambian de color cuando se pasa el ratón sobre ellos. El código está compuesto por un archivo HTML, un archivo CSS para estilos y un archivo JavaScript para la funcionalidad interactiva.

## Archivo HTML (index.html)

El archivo HTML define la estructura básica del documento web e incluye los enlaces de navegación dentro de una lista desordenada (`<ul>`) y un contenedor de navegación (`<nav>`). Cada enlace tiene un identificador único (`id`) que se utilizará en el archivo JavaScript para acceder a él. También se hace referencia a un archivo CSS externo para los estilos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Navigation Menu</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="https://www.youtube.com/" id="link1">https://www.youtube.com/</a></li>
            <li><a href="https://es.wikipedia.org/wiki/Wikipedia:Portada" id="link2">https://es.wikipedia.org/wiki/Wikipedia:Portada</a></li>
            <li><a href="https://twitter.com/jlevicoy/status/685624118436347905" id="link3">https://twitter.com/jlevicoy/status/685624118436347905</a></li>
        </ul>
    </nav>

    <script src="script.js"></script>
</body>
</html>
```

## Archivo CSS (styles.css)

El archivo CSS contiene estilos para el menú de navegación, como la eliminación de viñetas de la lista (`list-style: none;`), la disposición de los elementos en línea (`display: inline;`) y la transición del color del texto al pasar el ratón sobre los enlaces.

```css
nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: blue;
}
```

## Archivo JavaScript (script.js)

El archivo JavaScript agrega la funcionalidad interactiva al menú de navegación. Selecciona cada enlace por su identificador único y agrega eventos de ratón para cambiar el color del texto cuando se pasa el ratón sobre ellos.

```javascript
// Obtener referencias a los enlaces
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');

// Agregar eventos de ratón para cambiar el color al pasar sobre los enlaces
link1.addEventListener('mouseover', function() {
    link1.style.color = 'red';
});

link1.addEventListener('mouseout', function() {
    link1.style.color = 'black';
});

link2.addEventListener('mouseover', function() {
    link2.style.color = 'green';
});

link2.addEventListener('mouseout', function() {
    link2.style.color = 'black';
});

link3.addEventListener('mouseover', function() {
    link3.style.color = 'purple';
});

link3.addEventListener('mouseout', function() {
    link3.style.color = 'black';
});
```

## Cómo iniciar

1. Descarga todos los archivos: `index.html`, `styles.css` y `script.js`.
2. Abre el archivo `index.html` en tu navegador web.
3. Ahora podrás ver el menú de navegación interactivo. Pasa el ratón sobre cada enlace para ver cómo cambia el color del texto.

## Utilidad

Este proyecto puede ser útil para aquellos que desean implementar un menú de navegación interactivo en sus sitios web y aprender cómo se pueden manipular los estilos y el comportamiento de los elementos HTML utilizando JavaScript. Además, proporciona una introducción a eventos del DOM y manipulación de CSS mediante JavaScript.
