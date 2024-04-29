let items = document.querySelectorAll('.main9_div_item')
items.forEach(item =>{
    item.innerHTML = 0
    let endValue = item.getAttribute('data-num')
    let increment = endValue / 20
    function changeNumber(){
        let value = +item.innerHTML
        if(value < endValue){
            value += Math.round(increment)
            item.innerHTML = value
            setTimeout(changeNumber, 100)
        }else{
            item.innerHTML = endValue
        }

    }
    changeNumber()
})