import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import { Layout } from './pages/Layout';
import { Landing } from './pages/Landing';
import { MyBooks } from './pages/MyBooks';
import { Books } from './pages/Books';
import { NotFound } from './pages/NotFound';
import { BookContent } from './components/BookContent/BookContent';
import { Reader } from './components/ReadBook/Reader';
import MyBook from './pages/MyBook';

function App() {
  


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="my_books" element={<MyBooks />}>
            <Route path="my_books/:bookID" element={<BookContent />} />
          </Route>;
          <Route path="books" element={<Books />}>
            <Route path=":bookID" element={<Reader />} />
          </Route>
          <Route path="my_book" element={<MyBook />} />
          <Route path="*" element={<NotFound />} />;
        </Route>
      </Routes>
    </div>
  );
}

export default App;
