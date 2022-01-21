const fContainer = document.querySelector('.flex-container');

function fillContainer() {
    for (let i = 0; i < 16; i++) {
        const makeRow = document.createElement('div');
        makeRow.classList.add('flex-row');
        fContainer.appendChild(makeRow);
        for (let j = 0; j < 16; j++) {


            const makeColumn = document.createElement('div');
            makeColumn.classList.add('flex-item');
            makeRow.appendChild(makeColumn);

        }
    }
}
fillContainer();