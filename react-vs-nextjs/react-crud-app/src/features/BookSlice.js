const { v4: uuidv4 } = require("uuid");
const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Love Bangladesh", author: "Anisul Islam" },
    { id: uuidv4(), title: "Bangladeshi", author: "Anisul Islam" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showbooks: (state) => {
      return state.books;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id == id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;

      state.books = state.books.filter((book) => book.id != id);
    },
  },
});

export const { showbooks, addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
