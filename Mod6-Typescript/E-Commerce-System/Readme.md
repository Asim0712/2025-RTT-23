#  SBA 6- E-Commerce System

This is a solution to the Module 6 SBA project. 

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
In this assessment, we apply the skills developed throughout the TypeScript and Advanced JavaScript module to build a functional, real-world application. This project will is about understanding of TypeScript features, object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction. 

We created an E-commerce Product Management System using TypeScript. 

# The challenge

## Part 1: Project Setup
### Create a new directory for the project and initialize it with npm:
- mkdir e-commerce-system
- cd e-commerce-system
- npm init -y

### Install TypeScript and other necessary dependencies:
- npm install typescript @types/node --save-dev

### Create a tsconfig.json file to configure TypeScript:
- npx tsc --init

  

## Organizing Folder Structure:
e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json

# Part 2: API Research
## API Research:
- Research and analyze the [Dummy JSON Products API .](https://dummyjson.com/docs/products)
- Implementing features that interact with this API.
## Project Planning:
- Based on your API research, plan the structure of your project. You will need to create API requests, handle errors, and display product information.
- Before you begin coding, create a project plan and outline the steps you’ll take to implement the API interactions and display product data.
- Ensure you have thoroughly read through the requirements for the project below before you begin planning it.

# Part 3: Implementation

## Develop Product Class:
- Product Base Class (Product.ts):
- Define a Product class that includes the appropriate properties based on data provided in the API response.
- Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.

## Implement Utilities:
- Discount Calculator Module (discountCalculator.ts):
- Create a calculateDiscount() function to handle discount calculations for products.
- This function should return the dollar amount that a product is discounted by. For example, if a product costs $100 and has a 10% discount, the function should return $10.
- Tax Calculator Module (taxCalculator.ts):
- Create a calculateTax() function to handle tax calculations for products.
- This function should return the dollar amount that a product is taxed at. For example, if a product costs 100andistaxedat1010.
- Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.

## Handle Asynchronous Operations:
- API Service (apiService.ts):
- Create API requests using async/await and Promises.
- Implement functions to fetch product data and handle errors using try/catch

## Error Handling Utility:
- Error Handler Module (errorHandler.ts):
- Implement a custom error class and functions to handle different types of errors gracefully.

## Create the Main Application:
### Main Entry File (index.ts):
- Import the product classes, tax calculator, and API service.
- Create instances of Product by fetching product data from the API.
- Use asynchronous functions to fetch product data and display it.
- Demonstrate error handling and OOP principles in action.

# Part 4: Testing and Finalizing
- Complie code npx tsc
- Run Your Application node dist/index.js


### Screenshot

![alt text ](E-Commerce-System\src\E-commerce-1.png) 


### Links

- Solution URL: [Add solution URL here](https://github.com/Asim0712/SBA-E-Commerce-system-Mod6)

## My process

### Built in Vs code with Type script
-  Project Setup
- set the dist and root folders in tsconfig.json file. 
- "rootDir": "./src",
- "outDir": "./dist",
- Once we have package json and tsconfig.json created we move towards source file with all folders init.
- Fetch from API to acces the data using async function
- implementing all functions and exporting function products.
- wroking in utils folder calculating tax and price of products
- In Main.js importing all prooduct and export products.



## Author Asim Daud Khan


## Acknowledgments

I really loved working on this project as it helped me to learn new things and Drive me through deep learning and exploring. I would like to Thank to our Mentors and peers who assisted during our Labs and course.


