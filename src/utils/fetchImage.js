function fetchImagePatients() {
  fetch('http://breastscreening.arditi.pt:8550/patients/')
  .then(data => data.json())
}

console.log('Fetch Image Patients: OK');

console.log(fetchImagePatients());
