anime({
    targets: '.productimage',
    rotate: '1turn',
    duration: 3500
});
function animateproduct(){
    anime({
        targets: '.productimage',
        scale: 0.9,
        duration: 2000
    });
}
function animateproductover(){
    anime({
        targets: '.productimage',
        scale: 1,
        duration: 2000
    });
}
function opencart(){
    document.getElementById("sectionproducts").style.display = "none";
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal").classList.add("animatemodal");
    setTimeout(()=>{
        document.getElementById("modal").classList.remove("animatemodal")
    }, 1000)
}
function closemodal(){
    document.getElementById("sectionproducts").style.display = "block";
    document.getElementById("modal").classList.add("removemodal");
    setTimeout(()=>{
        document.getElementById("modal").style.display = "none";
        document.getElementById("modal").classList.remove("removemodal")
    }, 500)
}
function addtocart(elemen){
    if(elemen.classList.contains("itemadded")){
        alert("Item already exists in cart.")
    }
    else{
        document.getElementById("cart").innerHTML += `<div class="item"><div class="picside">
        <img src="${elemen.children[0].children[0].currentSrc}" alt="">
    </div>
    <div class="textside">
        <p>${elemen.children[1].childNodes[1].innerText}</p>
        <div class="priceanditems"><p id="price">Price: ${elemen.children[2].childNodes[1].innerText}</p> <input type="text" placeholder="Quantity" onkeyup="pricechange(879, this.value, this)"></div>
        <div class="buttons"><button>Checkout</button><button onclick="removeitem(this.parentElement.parentElement.children[0].innerText, this.parentElement.parentElement.parentElement, this.parentElement.parentElement.parentElement)">Remove</button>
        </div>
    </div>
    </div></div>`
    }
    elemen.classList.add("itemadded")
}
function pricechange(price, quantity, mainelement){
    let pricecomponent = mainelement.previousSibling.previousSibling;
    let prices = parseInt(price)
    parseInt(quantity)
        if(quantity<1){
            document.getElementById("quantity").value = 1
            quantity = 1
        }
        if(isNaN(quantity)){
            quantity = 1;
        }
    pricecomponent.innerText = `Price: $${prices*quantity}`
}
function removeitem(product, mainproduct, foranime){
    let productcontainer = document.getElementById("productcontainer");
    foranime.classList.add("removinganimation");
    setTimeout(()=>{
        for(let i=0;i<productcontainer.children[1].children.length;i++){
            let productname = productcontainer.children[1].children[i].children[0].children[1].innerText.trim();
            if(productname == product){
                productcontainer.children[1].children[i].children[0].classList.remove("itemadded")
            }
        }
        mainproduct.parentElement.removeChild(mainproduct);
        foranime.classList.remove("removinganimation")
    },500)
    // PROJECT FINISHED
}