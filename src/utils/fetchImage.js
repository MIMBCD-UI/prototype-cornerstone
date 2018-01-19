function fetchImagePatients() {
  fetch('http://localhost:8042/patients/')
  .then(data => data.json())
}

console.log('Ola nina!');
