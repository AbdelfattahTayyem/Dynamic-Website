/////////////////////////// Save To Local //////////////////////////////////

const savelocal=()=>{

const name =document.getElementById('user_name').value;
localStorage.setItem('username', name);

const email =document.getElementById('email').value;
localStorage.setItem('email',email);

const date =document.getElementById('dob').value;
localStorage.setItem('dob',date);

const number=document.getElementById('number').value;
localStorage.setItem('number', number);

const password=document.getElementById('password').value
localStorage.setItem('password',password);

const terms=document.getElementById('terms').checked
if (!terms) {
    alert("You must accept the terms and conditions before submitting.");
    localStorage.clear();
    sessionStorage.clear();
    return; 
}
localStorage.setItem('terms',terms);

/////////////////////////// Save To session //////////////////////////////////

};

const savesession =()=>{

    const name =document.getElementById('user_name').value;
    sessionStorage.setItem('username', name);
    
    const email =document.getElementById('email').value;
    sessionStorage.setItem('email',email);
    
    const date =document.getElementById('dob').value;
    sessionStorage.setItem('dob',date);
    
    const number=document.getElementById('number').value;
    sessionStorage.setItem('number', number);
    
    const password=document.getElementById('password').value
    sessionStorage.setItem('password',password);

    const terms=document.getElementById('terms').checked
    if (!terms) {
        alert("You must accept the terms and conditions before submitting.");
        localStorage.clear();
        sessionStorage.clear();
        return; 
    }
    sessionStorage.setItem('terms',terms);
    
    };
    


    const clearName = () => {
        localStorage.clear();
        sessionStorage.clear();
    };

// color and font style 





// clculater script ///////////////////////////////////////////////////////////////

const appendValue = (value) => {
    document.getElementById('display').value += value;
};

const clearDisplay = () => {
    document.getElementById('display').value = '';
};

const deleteLast = () => {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
};

const calculate = () => {
    const display = document.getElementById('display').value;

    if (display.includes('^')) {
        const [base, exponent] = display.split('^');
        const result = Math.pow(parseFloat(base), parseFloat(exponent));
        document.getElementById('display').value = result;
    } else {
        try {
            document.getElementById('display').value = eval(display);
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
};


const calculateFactorial = () => {
    const display = document.getElementById('display');
    let number = parseInt(display.value);
    if (number < 0) return display.value = 'Error';
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    display.value = result;
};


// script to do //////////////////////////////////////////////////////////////////////////

// Function to add a new task
function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim(); // Get the trimmed value of the input

    if (!task) return; // Ignore empty or whitespace-only tasks

    // Retrieve existing tasks from local storage or initialize as an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task); // Add the new task to the array

    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = ''; // Clear the input field
    displayTasks(); // Refresh the displayed task list
}

// Function to delete a specific task by index
function deleteTask(index) {
    // Retrieve existing tasks from local storage or initialize as an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove the task at the given index

    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(); // Refresh the displayed task list
}

// Function to clear all tasks
function clearTasks() {
    localStorage.removeItem('tasks'); // Remove all tasks from local storage
    displayTasks(); // Refresh the displayed task list
}

// Function to display all tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the existing tasks

    // Retrieve tasks from local storage or initialize as an empty array
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Create and append list items for each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = task + 
            '<button onclick="deleteTask(' + index + ')">Delete</button>';
        
        taskList.appendChild(li); // Append the new list item to the task list
    });
}

// Load and display tasks when the page is loaded
//document.addEventListener('DOMContentLoaded', displayTasks);



// color and font style 


document.addEventListener('DOMContentLoaded', () => {
    const bgColorInput = document.getElementById('bgColor');
    // Event listener for color input
fontColorInput = document.getElementById('fontColor');
    const fontFamilySelect = document.getElementById('fontFamily');

    const defaultBgColor = '#ffffff'; 
    const defaultFontColor = '#ffffff'; 
    

    // Function to apply saved styles
    function applySavedStyles() {
        const savedBgColor = localStorage.getItem('bgColor') || defaultBgColor;
        const savedFontColor = localStorage.getItem('fontColor') || defaultFontColor;
        const savedFontFamily = localStorage.getItem('fontFamily');

        document.body.style.backgroundColor = savedBgColor;
        document.body.style.color = savedFontColor;
        document.body.style.fontFamily = savedFontFamily;

        bgColorInput.value = savedBgColor;
        fontColorInput.value = savedFontColor;
        fontFamilySelect.value = savedFontFamily;

        if (savedBgColor) {
            document.body.style.backgroundColor = savedBgColor;
            bgColorInput.value = savedBgColor;
        }

        if (savedFontColor) {
            document.body.style.color = savedFontColor;
            fontColorInput.value = savedFontColor;
        }

        if (savedFontFamily) {
            document.body.style.fontFamily = savedFontFamily;
            fontFamilySelect.value = savedFontFamily;
        }
        
    }

    // Apply saved styles when page loads
    applySavedStyles();


    bgColorInput.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
        localStorage.setItem('bgColor', e.target.value);
        
    });

    fontColorInput.addEventListener('input', (e) => {
        document.body.style.color = e.target.value;
        localStorage.setItem('fontColor', e.target.value);
    });

    fontFamilySelect.addEventListener('change', (e) => {
        document.body.style.fontFamily = e.target.value;
        localStorage.setItem('fontFamily', e.target.value);
    });

});



document.addEventListener('DOMContentLoaded', () => {
    // Select the navbar toggle button and nav links
    const toggleButton = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.navbar-brand');

    const navColorInput = document.getElementById('fontColor');

    // Function to change the nav link colors
    function changeNavLinkColor(color) {
        navLinks.forEach(link => {
            link.style.color = color;
        });
    }

    // Function to change the toggle button color
    function changeToggleButtonColor(color) {
        toggleButton.style.backgroundColor = color;
        toggleButton.style.borderColor = color;
    }

    // Set initial colors from input values
    changeNavLinkColor(navColorInput.value);

    // Event listeners for color inputs
    navColorInput.addEventListener('input', (e) => {
        changeNavLinkColor(e.target.value);
    });


});

document.getElementById('saveLocalBtn').addEventListener('click', savelocal);
document.getElementById('saveSessionBtn').addEventListener('click', savesession);
document.getElementById('clearBtn').addEventListener('click', clearName);
