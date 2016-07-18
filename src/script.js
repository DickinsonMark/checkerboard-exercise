///////////   Gradient

for (var i = 96; i > 33; i--) {

  var block1 = document.createElement('div');
  block1.style.backgroundColor = '#7452' + i;
  block1.style.width = '11.1%';
  block1.style.paddingBottom = '11.1%';
  block1.style.float = 'left';

  var block2 = document.createElement('div');
  block2.style.backgroundColor = '#74' + i + 'a1';
  block2.style.width = '11.1%';
  block2.style.paddingBottom = '11.1%';
  block2.style.float = 'left';

  if (i % 2 === 0) {
    document.body.appendChild(block1);
  } else {
    document.body.appendChild(block2);
  }
}
