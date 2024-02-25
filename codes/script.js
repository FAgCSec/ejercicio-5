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
