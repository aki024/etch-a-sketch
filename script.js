const fContainer = document.querySelector('.flex-container');



function fillContainer() {
    /*Make rows*/
    for (let i = 0; i < 16; i++) {
        const makeRow = document.createElement('div');
        makeRow.classList.add('flex-row');
        fContainer.appendChild(makeRow);
        /*Make columns */
        for (let j = 0; j < 16; j++) {


            const makeColumn = document.createElement('div');
            makeColumn.classList.add('flex-item');
            makeRow.appendChild(makeColumn);

        }
    }
}
/*starting grid*/
fillContainer();
const squares = document.querySelectorAll('.flex-item');
/*hover function */


squares.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('hover');
    })
})