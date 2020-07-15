// array with day trips
const trips = [
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 1",
  value: 0.9,
  time: 5.2,
  cost: 1000,
  category: ["beach", "foodie"],
  lead: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 2",
  value: 2.5,
  time: 8.0,
  cost: 8000,
  category: ["hiking", "dogs"],
  lead: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 3",
  value: 3.4,
  time: 6.5,
  cost: 500,
  category: ["family", "foodie", "dogs" ],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 4",
  value: 4.5,
  time: 0.5,
  cost: 7000,
  category: ["beach", "foodie", "family"],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 5",
  value: 4.9,
  time: 1.0,
  cost: 1500,
  category: ["foodie"],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 6",
  value: 3.8,
  time: 1.1,
  cost: 400,
  category: ["hiking", "family"],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 7",
  value: 1.4,
  time: 9.5,
  cost: 6000,
  category: ["beach", "foodie"],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 8",
  value: 4.2,
  time: 2.3,
  cost: 900,
  category: ["beach", "foodie"],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
  {
  image: "/assets/img-beach.jpg",
  title: "Place number 9",
  value: 1.4,
  time: 4.5,
  cost: 4500,
  category: ["beach", "family"],
  lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
  text: "some body text here"
  },
];

// ------- FITLER CARDS ------ //

let filteredArray = [];
// loops through trips array to see if selectedCategory exist in each object
function filterTripsByCategory(category){
  if(category === 'all') {
    return trips;
  }
  for (let i = 0; i < trips.length; i++) {
    if(trips[i].category.indexOf(category) > -1) {
      filteredArray.push(trips[i]);
    };
  }
  return filteredArray;
};

// remove current cards, filter by category, insert result 
function filterSelectedCategory(e){
  console.log(e)
  let selectedCategory = e.target.dataset.value; // selected category
  document.getElementById("cardlist").innerHTML = []; 
  filteredArray = [];
  filterTripsByCategory(selectedCategory) // filter trips 
    if(selectedCategory === 'all') { 
      checkSorting(trips) // insert default trips array
    } else {
        checkSorting(filteredArray)// insert new filtered array
    }
      
};

// add and remove active class on btn click
let filterGroup = document.getElementById("filterSelect");
let filterButtons = filterGroup.getElementsByClassName("btn");
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// eventlistener filter buttons
let filterSelect = document.getElementById('filterSelect');
console.log(filterSelect)
filterSelect.addEventListener('click', filterSelectedCategory);

// ------ SORT CARDS ---- // 

// check current sorting 
function checkSorting(arr){
  let x = document.getElementById('sortSelect'); 
  let sorter = x.value; // current value of dropdown

  switch(sorter){
    case 'value':
      arr.sort((a, b) => a.value - b.value).reverse();
      return document.getElementById("cardlist").innerHTML = `${arr.map(createCards).join('')}` 
      break;
    case 'time':
      arr.sort((a, b) => a.time - b.time);
      return document.getElementById("cardlist").innerHTML = `${arr.map(createCards).join('')}` 
      break;
    case 'cost':
      arr.sort((a, b) => a.cost - b.cost);
      return document.getElementById("cardlist").innerHTML = `${arr.map(createCards).join('')}` 
      break;
    default:
     console.log('checkSorting default');
  }
}


// create sorting 
function createSorting(){
let sorter = this.value; //selected sorting
let arr = Array.from(document.getElementById('cardlist').children);
switch(sorter){
  case 'value':
    arr.sort((a, b) => a.dataset.value - b.dataset.value).reverse();
    for(let i = 0; i < arr.length; i++){
      let parent = arr[i].parentNode;
      let removeChild = parent.removeChild(arr[i]);
      parent.appendChild(removeChild);
    }
    break;
  case 'time':
    arr.sort((a, b) => a.dataset.time - b.dataset.time);
    for(let i = 0; i < arr.length; i++){
      let parent = arr[i].parentNode;
      let removeChild = parent.removeChild(arr[i]);
      parent.appendChild(removeChild);
    }
    break;
  case 'cost':
    arr.sort((a, b) => a.dataset.cost - b.dataset.cost);
    for(let i = 0; i < arr.length; i++){
      let parent = arr[i].parentNode;
      let removeChild = parent.removeChild(arr[i]);
      parent.appendChild(removeChild);
    }
    break;
  default:
   console.log('createSorting default');
}
}

// sorting dropdown onchange event
document.getElementById('sortSelect').onchange = createSorting;


// ----- ADD CARDS ------ // 

// default sort descending values (most popular day trips)
trips.sort((a, b) => a.value - b.value).reverse();
document.getElementById("cardlist").innerHTML = `${trips.map(createCards).join('')}` 

// add category pills 
function tag(tag){
  return `${tag.map((tag) =>{
    return `
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${tag}</span>
    `}).join('')}
  `};

// add category as class name 
  function addClass(tag){
    return `${tag.map((tag) =>{
      return `
      ${tag}
      `}).join('')}
    `};

// create cards
function createCards(trips) {
  return `
  <div class="category ${trips.category ? addClass(trips.category) : ''} flex-col mx-auto my-4 max-w-sm rounded overflow-hidden shadow-lg" data-value="${trips.value}" data-time="${trips.time}" data-cost="${trips.cost}">
      <img class="w-full" src="${trips.image}" alt="image">
    <div class="px-6 py-4">
      <div class="font-bold text-2xl">${trips.title}</div>
      <div class="py-4">${trips.category ? tag(trips.category) : ''}</div>
        <div class="flex items-center py-2">
          <div class="flex items-center border-solid border-r-2 border-gray-300 pr-4 mr-4">
          <img class="h-3 w-3 mr-2" src="/assets/star.svg" alt="star"><strong>${trips.value}</strong></div>
          <div class="flex border-solid border-r-2 border-gray-300 pr-4 mr-4"><strong>${trips.time} hours</strong></div>
          <div class="flex"><strong>${trips.cost} HUF</strong></div>
        </div>
          <p class=" min-h-full text-gray-700 text-base py-2">${trips.lead}</p>
        <div class="py-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See day trip</button>
        </div>
      </div>
    </div>
`}; 
