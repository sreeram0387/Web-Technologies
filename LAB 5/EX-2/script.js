let xml;

// LOAD XML
function loadXML(){
 let x=new XMLHttpRequest();
 x.open("GET","books.xml",true);
 x.onload=function(){
  if(x.status==200){
   xml=x.responseXML;
   if(!xml) return msg("Malformed XML","red");
   show();
  }else msg("Load Error","red");
 };
 x.send();
}

// DISPLAY
function show(){
 let rows=xml.getElementsByTagName("book");
 let t=document.getElementById("tbl");
 t.innerHTML=`<tr><th>ID</th><th>Title</th><th>Author</th><th>Status</th><th>Action</th></tr>`;

 if(rows.length==0) return msg("No Books Found","orange");

 for(let i=0;i<rows.length;i++){
  t.innerHTML+=`<tr>
   <td>${tag(rows[i],"id")}</td>
   <td>${tag(rows[i],"title")}</td>
   <td>${tag(rows[i],"author")}</td>
   <td>${tag(rows[i],"status")}</td>
   <td>
    <button onclick="toggle(${i})">Toggle</button>
    <button onclick="del(${i})">Delete</button>
   </td></tr>`;
 }
 msg("Loaded Successfully","green");
}

// GET VALUE
function tag(node,name){
 return node.getElementsByTagName(name)[0].textContent;
}

// VALIDATION
function valid(){
 let v=[id.value,title.value,author.value];
 return v.every(x=>x.trim()!="");
}

// ADD BOOK
function addBook(){
 if(!xml) return msg("Load XML first","red");
 if(!valid()) return msg("Fill all fields","red");

 let b=xml.createElement("book");

 ["id","title","author"].forEach((t,i)=>{
  let e=xml.createElement(t);
  e.textContent=document.querySelectorAll("input")[i].value;
  b.appendChild(e);
 });

 let s=xml.createElement("status");
 s.textContent="Available";
 b.appendChild(s);

 xml.documentElement.appendChild(b);
 show();
 msg("Book Added","green");
}

// UPDATE STATUS
function toggle(i){
 let s=xml.getElementsByTagName("status")[i];
 s.textContent = s.textContent=="Available" ? "Issued" : "Available";
 show();
 msg("Status Updated","blue");
}

// DELETE BOOK
function del(i){
 xml.getElementsByTagName("book")[i].remove();
 show();
 msg("Book Deleted","orange");
}

// MESSAGE
function msg(t,c){
 let m=document.getElementById("msg");
 m.textContent=t;
 m.style.color=c;
}

window.onload=loadXML;
