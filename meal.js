const loadMeal=(search)=>{
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals));
}

const displayMeal=(data)=>{
const mealContainer=document.getElementById('meal-container');
mealContainer.innerHTML=``;
data.forEach(meal=>{
 const mealDIv=document.createElement('div');
 mealDIv.classList.add('col');
 
 mealDIv.innerHTML=`
 <div class="col">
 <div class="card">
   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
     <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
   </div>
 </div>
</div>
 `;
 mealContainer.appendChild(mealDIv);
})
}


const searchFood=()=>{
const searchField=document.getElementById('search-field');
const searchText=searchField.value;
loadMeal(searchText);
searchField.value='';
}
// loadMeal('');