
let label=document.getElementById("label");
let shoppingCart =document.getElementById("shopping-cart");


let basket=JSON.parse(localStorage.getItem("data"))||[];
let calculate=(x)=>{
    let element=document.getElementById("cartquant");
    let amt=0;
    console.log(element);
    basket.forEach((ele)=>{amt+=ele.item;});
    element.innerHTML=amt;
  };
  calculate();
  
  let generate=()=>{
if(basket.length!==0)
{ //let a=x;
    console.log(basket);

 return shoppingCart.innerHTML=basket.map((x)=>{
   let obj=shopItemData.find((y)=>{return y.id===x.id });
   if(obj!==undefined)
   {  let totalPrice=obj.price*x.item;
    return ` <div class="cart-item">
    <img width="200px" src="${obj.img}" alt="">
    <h3>${obj.name}</h2>
    <div class="cart-total">
     <h4>total</h2>
        <h4>$${totalPrice}</h4>

    </div>
    <button >romove</button>
</div>`
   }
 }
 );
}
else{
    shoppingCart.innerHTML=``;
    label.innerHTML=`<h2>cart is Empty</h2>
    <a href="index.html">
    <button class='Homebtn'>back to home</button>
    </a>`;
}


  }
  generate();