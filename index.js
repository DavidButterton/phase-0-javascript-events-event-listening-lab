const input = document.getElementById('button');


//   input.addingEventListener('click', alert);
  function addingEventListener() {
    input.addEventListener('click', function() {
    alert('I was clicked!');
  });}