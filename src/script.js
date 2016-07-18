/////////  Random Colors

function getRandomColor() {
  var val = '0123456789abcdef'.split('');
  var color = '#';
  for (var j = 0; j < 6; j++) {
    color += val[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (var i = 0; i < 63; i++) {
  var block = document.createElement('div');
  block.style.backgroundColor = getRandomColor();
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.style.float = 'left';
  document.body.appendChild(block);
}

setTimeout(function() {
  window.location.reload(1);
}, 2000);
