# Ecommerceapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Installation Note:
Please use node version 14 + and new angular version for better and error free performance.

For Locally running the project:
-->Clone the repo --> head to root dir--> set the node version and angular cli--> run `npm install` or `npm i`

-->After Successfully installing the required packages you can now run the project using `ng serve` 
## Features Covered
1. Created an Angular / React App
2. Created Routing for home, cart, product detail, my profile page
3. Basic Home Page
    i. All Categories
        a. Integrated Categories API to get All available categories list
        b. Show Categories
        c. On Category item Click Call API 2 to get Products for selecte Category
        d. on click of product, go to the product detail page
4. Product Details
    i. Integrated API 4 to get Product by Id and show in details screen with Category name
    ii. click on add to cart button will add count in header cart icon.
5. Search List
    i. When user type word in the search box, display all possible product list related to search word in the list

## Screenshot
1. Electronics catrgories clicked

![alt text](https://github.com/khushpanchariya21/ecommerceapp/blob/master/src/assets/screenshots/elect.png)

2. Product card Hover on click Product details
![alt text](https://github.com/khushpanchariya21/ecommerceapp/blob/master/src/assets/screenshots/product_hover_click_details.png)

3. Product details page
![alt text](https://github.com/khushpanchariya21/ecommerceapp/blob/master/src/assets/screenshots/productdetails.png)

4. Product details page add product to cart
![alt text](https://github.com/khushpanchariya21/ecommerceapp/blob/master/src/assets/screenshots/productdetailcart.png)

5. Search Product 
![alt text](https://github.com/khushpanchariya21/ecommerceapp/blob/master/src/assets/screenshots/searchbarhover.png)
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
