


var list = document.getElementById("list");


function addTodo(){
    var todo_item = document.getElementById("todo-item");


   
    // if( document.getElementById('todo-item').value === '' ){
    //     alert('your field is empty');
    //   }

    

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class", "item_input")
    li.setAttribute("class", "item")
    li.appendChild(liText)


    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "removeButton")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    
    delBtn.setAttribute("class", "btn")
    delBtn.appendChild(delText)


    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "editButton")
    editBtn.setAttribute("onclick", "editItem(this)")
    
editBtn.setAttribute("class","edt")
    
    editBtn.appendChild(editText)

    // if (todo_item.value.length == 0)
    // { 
    //    alert("message");     
    //    return false; 
    // }    
    // else return true; 


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
     todo_item.value = " "   
}


function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter updated Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue;
  
}

function deleteAll(){
    list.innerHTML = " "
}