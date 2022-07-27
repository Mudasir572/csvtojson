const downloadFileBtnElement = document.querySelector('#download-file a'); 

function downloadFile(){
    const downloadFileBtnElement = document.querySelector('#download-file a'); 
const fileData = document.getElementById('file-preview').value;
if(!downloadFileBtnElement.download || downloadFileBtnElement.download === ""){
    const convertedFileTextElement = document.getElementById("file-preview");
        convertedFileTextElement.value = "Upload and convert a file first!";
    return
    
}
const blob = new Blob([fileData],{type: "application/json"});
downloadFileBtnElement.href = URL.createObjectURL(blob); 
}

downloadFileBtnElement.addEventListener('click',downloadFile)