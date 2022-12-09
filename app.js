console.log('JS FILE SUCCESSFULLY LOAD');

let TaskArr = [];
var cpt=0;

function addTask() {
    newTask = document.getElementById('taskInput').value;
    // console.log(newTask);
    if(newTask != ""){
        TaskArr.push(newTask);
        let pos = TaskArr.indexOf(newTask);
            console.log('pos : ' + pos)
            console.log("taskarr : \'" + TaskArr+ "\'");
            console.log("length : (" + TaskArr.length + ")");

            var li = document.createElement('li');
            li.setAttribute('id','task');
            li.className="flex items-center bg-slate-700 text-white mt-2 rounded";

            var txt = document.createElement('p');
            txt.className = 'mx-2 max-w-md';
            txt.innerHTML = TaskArr[pos];

            var icon = document.createElement('i');
            icon.className = 'icofont-interface m-2';

            document.getElementById('todoList').appendChild(li);
            li.appendChild(icon);
            li.appendChild(txt);

            document.getElementById('taskInput').value = '';

    }
}


    

// let pos = fruits.indexOf('Banana');

// let newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];

// let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]




// function addTask() {
//     var task = document.getElementById('taskInput').value;
//     var li = document.createElement('li');

//     // Set the text of the li to the task input value
//     li.innerHTML = task;

//     // Append the li to the todoList ul
//     document.getElementById('todoList').appendChild(li);

//     // Clear the task input field
//     document.getElementById('taskInput').value = '';
//   }

// function addTask() {
//     var task = document.getElementById('taskInput').value;
//     if (task != '') {
//         document.getElementById('taskInput').value = '';
//         var li = document.createElement('li');
//         var ul = document.querySelector('ul');
//         ul.appendChild(li);
//         li.className = 'task';
//         var icon = document.createElement('img');
//         li.appendChild(document.icon.src = "");
//         li.appendChild(document.innerHTML = task);
//     }
// }