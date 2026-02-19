let data=[];

// LOAD JSON
async function load(){
 try{
  let r=await fetch("students.json");
  if(!r.ok) throw "Fetch error";
  data=await r.json();
  show();
  msg("Loaded","green");
 }catch(e){ msg("JSON Load Error","red"); }
}

// DISPLAY TABLE
function show(){
 let t=document.getElementById("tbl");
 t.innerHTML=`<tr><th>ID</th><th>Name</th><th>Course</th><th>Marks</th><th>Action</th></tr>`;
 data.forEach((s,i)=>{
  t.innerHTML+=`<tr>
  <td>${s.id}</td>
  <td>${s.name}</td>
  <td>${s.course}</td>
  <td>${s.marks}</td>
  <td>
   <button onclick="edit(${i})">Edit</button>
   <button onclick="del(${i})">Delete</button>
  </td></tr>`;
 });
}

// VALIDATION
function valid(){
 return id.value && name.value && course.value && marks.value;
}

// CREATE
function add(){
 if(!valid()) return msg("Fill all fields","red");

 data.push({
  id:id.value,
  name:name.value,
  course:course.value,
  marks:marks.value
 });

 show();
 msg("Student Added","green");
}

// UPDATE
function edit(i){
 let c=prompt("New Course:",data[i].course);
 let m=prompt("New Marks:",data[i].marks);
 if(c) data[i].course=c;
 if(m) data[i].marks=m;
 show();
 msg("Updated","blue");
}

// DELETE
function del(i){
 data.splice(i,1);
 show();
 msg("Deleted","orange");
}

// MESSAGE
function msg(t,c){
 let m=document.getElementById("msg");
 m.textContent=t;
 m.style.color=c;
}

window.onload=load;
