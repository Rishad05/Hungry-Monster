 const searchBtn = document.getElementById('search-btn');

 searchBtn.addEventListener('click', () => {
     const mealInput = document.getElementById('meal-name').value;

     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
         .then(res => res.json())
         .then(data => displayMeal(data));
 });
 const displayMeal = data => {
     const mealsDiv = document.getElementById('Meals')
     let mealName = "";
     if (data.meals) {
         data.meals.forEach(meal => {
             mealName = mealName + `<div onclick="displayMealDetails('${meal.idMeal}')" class="meal"><img src = "${meal.strMealThumb}" alt = "meal">
                     <h3>${meal.strMeal}</h3></div>`;
         });
     } else {
         mealName = "!!There is no meal!!";
     }
     mealsDiv.innerHTML = mealName;
 }
 const displayMealDetails = mealInput => {
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealInput}`)
         .then(res => res.json())
         .then(data => {
             renderIngredient(data.meals[0]);
         })
 }
 const renderIngredient = meal => {
     const ingredientList = document.getElementById("ingredientList");
     ingredientList.innerHTML = `<div class="card"><img src="${meal.strMealThumb}">
<h1> ${meal.strMeal}</h1>
<h3>ingredients</h3>
<p>${meal.strMeasure1}${meal.strIngredient1}</p>
<p>${meal.strMeasure2}${meal.strIngredient2}</p>
<p>${meal.strMeasure3}${meal.strIngredient3}</p>
<p>${meal.strMeasure4}${meal.strIngredient4}</p>
<p>${meal.strMeasure5}${meal.strIngredient5}</p>
<p>${meal.strMeasure7}${meal.strIngredient6}</p>
<p>${meal.strMeasure6}${meal.strIngredient7}</p>
<p>${meal.strMeasure7}${meal.strIngredient8}</p> </div>`;
 }