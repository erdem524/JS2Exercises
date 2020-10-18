// document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");


// Exercise 1: The book list


const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2625/9780262525671.jpg"
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2419/9780241956052.jpg"
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1359/9780135957059.jpg'
  }
];

// fist solution
const h1 = document.createElement("h1")
const ul = document.createElement("ul")
 document.body.appendChild(h1)
 document.body.appendChild(ul)
 h1.innerText = "Book list"
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  console.log(book.title)
  
  const li = document.createElement("li")
  const p = document.createElement("p")
  const img = document.createElement("img")
 
  ul.appendChild(li)
  li.appendChild(p)
  li.appendChild(img).src = book.img
  p.innerHTML = book.title + " - " + book.author
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  li.style.width ="25%"
  img.style.width ="85px"
li.style.border = "1px solid black"

li.style.listStyle = "none"
li.style.padding = "16px"
li.style.margin = "16px"
p.style.fontSize = "10px"
if (book.alreadyRead) {
  li.style.backgroundColor = "red"
}else{
  li.style.backgroundColor = "green"
}
  
}


// second solution
function test(obj){
for (const item in obj) {
  
    const book = obj[item];
    console.log(book.title)
    
    const li = document.createElement("li")
    const p = document.createElement("p")
    const img = document.createElement("img")
 
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(img).src = book.img
    p.innerHTML = book.title + " - " + book.author
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";
    li.style.width ="25%"
   img.style.width ="85px"
   li.style.border = "1px solid black"

li.style.listStyle = "none"
li.style.padding = "16px"
li.style.margin = "16px"
p.style.fontSize = "10px"
if (book.alreadyRead) {
  li.style.backgroundColor = "red"
}else{
  li.style.backgroundColor = "green"
}
  }
  
}



  


test(books);