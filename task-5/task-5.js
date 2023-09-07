const liveButton = document.getElementById('liveButton');
const message = document.getElementById('message')

liveButton.addEventListener('click', function() {
    const text = document.createElement('p');
    text.textContent = 'I was presed!';
    message.append(text);
})

liveButton.addEventListener('mouseover', function() {
    const text = document.createElement('p');
    text.textContent = 'Mouse on me!';
    message.append(text);
})

liveButton.addEventListener('mouseout', function() {
    const text = document.createElement('p');
    text.textContent = 'Mouse is not on me!';
    message.append(text);
})

