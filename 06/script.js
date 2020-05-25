//
const $item6 = document.querySelector('.item-6');
const $i = document.querySelector('.i');
const itemSpeed = -100
const itemS = 2 
let itemY = 0




$item6.addEventListener('click', () => {
const Y = getComputedStyle($i).top
// "345px"
const top_2 = parseInt(Y)
const new_ = (top_2 + itemSpeed) + 'px'
$i.style.top = new_

setTimeout(() => {
    const new_2 = Y;
}, 500);

})

//const up = () => {
//    itemY += itemSpeed
//    if (itemY > itemA) {
//      itemY = 0;
//    }
//  };