import React from 'react';
import { Outlet } from "react-router-dom";
import { BookData } from "../components/BookData/BookData"
import books from '../testbooks.json'
export const MyBooks = () => {

    return (
        <>
        <BookData book={books[2]}/>
        <Outlet />
        </>
    )
}