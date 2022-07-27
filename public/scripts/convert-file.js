const convertFileBtnElement = document.getElementById('convertBtn') 

// console.log(convertFileBtnElement)
// console.log(csvFilePath)
async function convertFile(){
    // const convertFileButton = event.target; 
// console.log(convertFileButton)
    const csvFileData = document.getElementById('file-data').value;
    
    if(csvFileData === "" || csvFileData === "upload file first!"){
        document.getElementById('file-data').value = "upload file first!";
        return;
    }
    // console.log(csvFileData)
    // const fileData = csvFilePath.parse()
// console.log(csvFilePath)
    let response;
    try{
     response = await fetch('/convert', {
            method: 'POST',
            body: JSON.stringify({
               csvFileData: csvFileData
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }catch(error){
       console.log(error);
       return;
    }
       
        if(!response.ok){
        console.log(error)
            return;
        }

        const responseData = await response.json();

        
  
        const fileData = responseData.fileData;
        // const fileName = responseData.fileName;
        const convertedFileTextElement = document.getElementById("file-preview");

        // console.log(fileData)
        convertedFileTextElement.value = fileData;

        const downloadFileBtn = document.querySelector('#download-file a');
        downloadFileBtn.download = `file.json`;
}

convertFileBtnElement.addEventListener('click',convertFile);







