let count = 0
console.log(count)
function incement(){
    count = count+1
    document.getElementById("count-el").innerText=count
}

let saveEl = document.getElementById("previours-data")

function save(){
    let countstr = count + " - "
    console.log(countstr)
    saveEl.textContent += countstr
    count = 0
    document.getElementById("count-el").textContent=count

}



