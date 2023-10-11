/*let alllis = document.querySelectorAll("ul li");

alllis.forEach(function(elments){
elments.onclick=function(){
alllis.forEach(function(elments){
elments.classList.remove("active")
    })
this.classList.add("active")    }
})*/

let lis = document.querySelectorAll("ul li")


lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})

/*let img= document.querySelectorAll("ul li")


lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})*/