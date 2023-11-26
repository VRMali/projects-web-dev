let shop=document.getElementById("shop");




let basket=JSON.parse(localStorage.getItem("data"))||[];

let genereteShop=()=>{
    return ( shop.innerHTML= shopItemData.map((x)=>{ 
        let search=basket.find((y)=>{return y.id===x.id })||[];
        return `<div id="product-id-${x.id}" class="item">
    <img  width="222px"    src=${x.img} alt="">
    <div class="details">
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
        <div class="price_quant">
            <h2>$${x.price}</h2>
            <div class="buttons">
                <i  onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
                <div id="${x.id}" class="quant">${search.item===undefined?0:search.item}</div>
                <i onclick="decrement(${x.id})" class="bi bi-dash"></i>
            </div>
           </div>
        
    </div>
</div>`}).join(""));
}
genereteShop();

let increment=(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>{return x.id===selectedItem.id})
    if(search===undefined)
   {basket.push({id:selectedItem.id,
    item:1}
    )
    update(basket[basket.length-1]);
   }
   else{
    search.item+=1;
    update(search);
   }
  
    localStorage.setItem("data",JSON.stringify(basket));
};


   
let decrement=(id)=>{
       let selectedItem=id;
        let search=basket.find((x)=>{return x.id===selectedItem.id})
        if(search===undefined) return;
        if(search.item===0) return;
        else{
        search.item-=1;
        update(search);
       if(search.item===0)
       {
           basket=basket.filter((y)=>{return y.id!==search.id});
       }
        localStorage.setItem("data",JSON.stringify(basket));
         }
         
       
       // console.log(basket);
        
    };
  

    let update=(x)=>{
        let element=document.getElementById(x.id);
        element.innerHTML=x.item;
        calculate();
    };
    //calculate toatal items and show on navbar basket items
    let calculate=(x)=>{
      let element=document.getElementById("cartquant");
      let amt=0;
      console.log(element);
      basket.forEach((ele)=>{amt+=ele.item;});
      element.innerHTML=amt;
    };
    calculate();