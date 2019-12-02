let xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.json-generator.com/api/json/get/bUAOvxMwzm?indent=2");
xhr.send();
// var a = xhr.response;


// var goods = xhr.response;
console.log(xhr.response);

// var func = (productsPerPage) => {

//     let out = '';
//     for (let i = 0; i < productsPerPage; i++) {
//         out +=
//             `<div class="goods-card">
//                 <img onmouseover="mOver(this)" onmouseout="mOut(this)" src="${products[i].picture}"> 
//                <h1>${products[i].name}</h1>
//                 <p>${products[i].about}</p>
//                 <p>${products[i].year}</p>
//                 <p>${products[i].category}</p>
//                 <h5>${products[i].price} $</h5>
//                 <button class="add-to-cart" data-art=${[products[i].index]} onclick="addToCart(this)">Buy</button>
//                 </div>`

//     }
//     document.getElementById('data').innerHTML = out;

// }