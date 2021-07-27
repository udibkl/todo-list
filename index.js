function jztupdate()
{
    


  
if(localStorage.getItem('items')==null)
{
  
   itemarray=[];
//    itemarray.push([tit,desc]);
   localStorage.setItem('items',JSON.stringify(itemarray))

}

else
{
   
    itemstr=localStorage.getItem('items')
    itemarray=JSON.parse(itemstr);
    // itemarray.push([tit,desc]);
    localStorage.setItem('items',JSON.stringify(itemarray))
}

let str="";
let table=document.getElementById('tablebody');

itemarray.forEach((element,index) => {
    str+=`
<tr>
<th scope="row">${index+1}</th>
<td>${element[0]}</td>
<td>${element[1]}</td>
<td> <button id="delete" class="btn btn-primary" onclick="dele(${index})">Delete</button></td>
</tr>
`;
});
table.innerHTML=str;

    

}

function update()
{



    tit=document.getElementById('title').value;
    desc=document.getElementById('description').value;
if(localStorage.getItem('items')==null)
{
  
   itemarray=[];
   itemarray.push([tit,desc]);
   localStorage.setItem('items',JSON.stringify(itemarray))

}

else
{
   
    itemstr=localStorage.getItem('items')
    itemarray=JSON.parse(itemstr);
    itemarray.push([tit,desc]);
    localStorage.setItem('items',JSON.stringify(itemarray))
}

let str="";
let table=document.getElementById('tablebody');

itemarray.forEach((element,index) => {
    str+=`
<tr>
<th scope="row">${index+1}</th>
<td>${element[0]}</td>
<td>${element[1]}</td>
<td> <button id="delete" class="btn btn-primary" onclick="dele(${index})">Delete</button></td>
</tr>
`;
});
table.innerHTML=str;

}
add=document.getElementById('add');

add.addEventListener('click',update)

function dele(item)
{
    console.log("Delete",item);

stritm=localStorage.getItem('items');
itemarray=JSON.parse(stritm);
itemarray.splice(item,1);
localStorage.setItem('items',JSON.stringify(itemarray))
jztupdate();
}
jztupdate();


clr.addEventListener('click',()=>
{
    localStorage.clear();
    jztupdate();
})
