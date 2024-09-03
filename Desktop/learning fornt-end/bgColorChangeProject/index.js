let colors = document.querySelectorAll("li")

colors.forEach(function(clr) {
    clr.addEventListener('click',function(e){
        // console.log(e.target.id,"aslkdhfkajshdfklajh")
        if (e.target.id === "Blue"){
            // console.log(e.target.id,"aslkdhfkajshdfklajh")
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "Yellow"){
            // console.log(e.target.id,"aslkdhfkajshdfklajh")
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "Green"){
            // console.log(e.target.id,"aslkdhfkajshdfklajh")
            document.body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "Red"){
            // console.log(e.target.id,"aslkdhfkajshdfklajh")
            document.body.style.backgroundColor = e.target.id;
        }
    });
});
