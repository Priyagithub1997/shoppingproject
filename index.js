
var sidenav = document.querySelector(".sidenavbar")
function shownavbar() {
    sidenav.style.display = "block"

}

function closenavbar() {
    sidenav.style.display = "none"
}

var list=document.getElementById("list")

function addtocart(event)
{
    var li=document.createElement("li")
    console.log(li)
    console.log(event)
     li.innerHTML=event.target.nextElementSibling.textContent+"      "+ event.target.offsetParent.childNodes[1]
     +`<button class="collectionshopnow">Shop Now <i class=" fa-solid fa-arrow-right"></i></button>`+"     " +`<button onclick="deleteItem(event)">Delete</button>`
     console.log(li)
    
    console.log(list)
    list.append(li)
   

}







function deleteItem(event) {
    event.target.parentElement.remove();
}



var searchinput = document.querySelector(".search")
var products = document.querySelector(".products")
var productsbox = products.querySelectorAll("div")


searchinput.addEventListener("keyup", function (event) {
    var enteredtext = event.target.value.toUpperCase()

    for (i = 0; i < productsbox.length; i++) {
        var productslist = productsbox[i].querySelector("p").textContent

        if (productslist.toUpperCase().indexOf(enteredtext) < 0) {
            productsbox[i].style.display = "none"

        }
        else {
            productsbox[i].style.display = "block"
        }
    }
})















