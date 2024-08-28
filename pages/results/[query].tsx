import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Result from "../../components/results/result";

  const Results: React.FC = () => {
    const router = useRouter();
    const searchterm = router.query?.query;
    const [books, setBooks] = useState([]);

    useEffect(() => {
      console.log(searchterm)
      setBooks([])
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items)
        console.log(books)
      })
    }, [searchterm])

    useEffect(() => {
      console.log(books)
    }, [books])


    return (
      <div className="results">
        {books.length > 0 ? (
          books.map((book) => (       
              <Result key={book.id} bookData={book}/>
          ))
        )  
             :   <p>No results found</p>
        }
      </div>
    );
  };
  
  export default Results;
