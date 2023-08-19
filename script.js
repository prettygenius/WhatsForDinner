
const categoryButtons = document.querySelectorAll('.category-button');
const mealContainer = document.getElementById('mealContainer');

categoryButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const category = button.dataset.category;
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();

      mealContainer.innerHTML = ''; // Clear previous content

      data.meals.forEach((meal) => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');

        const mealImage = document.createElement('img');
        mealImage.src = meal.strMealThumb;
        mealImage.alt = meal.strMeal;
        
        const mealName = document.createElement('h3');
        mealName.textContent = meal.strMeal;


        mealCard.appendChild(mealImage);
        mealCard.appendChild(mealName);
        

        mealContainer.appendChild(mealCard);
      });
    } catch (error) {
      console.error('Error fetching and displaying meals:', error);
    }
  });
});



