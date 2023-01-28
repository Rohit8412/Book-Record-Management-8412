const express = require("express");
const router = express.Router();
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

/**
 * Route : /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: None
 */

router.get("/", (req, res)=>{
    res.status(200).json({
        success:true,
        data: books,
    });
});

/**
 * Route : /books/:id
 * Method: GET
 * Description: Get book by id
 * Access: Public
 * Parameters: id
 */

router.get("/:id", (req, res)=>{
    const{id} = req.params;
    const book = books.find((each) => each.id === id);

    if(!book){
        return res.status(404).json({
            success :false,
            message:"Book not found",
        });
    }
    return res.status(200).json({
        success:true,
        data:book,
    });
});

/**
 * Route : /books/issued/books
 * Method: GET
 * Description: Get all issues book 
 * Access: Public
 * Parameters: None
 */

router.get("/issued/books",(req, res)=>{
    const usersWithIssuedBooks = users.filter((each) =>{
        if(each.issuedBook) return each;
    });
    const issuedBooks = [];

    usersWithIssuedBooks.forEach((each) =>{
        const book = books.find((book) =>
            book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    });

    if(usersWithIssuedBooks.length === 0){
        return res.status(404).json({
            success:false,
            message:"no books issued yet",
        });
    }
    return res.status(200).json({
        success:true,
        data : issuedBooks,
    });
});

/**
 * Route : /books
 * Method: POST
 * Description: Create new books
 * Access: Public
 * Parameters: None
 * Data: author, name, genre, price, publisher, id
 */

router.post("/",(req, res) =>{
    const {data} = req.body;

    if(!data){
        return res.status(400).json({
            success:false,
            messgae:"no data provided",
        });
    }

    const book = books.find((each) => each.id === data.id);

    if(book){
        return res.status(404).json({
            succces:false,
            message:"book already exist with this id please use unique id",
        });
    }
    const allBooks = [...books, data];

    return res.status(201).json({
        success:true,
        data: allBooks,
    });
});

/**
 * Route : /books/:id
 * Method: PUT
 * Description: Updat book
 * Access: Public
 * Parameters: id
 * Data: author, name, genre, price, publisher, id
 */

router.put("/:id",(req, res) =>{
    const {id} = req.params;
    const {data} = req.body;
    const book = books.find((each) => each.id === id);

    if(!book){
        return res.status(400).json({
            success:false,
            message:"Book not found with this particular id",
        });
    }
    const updateData = books.map((each) =>{
        if(each.id === id){
            return {...each, ...data};
        }
        return each;
    });
    return res.status(404).json({
        success:true,
        data: updateData,
    });
});

 module.exports = router; //default export
