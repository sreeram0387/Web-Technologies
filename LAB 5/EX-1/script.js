let xmlDoc;

// LOAD XML (READ)
function loadXML(){
 let x=new XMLHttpRequest();
 x.open("GET","employees.xml",true);
 x.onload=function(){
  if(x.status==200){
   xmlDoc=x.responseXML;
   display();
   msg("Loaded Successfully","green");
  }else msg("Error loading XML","red");
 };
 x.onerror=()=>msg("Malformed XML / File Error","red");
 x.send();
}

// DISPLAY TABLE
function display(){
 let rows=xmlDoc.getElementsByTagName("employee");
 let t=document.getElementById("tbl");
 t.innerHTML=`<tr><th>ID</th><th>Name</th><th>Dept</th><th>Salary</th><th>Action</th></tr>`;

 for(let i=0;i<rows.length;i++){
  let id=tag(rows[i],"id");
  let name=tag(rows[i],"name");
  let d=tag(rows[i],"department");
  let s=tag(rows[i],"salary");

  t.innerHTML+=`<tr>
  <td>${id}</td>
  <td>${name}</td>
  <td>${d}</td>
  <td>${s}</td>
  <td>
   <button onclick="del(${i})">Delete</button>
   <button onclick="upd(${i})">Update</button>
  </td></tr>`;
 }
}

// GET TAG VALUE
function tag(node,name){
 return node.getElementsByTagName(name)[0].textContent;
}

// CREATE
function addEmp(){
 if(!xmlDoc) return msg("Load XML first","red");

 let emp=xmlDoc.createElement("employee");

 ["id","name","department","salary"].forEach((t,i)=>{
  let e=xmlDoc.createElement(t);
  e.textContent=document.querySelectorAll("input")[i].value;
  emp.appendChild(e);
 });

 xmlDoc.documentElement.appendChild(emp);
 display();
 msg("Employee Added","green");
}

// DELETE
function del(i){
 xmlDoc.getElementsByTagName("employee")[i].remove();
 display();
 msg("Deleted","orange");
}

// UPDATE
function upd(i){
 let emp=xmlDoc.getElementsByTagName("employee")[i];
 let newDept=prompt("New Department:");
 let newSal=prompt("New Salary:");

 if(newDept) emp.getElementsByTagName("department")[0].textContent=newDept;
 if(newSal) emp.getElementsByTagName("salary")[0].textContent=newSal;

 display();
 msg("Updated","blue");
}

// MESSAGE
function msg(text,color){
 let m=document.getElementById("msg");
 m.textContent=text;
 m.style.color=color;
}

window.onload=loadXML;
