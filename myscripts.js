function grid () {
    number = prompt()
    if (number > 100 || number < 1) {
        alert("The number should be between 1 and 100");
    } else {
    return number ** 2
    };
}


const addButton = document.getElementById('left-button')

const container = document.getElementById('screen_layout')

addButton.addEventListener("click",createGrid);

function createGrid () {
    const number = grid()
    for (let i = 0; i < number; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    };
}

for (let i = 0; i < (16**2); i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
};

const square = document.querySelectorAll('.square');

square.forEach(square => {
    square.addEventListener('mouseover',etching)
});

function etching() {
    this.style.backgroundColor = '#141E46';
}

