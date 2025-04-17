const btns = document.querySelectorAll('.btn') 
const dom_items = document.querySelectorAll('.dom_item') 
btns.forEach(btn =>{
    btn.addEventListener('click', ()=>{ 
        const color = btn.dataset.color

        dom_items.forEach(dom_item =>{
            dom_item.style.backgroundColor = color
        })
       })   
    })

// console.log(dom_items);
// const computedStyle = getComputedStyle(btn);
        // const color = computedStyle.backgroundColor;

        // if (btn.textContent === 'x') {
        //     dom_items.forEach(item => item.style.backgroundColor = '');
        // } else {
        //     dom_items.forEach(item => item.style.backgroundColor = color);
        // }