const input = document.getElementById('csv');
const messageElement = document.getElementById('message');
function uploadFile(){
const file = document.getElementById('csv').files[0];
const extension = file.name.split('.').pop().toLowerCase();

if(extension !== 'csv'){
  messageElement.innerText = "upload a valid csv file!"
  messageElement.style.display = 'block';
  input.value = null;
  return
}
messageElement.style.display = 'none';
if (file) {
  const reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = (evt) => {
    document.getElementById("file-data").value = evt.target.result;
  };
  reader.onerror = (evt) => {
    document.getElementById("file-data").innerHTML = "error reading file";
  };
}
}


input.addEventListener('change',uploadFile);
