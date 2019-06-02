# Signzy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Expense tracking
Design and implement a web application that enables a person to enter his expenses, and categorize them amongst predefined categories. Once done, he can get a graphical view of his expenses as per categories and as per day/week/month. Following features are to be implemented.
Option to Add an expense (with details like date, amount etc), and an option to assign a predefined category for the same. (Eg, household, food, taxi, grocery, etc). There should be an option to add another category as well.
On the main (dashboard) page, use pie charts/ bar charts to show his expenditure in different categories.
Also, show the expenses in a table form, with columns containing date, amount and category.
The tables and charts must be clean and interactive. They must contain legends to describe the contents.
No need to implement backend/db. You may use local files/ browser sessions to save the data.


## Setup

### Prerequisites

Install Node.js & npm
Update npm using $ npm install npm -g

1. $ npm install -g @angular/cli
2. $ npm install
3. $ ng serve

### Running Expense tracking
1. Clone this repo or download the .zip here.
2. Navigate to this repo on your terminal and run $ npm install to install all the dependencies.
3. Run Expense tracking on http://localhost:4200/ using $ ng serve or ng serve --port=3000
4. You will land on dashboard having chart view
5. Header is having navigation bar to route different views
6. On hover at table or chart it will give you the details of the amount spend
7. above the chart there is category filter on click of category it will remove from chart
8. Amount and date is required field.


