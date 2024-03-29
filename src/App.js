


import {  useEffect , useContext} from "react";

import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';
import BooksContext from "./context/books";



function App (){
   const {fetchBooks} = useContext(BooksContext);
   useEffect(() => {
      fetchBooks();
         },[] );
    // const [books , setBooks] = useState([]);
    // const fetchBooks = async()=>{
    //     const response= await axios.get('http://localhost:3001/books');
    //     setBooks(response.data);
    //    };

   

//     const editBookById =async (id, newTitle)=>{
//         const response = await axios.put(`http://localhost:3001/books/${id}`,{
//             title: newTitle
//         });
// const updatedBooks = books.map((book) => {
//     if(book.id===id){
//         return{...book, ...response.data};// response.data is updated book object came back from the api

//     }
//     return book;
// });
// setBooks(updatedBooks);

//     };
//     const deleteBookById =async (id)=>{
//         await axios.delete(`http://localhost:3001/books/${id}`);
        
//      const updatedBooks = books.filter((book)=>{
//         return book.id !== id;
    
//      });
//      setBooks(updatedBooks);
//     };
//     const createBook = async (title) =>{
//       const response = await axios.post('http://localhost:3001/books',{
//             title

//         });
//          const updatedBooks = [
//             ...books, 
//             // {id: Math.round(Math.random()*9999)
//             //      , title}
//             response.data
//          ];
//          setBooks(updatedBooks);


//     };

    return <div className="app">
        <h1>Reading List</h1>
        {/* <BookList onEdit={editBookById} books={books} onDelete ={deleteBookById} /> */}

       <BookList />
        
       {/* <BookCreate onCreate={createBook} /> */}
       <BookCreate />

    </div>;
}



export default App;