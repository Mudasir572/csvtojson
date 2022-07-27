const clearPageButton = document.getElementById('clear');
const downloadFileButtonElement = document.querySelector('#download-file a'); 
const csvFileDataElement = document.getElementById('file-data');
const jsonFileDataElement = document.getElementById('file-preview');
const uploadFileInputElement = document.getElementById('csv');
function clear(){
    // csvFileDataElement.innerHTML = "";
    csvFileDataElement.value = "";
    // jsonFileDataElement.innerHTML = "";
    jsonFileDataElement.value = "";
    downloadFileButtonElement.removeAttribute('download');
    downloadFileButtonElement.removeAttribute('href');
    uploadFileInputElement.value = null;
   }
clearPageButton.addEventListener('click',clear);