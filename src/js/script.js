// const button = document.getElementById('button');
// console.log(button);

// const text = document.querySelector('.text')

// text.innerHTML = 'hello js'
// text.classList.add('text-xl')
// text.classList.add('text-red-500')
// text.classList.remove('text-red-500')
// text.classList.toggle('text-yellow-500')
// console.log(text.classList.contains('dom'));
// text.classList.replace('text-yellow-500', 'text-orange-500')
const template = document.querySelector('#post-template').content
const postsWrap = document.querySelector('.posts');
let posts = []

async function getData(){
  await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  .then(res => posts = res)
}

async function printPosts(){
  await getData()

  posts.forEach(p => {
    // 1 - usul
    const tempClone = template.cloneNode(true)
    tempClone.querySelector('.post-title').textContent = p.title      
    tempClone.querySelector('.post-body').textContent = p.body  
    postsWrap.appendChild(tempClone)

    // 2 - usul
    // const div = document.createElement('div');
    // div.setAttribute("class", "shadow border rounded p-3");
    // const h3 = document.createElement('h3');
    // h3.setAttribute('class', "text-xl line-clamp-2 mb-2 font-bold");
    // h3.textContent = p.title
    // const pEl = document.createElement('p');
    // pEl.textContent = p.body
    // pEl.classList.add("line-clamp-5");
    // div.appendChild(h3); 
    // div.appendChild(pEl)
    // postsWrap.appendChild(div)
  })
}
printPosts()

const modal = document.querySelector('#modal') 
document.querySelector('#showModalBtn').addEventListener('click', () => {
  modal.classList.replace('hidden', 'flex')
})
document.querySelector('#hideModalBtn').addEventListener('click', () => {
  modal.classList.replace('flex', 'hidden')
})

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // const formData = new FormData(e.target);
  // formData.forEach((val, key) => {
  //   console.log(key, val);
    
  // })
  const titleInput = document.querySelector("#title-input");
  const bodyInput = document.querySelector("#body-input")
  const data = {
    [titleInput.name]: titleInput.value,
    [bodyInput.name]: bodyInput.value,
  }
  console.log(data);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: data
  }).then(res => res.json()).then(res => printPosts()).catch(err => console.log(err))
})
// window.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
// })

const checkbox = document.querySelector('#checkbox');
const h1 = document.querySelector('h1')
checkbox.addEventListener('change', (e) => {
  if(e.target.checked){
    h1.classList.remove('hidden')
  }else{
    h1.classList.add('hidden')
  }
  console.log(e.target.dataset.input);
    
})