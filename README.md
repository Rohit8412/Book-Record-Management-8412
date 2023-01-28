# Book-Record-Management-8412

This is a book record management API Backend for the management of records and books

# Routes and End Endpoints

## /users

POST: Create a new user
GET: Get all Lists of users

## /users/{id} ------> /user/1 for an example

GET: Get a user by id
PUT: Update a user by id
DELETE: Delete a user by id (check if he/she still has an issued book)(is there any fine to be paid)

## /users/subscription-details/{id}

GET: Get user subscription details

1. Date of subscription
2. Valid till
3. Fine if any

## /books

GET: Get all books
POST: Create/ADD a new book

## /books/{id}

GET: Get a book by id
PUT: Update a book by id

## /books/issued/books

GET: Get all issued books

## /books/issued/withFine

GET: Get all issued books with Fine

# Subscription Types

Basic(3 months)
Standard(6 months)
Premius(12 months)

NOTE: Days will be in format <MM/DD/YYYY>

If the subscription date is 27/01/23
and Subscription type is Standard
the valid till date will be 27/07/23

If the has the issued book and the issued book is to be returned at 27/06/23
and he missed it, then he gets a fine of Rs. 100./

If he has an issued book and the issued book is to be returned at 27/06/23
If he missed the date of return, and his subscription also expired, then he will get a fine of Rs 200./
