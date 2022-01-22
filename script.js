const fContainer = document.querySelector('.flex-container');
const restartButton = document.querySelector('#restart');




/*Make a grid default 16x16 */
function fillContainer(n = 16) {

    /*Make rows*/
    for (let i = 0; i < n; i++) {
        const makeRow = document.createElement('div');
        makeRow.classList.add('flex-row');
        fContainer.appendChild(makeRow);

        /*Make columns */
        for (let j = 0; j < n; j++) {


            const makeColumn = document.createElement('div');
            makeColumn.classList.add('flex-item');
            makeRow.appendChild(makeColumn);


        }
    }
    restartHover();

}
/*starting grid*/
fillContainer();

/*hover function */
function hoverTry() {
    /*Selecting all the tiny squares */
    const squares = document.querySelectorAll('.flex-item');
    squares.forEach((div) => {
        div.addEventListener('mouseover', () => {
            const rowSelector = document.querySelectorAll('.flex-row');
            div.classList.add('hover');
        })
    })
}

function restartHover() {
    /*Selecting all the tiny squares */
    const squares = document.querySelectorAll('.flex-item');
    squares.forEach((div => {
        div.addEventListener('mouseover', hoverTry);
    }));
}


/*Restart button functionality */
restartButton.addEventListener('click', restartGrid);


/*Removes the current grid */
function clearGrid() {
    fContainer.innerHTML = '';
}


/*Clearing the grid and prompting for a new size */
function restartGrid() {
    let gridSize = prompt('Enter grid size');
    /*Grid input check if value is good */
    while (isNaN(gridSize, ) || (gridSize > 100) || (gridSize == 0)) {
        gridSize = prompt('Please enter a number between 1-100');
    }

    /*filling the grid with new size */
    clearGrid(fContainer);
    fillContainer(gridSize);
}