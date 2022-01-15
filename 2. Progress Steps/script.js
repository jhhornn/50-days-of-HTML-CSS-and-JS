const progess = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');



let currentActive = 1; // Setting the currently active circle to one



//When we click on next
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update()
})

//when we click on prev
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1;
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    //update the width style on css as we click next 
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

circles.forEach(e => {
    e.addEventListener('click', () => {
        const v = Number(e.dataset.value)
        currentActive = v;

        update();
    })
})