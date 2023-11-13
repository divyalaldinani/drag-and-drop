const list = document.querySelectorAll('.list-item');
const leftContainer = document.querySelector('.left');
const rightContainer = document.querySelector('.right')

let selected = null;

list.forEach( item => {
    item.addEventListener("dragstart", (e) => {
        selected = e.target;
    });

    
    leftContainer.addEventListener("drag", (e) => {
        e.preventDefault();
    });

    rightContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    rightContainer.addEventListener("drop", (e) => {
        e.preventDefault();
        const Array1 = Array.from(leftContainer);
        if(Array1.includes(selected)) {
            leftContainer.removeChild(selected);
            selected.classList.remove('left');
        }
        selected.classList.add('right');
        rightContainer.appendChild(selected);

        selected = null;
    });

    rightContainer.addEventListener("drag", (e) => {
        e.preventDefault();
    });

    leftContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    
    leftContainer.addEventListener("drop", (e) => {
        e.preventDefault();
        const Array2 = Array.from(rightContainer)
        if(Array2.includes(selected)) {
            selected.classList.remove('right');
            rightContainer.removeChild(selected);
        }
        selected.classList.add('left');
        leftContainer.appendChild(selected);
        selected = null;
        
    });
});