document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display="none";

    const title = document.getElementById('title').value;
    const description = document.getElementById('desc').value;
    document.getElementById('form').reset();

    const formData = {
        id:Date.now(),
        Title:title,
        Description:description
    };

    saveFormData(formData);
});

document.getElementById('addBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display="flex";

    
});

document.getElementById('closeBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display="none";
    document.getElementById('form').reset();

    
});


function saveFormData(formData) {

    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
    displayNotes()
}

function saveCompletedData(completeTask) {

    const storedCompletedData = JSON.parse(localStorage.getItem('completeTask')) || [];

    storedCompletedData.push(completeTask);

    localStorage.setItem('completeTask', JSON.stringify(storedCompletedData));
    displayCompletedNotes()
}

function  displayCompletedNotes(){
    const storedCompletedData = JSON.parse(localStorage.getItem('completeTask')) || [];
    
    let note=``;
    storedCompletedData.forEach((data)=>{
        note+=` <div id="completedNote">
        <div id="completed-note-${data.id}">
            <h3>${data.Title}</h3>
            <p>${data.Description}</p>
            <button onclick="deleteCompletedNode(${data.id})">delete</button>
              </div></div>`;
        

    });
    document.getElementById("completedNotes").innerHTML=note;
}
function displayNotes()
{
    storedFormData = JSON.parse(localStorage.getItem('formData'))
    
    let note=``;
    storedFormData.forEach((data)=>{
        note+=` <div id="note">
            <h3>${data.Title}</h3>
            <p>${data.Description}</p>
            <button onclick="deleteNode(${data.id})">delete</button>
            <button onclick="completeTask(${data.id}, '${data.Title}', '${data.Description}')">Completed</button>
      </div>`;
        

    });
    document.getElementById("notes").innerHTML=note;
}


function deleteNode(id)
{
    let storedFormData = JSON.parse(localStorage.getItem('formData'));
    storedFormData=storedFormData.filter((data)=>data.id!==id);
    localStorage.setItem('formData', JSON.stringify(storedFormData));

    displayNotes();
}
function deleteCompletedNode(id)
{
    let storedFormData = JSON.parse(localStorage.getItem('completeTask'));
    storedFormData=storedFormData.filter((data)=>data.id!==id);
    localStorage.setItem('completeTask', JSON.stringify(storedFormData));

    displayCompletedNotes();
}

function completeTask(id,title,desc)
{
    deleteNode(id);
    const completeTask = {
        id:id,
        Title:title,
        Description:desc
    };

    saveCompletedData(completeTask);
}
window.addEventListener("load", function() {
    displayNotes();
    displayCompletedNotes();

});









