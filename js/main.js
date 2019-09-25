let t = document.getElementById('fib');
let m = ['fi', 'bu', 'zz', 'zz'];

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

let result;
function resultFBZ() {
  result = shuffle(m).join('');
  t.innerHTML = result;
}

let id = setInterval(function(){
  resultFBZ();
  if (result === 'fizzbuzz') {
    clearInterval(id);
  }
}, 200);