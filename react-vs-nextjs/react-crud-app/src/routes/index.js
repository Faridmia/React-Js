import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/AddBook";
import BookView from "../features/BookView";
import EditBook from "../features/EditBook";
import Navbar from "../layout/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";
const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/show-books" element={<BookView />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
