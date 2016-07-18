// Your JS goes here
for (var i = 0; i < 81; i++) {

  var blockRed = document.createElement('div');
  blockRed.style.backgroundColor = 'red';
  blockRed.style.width = '11.1%';
  blockRed.style.paddingBottom = '11.1%';
  blockRed.style.float = 'left';

  var blockBlack = document.createElement('div');
  blockBlack.style.backgroundColor = 'black';
  blockBlack.style.width = '11.1%';
  blockBlack.style.paddingBottom = '11.1%';
  blockBlack.style.float = 'left';

  if (i % 2 === 0) {
    document.body.appendChild(blockRed);
  } else {
    document.body.appendChild(blockBlack);
  }
}
