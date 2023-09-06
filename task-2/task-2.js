function changeCSS() {
    const textElement = document.getElementById('text');
  
    textElement.style.color = 'orange';
    textElement.style.fontSize = '20px';
    textElement.style.fontFamily = 'Comic Sans MS';
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', changeCSS);