let id = 0;
let globaldata = [];

async function fetchdata() {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => globaldata.push(data));

        const newdata = dispdata(globaldata[0],id);
        insertdata(newdata);
}

//console.log(gldata);
const uploaddetail = document.querySelector(".align");

const dispdata = (data,id) => `
        <div class="det"> Name : ${data[id].name} </div>
        <div class="det"> Username : ${data[id].username} </div>
        <div class="det"> Email : <a href="mailto:${data[id].email}"> ${data[id].email} </a></div>
        <div class="det"> Address : ${data[id].address.street}, ${data[id].address.suite}</div>
        <div class="det"> City : ${data[id].address.city}</div>
        <div class="det"> Zip Code : ${data[id].address.zipcode} </div>
        <div class="det"> Phone : ${data[id].phone}</div>
        <div class="det"> Website : <a href=${data[id].website}>${data[id].website}</a> </div>
        <div class="det"> Company : ${data[id].company.name} </div>
`
function insertdata(ndata){
    uploaddetail.insertAdjacentHTML("beforeend",ndata);
}

function next(){
    if(id===(globaldata[0].length - 1)){
        id=0;
    }else{
        id = id + 1;
    }
    const newdata = dispdata(globaldata[0],id);
    while(uploaddetail.firstChild){
        uploaddetail.removeChild(uploaddetail.firstChild);
    }
    insertdata(newdata);
}

function prev(){
    if(id===0){
        id=globaldata[0].length - 1;
    }
    else{
        id = id - 1;
    }
    const newdata = dispdata(globaldata[0],id);
    while(uploaddetail.firstChild){
        uploaddetail.removeChild(uploaddetail.firstChild);
    }
    insertdata(newdata);
}

function shuf(){
    let randomnumber = Math.floor(Math.random() * globaldata[0].length);
    id = randomnumber;
    const newdata = dispdata(globaldata[0],id);
    while(uploaddetail.firstChild){
        uploaddetail.removeChild(uploaddetail.firstChild);
    }
    insertdata(newdata);
}

fetchdata();
