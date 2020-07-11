// array with articles
const articleArr = [
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

// add cards to div.cardlist
document.getElementById("cardlist").innerHTML = `${articleArr.map(card).join('')}` 

// Filter cards 
filter("all")
function filter(val) {
  let x = document.getElementsByClassName("category");
  if (val == "all") val = "";
   // Add and remove "show" class.
    for(let i = 0; i < x.length; i++){
      removeClass(x[i], "show");
      if (x[i].className.indexOf(val) > -1) appendClass(x[i],"show");
    }
}

// Filter cards - Show elements by adding class "show"
function appendClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Filter cards - Hide elements by removing class "show"
function removeClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Filter cards - Add active class to the current control button
let filterButtons = document.getElementById("filterbuttons");
let btnGroup = filterButtons.getElementsByClassName("btn");
for (var i = 0; i < btnGroup.length; i++) {
  btnGroup[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  console.log(current)
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Sorting cards
function sortCards(val){
  let a = Array.from(document.querySelectorAll(val));
  let b = Array.from(a);
  let sorted = b.sort((a, b) => a.dataset.value - b.dataset.value).reverse();
  sorted.forEach(e => {document.getElementById("cardlist").appendChild(e);});
  };

// add category tags for each card
function tag(tag){
  return `${tag.map((tag) =>{
    return `
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${tag}</span>
    `}).join('')}
  `};

// add category tags as class names for each card
  function addClass(tag){
    return `${tag.map((tag) =>{
      return `
      ${tag}
      `}).join('')}
    `};

// create cards from /article 
function card(article) {
  return `
  <div class="category ${article.category ? addClass(article.category) : ''} flex-col mx-auto my-4 max-w-sm rounded overflow-hidden shadow-lg" data-value="${article.value}" data-time="${article.time}" data-cost="${article.cost}">
      <img class="w-full" src="${article.image}" alt="image">
    <div class="px-6 py-4">
      <div class="font-bold text-2xl">${article.title}</div>
      <div class="py-4">${article.category ? tag(article.category) : ''}</div>
        <div class="flex items-center py-2">
          <div class="flex items-center border-solid border-r-2 border-gray-300 pr-4 mr-4">
          <img class="h-3 w-3 mr-2" src="/assets/star.svg" alt="star"><strong>${article.value}</strong></div>
          <div class="flex border-solid border-r-2 border-gray-300 pr-4 mr-4"><strong>${article.time} hours</strong></div>
          <div class="flex"><strong>${article.cost} HUF</strong></div>
        </div>
          <p class=" min-h-full text-gray-700 text-base py-2">${article.lead}</p>
        <div class="py-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See day trip</button>
        </div>
      </div>
    </div>
`}; 
