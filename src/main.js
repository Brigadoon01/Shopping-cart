let shop = document.getElementById('shop');



let basket = JSON.parse(localStorage.getItem('data')) || [];
let items = []
let availableItems = []

let generateShop = (items) => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} = x;
        items = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img width="220" height="120" class="image" src="${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}.</p>
             <div class="price-quantity">
                <h2>$${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg">-</i>
                    <div id=${id} class="quantity"
                    >${items.item === undefined? 0: items.item}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg">+</i>
                </div>
            </div>
    </div>
    </div>
    `;
    }).join(''));
};
generateShop(items);

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }else{
        search.item += 1;
    }

    //console.log(basket);
    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0)
    //console.log(basket)
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
    let search = basket.find((x) => x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () =>{
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,  y) => x + y, 0)
}

calculation();

function getTheValue(){
     return (shop.innerHTML = shopItemsData.map((x)=>{
         let {id, name, price, desc, img} = x;
         let search = basket.find((x) => x.id === id) || [];

    var inp = document.getElementById("search-input")
    let searchText = inp.value;

    if(searchText === x.name){
        return generateShop()
    }


    // if (inp.value== '') {  // if it is equal to first id 
    //     document.getElementById('blackHoody').style.display = "block";  
    //     //setting display to block
    // }
    // else if (inp.value == 'blacHoody') {
    //     console.log("in second")
    //     document.getElementById('blacHoody').style.display = "block";
    // }
    // else if (inp.value == 'blackTexudd') {
    //     console.log("in third")
    //     document.getElementById('blackTexudo').style.display = "block";
    // }
    // else {
    //     document.getElementById('blackHoody').style.display = "none";
    //     document.getElementById('blacHoody').style.display = "none";
    //     document.getElementById('blackTexudo').style.display = "none";
    // }
}))
}
