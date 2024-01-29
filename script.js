const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("please write something");//it will run if input box is empty
    }
    else{
        let li = document.createElement("li");//it will create an html element with name li
        li.innerHTML = inputBox.value;//the text that we will add in input box will be added in li
        listContainer.appendChild(li);//the text will be displayed in listcontainer 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"//it will give cross sign
        li.appendChild(span);//it will display span
    }
    inputBox.value="";//to add new task
    saveData();//whenever we will add new task saveData function will be called
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){//if we have clicked on LI then it will add checked class name
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){//if we have clicked on span i.e cross button then it will remove the parent element(li element) 
        e.target.parentElement.remove();//which means that it will remove the task that we have written
        saveData();
    }
},false);
function saveData(){//the data will not remove even after refreshing the website
    localStorage.setItem("data",listContainer.innerHTML);//it will store the entire content in the list container
}
function showTask(){//to display the data whenever we will open the website again
    listContainer.innerHTML = localStorage.getItem("data");//it will give all the content stored in browser with the name of data
}
showTask();