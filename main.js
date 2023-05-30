function game(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    cells();
    
}

function cells(){
    
    for(let i=0; i<100;i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = i+1;
    
        square.addEventListener('click',function(){
            this.classList.add('click')
            console.log(this.innerText)
        })
        grid.append(square);
    }
}
const button = document.getElementById('play');
console.log(button)

button.addEventListener('click', function(){
    game();
})
