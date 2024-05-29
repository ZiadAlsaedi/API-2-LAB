let link="https://fakestoreapi.com/products"
async function fetchData(){
let res = await  fetch(link)
let data = await res.json()
let container=document.querySelector('.container')
let list =document.createElement('div')
list.classList.add("card-list")
container.appendChild(list)


data.forEach(element => {
let name =document.createElement("p")
let image =document.createElement('img')
let card =document.createElement('div')
let price =document.createElement("p")
image.classList.add("Image")
card.classList.add("card-item")

image.src=element.image
console.log(image);
 name.innerText=element.title
 price.innerText=element.price
 card.append(name)
 card.append(image)
 card.append(price)
 list.append(card)
});


}

fetchData()


// let url = 'https://fakestoreapi.com/products'; 
// console.log(url);
// let res = await  fetch(url)
// let data = await res.json()
// console.log(data);

// let container=document.querySelector('.container')
// let list =document.createElement('div')
// list.classList.add("card-list")
// container.appendChild(list)


// async function fetchData(){

// resCodes.forEach( (element) => {
// let item =document.createElement('img')
// item.src=element.image
// let card =document.createElement('div')
// card.classList.add("card-item")
// item.classList.add("Image")
// card.append(cat)
// list.appendChild(item)





// });

// }


// fetchData()

