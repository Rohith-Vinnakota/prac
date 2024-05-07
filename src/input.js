var fooditems = document.getElementById("ul");
var serach = document.getElementById("searchId");
var fooditemscontent = document.getElementById("fooditems");



// default 10 food items loads function 
let url1 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=b';
var dataJson = [];

async function getData() {
    const res = await fetch(url1);
    const data = await res.json();
    let content = data.meals;
    content = content.slice(0, 12);
    fooditems.style.display = 'grid';

    content.map((each) => {
        const { strMeal, strMealThumb, idMeal } = each;
        console.log(strMeal);
        fooditems.innerHTML += fooditems.innerHTML = ` <li class='w-11/12 m-auto  rounded-xl shadow-2xl'>
        <div class='itemcard  rounded-xl overflow-hidden'>
                    <div class='items flex flex-col'>
                        <img src=${strMealThumb} alt=${strMeal} class='h-40 object-cover sm:object-cover' loading='lazy' >
                        <div class='itemcontent flex flex-col my-4 pl-2'>
                            <p class='foodname text-orange-500 line-clamp-1'>${strMeal}</p>
                            <p class='foodprice text-gray-600'><i class="fa-solid fa-indian-rupee-sign"></i>${Math.round(idMeal % 90) + 120.99}</p>
                            <button class=' hover:bg-orange-400 bg-orange-600 text-white w-32 py-1 rounded-lg cursor-pointer self-center' onclick='addcart(${idMeal})' type='button'>Add Cart</button>
                        </div>
                    </div>

                </div>
            </li>`;
    });

}
getData();
// loads a food according to the food name print only 10 food items
async function retreiveData() {
    let content;
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + serach.value;
    console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    content = data.meals;

    if (content !== null) {
        content = content.slice(0, 20);
        console.log(content);
        fooditems.innerHTML = "";
        fooditems.style.display = 'grid';
        content.map((each) => {
            const { strMeal, strMealThumb, idMeal } = each;
            fooditems.innerHTML += fooditems.innerHTML = ` <li class='w-11/12 m-auto  rounded-xl shadow-2xl'>
            <div class='itemcard  rounded-xl overflow-hidden'>
                        <div class='items flex flex-col'>
                            <img src=${strMealThumb} alt=${strMeal} class='h-40 object-cover sm:object-cover' loading='lazy' >
                            <div class='itemcontent flex flex-col my-4 pl-2'>
                                <p class='foodname text-orange-500 line-clamp-1'>${strMeal}</p>
                                <p class='foodprice text-gray-600'><i class="fa-solid fa-indian-rupee-sign"></i>${Math.round(idMeal % 90) + 120.99}</p>
                                <button class=' hover:bg-orange-400 bg-orange-600 text-white w-32 py-1 rounded-lg cursor-pointer self-center' onclick='addcart(${idMeal})' type='button'>Add Cart</button>
                            </div>
                        </div>

                    </div>
                </li>`;
        });

    }

}

//  customer select the food item that item show in cart page  
function addcart1() {
    let cartItems = document.getElementById('cartitems');
    cartItems.classList.toggle('cartitems1');
}
var ulCard = document.getElementById("cardorder");
var object = [];
async function addcart(id) {
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
    const res = await fetch(url);
    const data = await res.json();
    let content = data.meals;
    object.push(content);
    console.log(object);
    content.map((each) => {
        const { strMeal, strMealThumb, idMeal } = each;
        ulCard.innerHTML += ulCard.innerHTML = `
        <li class=" px-2 shadow-2xl rounded-xl">
                    <div class="list h-full flex flex-row justify-between items-center py-2">
                        <div class="item flex flex-row items-center gap-2">
                            <img src=${strMealThumb} alt=${strMeal} class="w-[50px] rounded-full object-contain">
                            <p class="text-gray-500 font-semibold">${strMeal}</p>
                        </div>
                        <p class="text-gray-500"><i class="fa-solid fa-indian-rupee-sign"></i>${Math.round(idMeal % 90) + 120.99}</p>
                        <button class="bg-orange-400 w-16 text-white rounded-lg h-9 cursor-pointer">Add</button>
                        </div>
                        </li>
                        
                        `;
    })

}
