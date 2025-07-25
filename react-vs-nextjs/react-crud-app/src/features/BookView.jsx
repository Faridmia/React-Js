import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BookSlice";
const BookView = () => {
  const books = useSelector((state) => state.books.books);

  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  console.log(books);

  return (
    <div>
      <h1>List of Book View</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={book.id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>

                    <button
                      onClick={() => {
                        handleDeleteBook(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookView;
