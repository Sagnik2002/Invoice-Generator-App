A simple web app, forked from allows creating invoices using a form. It allows you to create and save invoices, view and/or edit them later at your will.

## Requirements

The requirements stated are as follows:

1. Clone the existing GitHub repository and set up the project locally.
2. Integrate Redux into the application and create a Redux store.
3. Create Redux actions, action types, and reducers to manage the invoice state (add, edit, view,
and delete invoices).
4. Implement a component to display a list of invoices.
5. Make list of invoices as first screen and move the create to a new create invoice button
6. In the invoice list, add buttons or options for view, edit, and delete operations.
7. Ensure proper state management throughout the application by connecting components to the
Redux store.
8. Make sure the application handles errors gracefully.
9. Write clean, well-documented, and modular code.
10. Implement copy to a new invoice from existing invoice functionality

## Tasks Completed

All of the stated requirements are done. Summarizing them

* A UI consistent with the existing application theme
* A home screen with a list of all active invoices
* Ability to view, edit & delete an invoice
* Option to copy to a new invoice from an existing one
* A button to add a new invoice that redirects to the original invoice editor form

## How To Use

* Home page: Initially, there will be a create invoice button, which will take you to the original create invoice page. Once you add an invoice, you'll see it in a list to the left of the home page. There will be action buttons to the right of each invoice which will do exactly they say. You can click on the invoice number/bill from name area to open and review the invoice.
* Invoice editor: This is the screen which will allow you to both add a new invoice and edit existing ones. This behaves exactly similar to the original application. The only differences are that it will show a **Save Invoice** button in the pop up modal when you review an invoice & that it won't allow you to choose an invoice number that's already chosen.

### Instructions

Follow the steps below to build and run the application

1. Clone this repository
2. Change your working directory
3. Install all dependencies
4. Run the application
