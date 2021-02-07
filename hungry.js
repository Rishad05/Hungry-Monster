 const searchBtn = document.getElementById('search-btn');

 searchBtn.addEventListener('click', () => {
     const mealInput = document.getElementById('meal-name').value.trim();

     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
         .then(res => res.json())
         .then(data => displayMeal(data));
 });
 const displayMeal = data => {
     const mealsDiv = document.getElementById('Meals')
     let mealName = "";
     if (data.meals) {
         data.meals.forEach(meal => {
             mealName = mealName + `<div class="meal"><img src = "${meal.strMealThumb}" alt = "meal">
                     <h3>${meal.strMeal}</h3></div>`;
         });
     } else {
         mealName = "!!There is no meal!!";
     }
     mealsDiv.innerHTML = mealName;
 }