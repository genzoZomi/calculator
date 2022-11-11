const node = document.getElementById('operations')

function btnClick(val) {
  const current = node.innerHTML;
  node.innerHTML = current + val;
}

function clearNode() {
  node.innerHTML = '';
}

function operation(val) {
  let a
  let b
  let result
  const current = node.innerHTML;
  
  if (current.includes('+')) {
    a = parseInt(current.split('+')[0])
    b = parseInt(current.split('+')[1])
    result = a + b
  } else if (current.includes('-')) {
    a = parseInt(current.split('-')[0])
    b = parseInt(current.split('-')[1])
    result = a - b
  } else if (current.includes('/')) {
    a = parseInt(current.split('/')[0])
    b = parseInt(current.split('/')[1])
    result = a / b
  } else if (current.includes('*')) {
    a = parseInt(current.split('*')[0])
    b = parseInt(current.split('*')[1])
    result = a * b
  } else if (current.includes('|')) {
    a = parseInt(current.split('|')[0])
    b = parseInt(current.split('|')[1])
    result =  curent
    
  } else {
    result = current
  }

  if (val == '=') {
    node.innerHTML = result
  } else {
    node.innerHTML = result + val
  }
 }