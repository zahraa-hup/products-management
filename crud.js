let first=document.getElementById('first');
let last=document.getElementById('last');
let roll=document.getElementById('roll');
let arrdata;
let tbody=document.getElementById('tbody');
let mode='create';
let tmp;


if(localStorage.data != null)
{
   arrdata = JSON.parse( localStorage.data);
}else{
    arrdata=[];
}

function clear(){
    first.value='';
    last.value='';
    roll.value='';
}

function showdata(){
    let row='';
    for(let i=0;i<arrdata.length;i++){
    row+=
          `
          <tr>
                <td>${arrdata[i].firstname}</td>
                <td>${arrdata[i].lastname}</td>
                <td>${arrdata[i].rollno}</td>
                <td>
                    <button onclick='edit(${i})' id="editbtn">edit</button>
                    <button onclick='deleteelement(${i})' id="deletebtn">delete</button>
                </td>
            </tr>
        
            `  
            ;
    }
     tbody.innerHTML=row;    
}
showdata();

function create(){
    let element={
        firstname:first.value,
        lastname:last.value,
        rollno:roll.value
    }
    if(mode=='create'){
    arrdata.push(element);
    localStorage.data=JSON.stringify(arrdata);
   clear(); 
   showdata();
    }else
    {
        arrdata[tmp]=element;
        localStorage.data=JSON.stringify(arrdata);
        mode='create';
        clear(); 
        showdata();
    }
}




function edit(i){
first.value=arrdata[i].firstname;
last.value=arrdata[i].lastname;
roll.value=arrdata[i].rollno;
tmp=i;
mode='edit';
console.log(tmp);
}
function deleteelement(i){
    arrdata.splice(i,1);
    localStorage.data=JSON.stringify(arrdata);
    showdata();
}
