/*document.addEventListener('DOMContentLoaded', () =>{
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress');
    const progressNumber =  document.getElementById('number');

    const todosContainer = document.querySelector('.todo-container');

    const toggleEmptyState = () => {

        todosContainer.style.width = taskList.
        children.length > 0 ? '100%' : '50%';

    };

    const updateProgress = (checkCompletion = true) => {
        const totalTasks = taskList.children.length;
        const completedTasks = taskList.querySelectorAll('.checkBox:checked').length;

        progressBar.style.width = totalTasks ? `${(completedTasks / totalTasks) * 100}%`:'0%';
        progressNumber.textContent = `${completeTasks} / ${totalTasks}`;

        if(checkCompletion && totalTasks > 0 && completedTasks === totalTasks){
        confetti();
        }   
         };

         const saveTaskToLocalStorage = () => {
            const tasks  = Array.from(taskList. querySelectorAll('li')).map(li => ({
                text: li.querySelector('span').textContent,
                completed: li.querySelector('.checkBox').checked

            }) );

            localStorage.setItem('tasks',JSON.stringify (tasks));
         };

         const loadTasksFromLocalStorage = () => {
            const saveTasks = JOSN.parse(localStorage.getItem('tasks')) || [];
            saveTasks.forEach(({text,completed})=> addTask(text,completed,false));
            toggleEmptyState();
            updateProgress();
         }
    
        
        



    const addTask = (text,completed = false) => {
        const taskText = text || taskInput.value.trim();
        if(!taskText){
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkBox" class="checkBox" ${completed ? 'checked': ''}/>
        <span>${taskText}</span>
        <div class="task-button">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;

       
        const checkBox = li.querySelector('.checkBox');
        const editBtn = li.querySelector('.edit-btn');

        if(completed){
            li.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity = '0.5';
            editBtn.style.pointerEvents = 'none';
        }

        checkBox.addEventListener('change',() =>{
            const isChecked = checkBox.checked;
            li.classList.toggle('completed',isChecked);
            editBtn.disabled = isChecked;
            editBtn.style.opacity = isChecked ? '0.5':'1';
            editBtn.style.pointerEvents = isChecked ? 'none' : 'auto';
            updateProgress();
            saveTaskToLocalStorage();

        });

        editBtn.addEventListener('click',() =>{
            if(!checkBox.checked){
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
                toggleEmptyState();
                updateProgress(false);
                saveTaskToLocalStorage();

            }
        });

        li.querySelector('.delete-btn').
        addEventListener('click', () => {
            li.remove();
            toggleEmptyState();
            updateProgress(checkCompletion);
            saveTaskToLocalStorage();

        
        


        });
        
        
        taskList.appendChild(li);   
        taskInput.value = '';
    };

    addTaskBtn.addEventListener('click',() => addTask());
    taskInput.addEventListener('keypress',(e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
            addTask();
        }
    });

    loadTaskFromLocalStorage();

});
/* Fireworks */
    /*    const confetti = () => {
            const duration = 15 * 1e3,
animationEnd = Date.now() + duration,
defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const interval = setInterval(function() {
const timeLeft = animationEnd - Date.now();
if (timeLeft <= 0) return clearInterval(interval);
  const particleCount = 50 * (timeLeft / duration);
confetti(Object.assign({}, defaults, {
    particleCount,
    origin: {
    x: randomInRange(.1, .3),
    y: Math.random() - .2
    }
}));
confetti(Object.assign({}, defaults, {
    particleCount,
    origin: {
    x: randomInRange(.7, .9),
    y: Math.random() - .2
    }
}));
}, 250);

        };*/
/*Errors Fixs Code*/

document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress');
    const progressNumber = document.getElementById('number');

    const todosContainer = document.querySelector('.todo-container');

    const toggleEmptyState = () => {
        todosContainer.style.width =
            taskList.children.length > 0 ? '100%' : '50%';
    };

    const updateProgress = (checkCompletion = true) => {

        const totalTasks = taskList.children.length;
        const completedTasks =
            taskList.querySelectorAll('.checkBox:checked').length;

        progressBar.style.width =
            totalTasks
                ? `${(completedTasks / totalTasks) * 100}%`
                : '0%';

        progressNumber.textContent =
            `${completedTasks}/${totalTasks}`;

        if (
            checkCompletion &&
            totalTasks > 0 &&
            completedTasks === totalTasks
        ) {
            launchConfetti();
        }
    };

    const saveTaskToLocalStorage = () => {

        const tasks = Array.from(
            taskList.querySelectorAll('li')
        ).map(li => ({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('.checkBox').checked
        }));

        localStorage.setItem(
            'tasks',
            JSON.stringify(tasks)
        );
    };

    const loadTasksFromLocalStorage = () => {

        const savedTasks =
            JSON.parse(localStorage.getItem('tasks')) || [];

        savedTasks.forEach(({ text, completed }) => {
            addTask(text, completed);
        });

        toggleEmptyState();
        updateProgress(false);
    };

    const addTask = (text = '', completed = false) => {

        const taskText = text || taskInput.value.trim();

        if (!taskText) return;

        const li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" class="checkBox"
                ${completed ? 'checked' : ''}>

            <span>${taskText}</span>

            <div class="task-button">
                <button class="edit-btn" type="button">
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button class="delete-btn" type="button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        const checkBox = li.querySelector('.checkBox');
        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        if (completed) {
            li.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity = '0.5';
            editBtn.style.pointerEvents = 'none';
        }

        checkBox.addEventListener('change', () => {

            const isChecked = checkBox.checked;

            li.classList.toggle('completed', isChecked);

            editBtn.disabled = isChecked;
            editBtn.style.opacity = isChecked ? '0.5' : '1';
            editBtn.style.pointerEvents =
                isChecked ? 'none' : 'auto';

            updateProgress();
            saveTaskToLocalStorage();
        });

        editBtn.addEventListener('click', () => {

            if (!checkBox.checked) {

                taskInput.value =
                    li.querySelector('span').textContent;

                li.remove();

                toggleEmptyState();
                updateProgress(false);
                saveTaskToLocalStorage();
            }
        });

        deleteBtn.addEventListener('click', () => {

            li.remove();

            toggleEmptyState();
            updateProgress(false);
            saveTaskToLocalStorage();
        });

        taskList.appendChild(li);

        taskInput.value = '';

        toggleEmptyState();
        updateProgress(false);
        saveTaskToLocalStorage();
    };

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addTask();
    });

    taskInput.addEventListener('keypress', (e) => {

        if (e.key === 'Enter') {

            e.preventDefault();
            addTask();
        }
    });

    loadTasksFromLocalStorage();
});


function launchConfetti() {

    if (typeof confetti !== 'function') return;

    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 1000
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {

        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount =
            50 * (timeLeft / duration);

        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() - 0.2
            }
        });

        confetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() - 0.2
            }
        });

    }, 250);
}

   /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"> */
   /*Font Awesome Code  (meken boostrap wge dewl link krnna puluwan)*/

      /*  <script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@4.1.3/tsparticles.confetti.bundle.min.js"></script>*/
        /*Confetti Code  (meken animation danna puluwan)*/



