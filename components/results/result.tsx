import Link from "next/link";
interface BookProps {
    bookData: any
}
const Result: React.FC<BookProps> = ({bookData}) => {

        return (
            <div className="book" >
                <img src={bookData.volumeInfo.imageLinks.thumbnail}className="book__image" />
                <Link href={`/books/${bookData.volumeInfo.title}`} className="book__title" >{bookData.volumeInfo.title}{bookData.volumeInfo.subtitle ? `(${bookData.volumeInfo.subtitle})` : ''}</Link>
                <h3 className="book__author" >{bookData.volumeInfo.authors?.[0]}</h3>
                <p className="book__description" >{bookData.searchInfo.textSnippet}</p>
            </div>
        );
    };
    
    export default Result;