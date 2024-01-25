import { useState } from "react";
import bookImage from "./../../assets/book.png";
import Book from "./Book";
import BookFilter from "./BookFilter";
import BookSearch from "./BookSearch";

const booksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    image: bookImage,
    rating: 4.5,
    price: 99.99,
    isFavourite: true,
    author: "F. Scott Fitzgerald",
    publish_year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    image: bookImage,
    rating: 4.8,
    price: 69.99,
    isFavourite: false,
    author: "Harper Lee",
    publish_year: 1960,
  },
  {
    id: 3,
    title: "1984",
    image: bookImage,
    rating: 4.7,
    price: 39.99,
    isFavourite: true,
    author: "George Orwell",
    publish_year: 1949,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    image: bookImage,
    rating: 4.2,
    price: 89.99,
    isFavourite: false,
    author: "J.D. Salinger",
    publish_year: 1951,
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    image: bookImage,
    rating: 4.9,
    price: 199.99,
    isFavourite: true,
    author: "J.K. Rowling",
    publish_year: 1997,
  },
  {
    id: 6,
    title: "The Hobbit",
    image: bookImage,
    rating: 4.6,
    price: 49.99,
    isFavourite: true,
    author: "J.R.R. Tolkien",
    publish_year: 1937,
  },
];

const Books = () => {
  const [books, setBooks] = useState([...booksData]);

  //handle search book
  const handleSearchBook = (searchText) => {
    const booksAfterSearch = books.filter((book) =>
      book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );

    setBooks([...booksAfterSearch]);
  };

  //handle sort book
  const handleSortBook = (value) => {
    if (value === "name_asc") {
      const sortedBooksAsc = books.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setBooks([...sortedBooksAsc]);
    } else if (value === "name_desc") {
      const sortedBooksDesc = books.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setBooks([...sortedBooksDesc]);
    } else if (value === "year_asc") {
      const sortedBooksYearAsc = books.sort(
        (a, b) => a.publish_year - b.publish_year
      );
      setBooks([...sortedBooksYearAsc]);
    } else if (value === "year_desc") {
      const sortedBooksYearDesc = books.sort(
        (a, b) => b.publish_year - a.publish_year
      );
      setBooks([...sortedBooksYearDesc]);
    } else {
      setBooks([...books]);
    }
  };

  //handle favourite function
  const handleFavourite = (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    const newbooks = [...books];
    newbooks[bookIndex].isFavourite = !newbooks[bookIndex].isFavourite;
    setBooks([...newbooks]);
  };
  return (
    <>
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <BookSearch onSearch={handleSearchBook} />
          <BookFilter onsort={handleSortBook} />
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <Book key={book.id} book={book} onFavourite={handleFavourite} />
        ))}
      </div>
    </>
  );
};
export default Books;
