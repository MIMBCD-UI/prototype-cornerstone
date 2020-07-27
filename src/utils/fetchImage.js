function fetchImagePatients() {
  fetch('http://breastscreening.isr.tecnico.ulisboa.pt:4550/patients/')
  .then(data => data.json())
}

console.log('Fetch Image Patients: OK');

console.log(fetchImagePatients());
