// Create
function newElement() {
  var li = document.createElement('LI');
  var t = document.getElementById('myInput').value;
  var todoItem = document.createTextNode(t);
  var span = document.createElement('SPAN');
  var txt = document.createTextNode("\u00D7");

  li.appendChild(todoItem);

  if (t == '') {
    alert('Please fill out the form');
  } else {
    document.getElementById('myUL').appendChild(li);
  }

  document.getElementById('myInput').value = '';
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentElement.removeChild(div)
    }
  }
} 


// Delete
var todos = document.getElementsByTagName('LI');
var i;
for (i = 0; i < todos.length; i++) {
  var span = document.createElement('SPAN');
  span.className = 'close';
  todos[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  }
}

// update
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);