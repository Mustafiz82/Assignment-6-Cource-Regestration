# Project Features

### 1. Shopping Cart:
  - Allow users to add courses to a shopping cart for easy checkout.
### 2. Total Price
  - Can calculate the the total price of all cource
### 3. Remaining credit
  - Can calculate total credit and remaining credit
### 4. Responsive design
  - Ensure the website is mobile-friendly and works well on various devices. 



# State management in my  assignment project.

At first I declared state in the  App component using the useState hook. I made diffrent state variables for the  courses, total price, total credit hours, and remaining credit hours. if a user adds a course to the cart section, The program will check  if it already exists and calculate the new total price and credit hours. If there's enough remaining credit, I update the state  or i display toast messege. The state is then drilled to child components, such as the Cart and individual Cource components, to display in web browser
