'use strict'

//all the side notes are for my own refence 

//Getting the elemnts 

let firstProduct = document.getElementById('leftp');
let secondProduct = document.getElementById('rightp');
let thirdProduct = document.getElementById('middlep');
let showResult= document.getElementById('show');

//creating the variables needed

let counter= 0;
let maxAttempt=25;
let allProducts= [];
let productRightInd;
let productMiddleInd;
let productLeftInd;




//creating contsructor function

function Product(productName,productOrigin){
    this.productName=productName;
    this.productOrigin=productOrigin;
    this.voting=0;
    this.showing=0;
    allProducts.push(this);
}


//creating objects/instances for products

new Product('bag','bus-mall/bag.jpg');
new Product('banana','bus-mall/banana.jpg');
new Product('bathroom','bus-mall/bathroom.jpg');
new Product('boots','bus-mall/boots.jpg');
new Product('breakfast','bus-mall/breakfast.jpg');
new Product('bubble','bus-mall/bubblegum.jpg');
new Product('chair','bus-mall/chair.jpg');
new Product('cthulhu','bus-mall/cthulhu.jpg');
new Product('dog','bus-mall/dog-duck.jpg');
new Product('dragon','bus-mall/dragon.jpg');
new Product('pen','bus-mall/pen.jpg');
new Product('pet sweep','bus-mall/pet-sweep.jpg');
new Product('scissors','bus-mall/scissors.jpg');
new Product('shark','bus-mall/shark.jpg');
new Product('sweep','bus-mall/sweep.png');
new Product('tauntaun','bus-mall/tauntaun.jpg');
new Product('unicorn','bus-mall/unicorn.jpg');
new Product('usb','bus-mall/usb.gif');
new Product('water','bus-mall/water-can.jpg');
new Product('wine glass','bus-mall/wine-glass.jpg');

console.log(allProducts);

//creating random products index

function showingRandomProductNum () {
    return Math.floor(Math.random() * allProducts.length)
    }

showingRandomProductNum();
console.log(showingRandomProductNum());

//showing random products

function showingProduct (){
    productRightInd= showingRandomProductNum();
    productMiddleInd= showingRandomProductNum();
    productLeftInd= showingRandomProductNum();
    
//making sure that th index generated not the same for the three products
while(productRightInd===productMiddleInd || productMiddleInd===productLeftInd || productRightInd === productLeftInd){
    productMiddleInd= showingRandomProductNum();
    productLeftInd= showingRandomProductNum();
}
    firstProduct.src = allProducts[productRightInd].productOrigin;
    allProducts[productRightInd].showing ++; //to count that this image is showen
    secondProduct.src = allProducts[productLeftInd].productOrigin;
    allProducts[productLeftInd].showing ++;
    thirdProduct.src = allProducts[productMiddleInd].productOrigin;
    allProducts[productMiddleInd].showing ++;
    

}

showingProduct();



//attaching products elements to advertlistner
//i can also only add the container of this images to the eventlistener but yes that why I didn't use the container as if we click inside the box container even if we didn't click the images themselves, need to add count-- and alert in last else in the checking the index above

firstProduct.addEventListener('click',startVoting);
secondProduct.addEventListener('click',startVoting);
thirdProduct.addEventListener('click',startVoting);




//building startvoting function

function startVoting (event){
    counter++; //to start counting the clicks

    if(counter <= maxAttempt){// to make sure the maximum attempts are not exceeded


    if(event.target.id ==='rightp'){ //to know which product has been clicked
        allProducts[productRightInd].voting++; //to increase the vote of the clicked product
        
    }
        else if (event.target.id ==='leftp') {
        allProducts[productLeftInd].voting++;
        
        } else if (event.target.id ==='middlep'){

        allProducts[productMiddleInd].voting++;
       
            
        }
     showingProduct(); //to show the products after clicking

    }
    
    else {  
       
       
        showResult.addEventListener('click',showList); //making showlist button
        firstProduct.removeEventListener('click', startVoting);
        secondProduct.removeEventListener('click',startVoting);
        thirdProduct.removeEventListener('click',startVoting);
        
         
        }
        
    }
    

    // making showlist function
    
    
    
    function showList(){
       let unorder= document.getElementById('list');
    for(let i=0; i< allProducts.length;i++) {
            let listItem = document.createElement('li');
            unorder.appendChild(listItem);
            listItem.textContent = `Name of the product : ${allProducts[i].productName}, and Number of times being showen : ${allProducts[i].showing}
          and Number of votes: ${allProducts[i].voting}`   
              }
              showResult.removeEventListener('click',showList);// in order to be called once and view the results once and then stop
           }
    
           
    

    
       
   


