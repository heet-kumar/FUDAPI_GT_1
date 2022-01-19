let id = 0;
let globaldata = [];
const uploaddetail = document.querySelector(".align");

async function fetchdata() {
    await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => {globaldata.push(data);console.log(data)});

        const newdata = dispdata(globaldata[0],id);
        insertdata(newdata);
}

const dispdata = (data,id) => `
        <div class="det"><img src=${data[id].url} style="width: 50%;" alt="user pic"></div>
        <div class="det"> Title : ${data[id].title} </div>
`
function insertdata(ndata){
    uploaddetail.insertAdjacentHTML("beforeend",ndata);
}

function next(){                                //  function for going next
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

function prev(){                                //  function for going prev
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

function shuf(){                                            //  function for shuffle
    let randomnumber = Math.floor(Math.random()*5000);
    id = randomnumber;
    const newdata = dispdata(globaldata[0],id);
    while(uploaddetail.firstChild){
        uploaddetail.removeChild(uploaddetail.firstChild);
    }
    insertdata(newdata);
}

fetchdata();
