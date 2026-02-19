let data=[];

// LOAD JSON
async function load(){
 try{
  let r=await fetch("inventory.json");
  if(!r.ok) throw "error";
  data=await r.json();
  show();
  msg("Loaded","green");
 }catch{ msg("JSON Load Error","red"); }
}

// DISPLAY
function show(){
 let t=document.getElementById("tbl");
 let f=search.value.toLowerCase();
 let total=0;

 t.innerHTML=`<tr><th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Action</th></tr>`;

 data.filter(p=>p.category.toLowerCase().includes(f))
 .forEach((p,i)=>{
  total+=p.price*p.stock;
  t.innerHTML+=`<tr class="${p.stock<5?'low':''}">
   <td>${p.id}</td>
   <td>${p.name}</td>
   <td>${p.category}</td>
   <td>${p.price}</td>
   <td>${p.stock}</td>
   <td>
    <button onclick="edit(${i})">Edit</button>
    <button onclick="del(${i})">Delete</button>
   </td></tr>`;
 });

 document.getElementById("total").textContent="Total Value: ₹"+total;
}

// VALIDATION
function valid(){
 return id.value && name.value && cat.value && price.value>0 && stock.value>=0;
}

// ADD
function add(){
 if(!valid()) return msg("Invalid Input","red");

 data.push({
  id:id.value,
  name:name.value,
  category:cat.value,
  price:Number(price.value),
  stock:Number(stock.value)
 });
 show();
 msg("Product Added","green");
}

// EDIT
function edit(i){
 let pr=prompt("New Price:",data[i].price);
 let st=prompt("New Stock:",data[i].stock);
 if(pr>0) data[i].price=Number(pr);
 if(st>=0) data[i].stock=Number(st);
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

