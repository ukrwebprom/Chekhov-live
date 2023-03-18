import React from 'react';
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BookList } from '../components/BookList/BookList';
import { BookNav } from '../components/BookNav/BookNav';
import { TitleDescription } from '../components/TitleDescription/TitleDescription';
import { getBooksLatest, getBooksTrending, getBooksByQuery } from "../Utils/api";

export const Books = () => {
    const [books, setBooks] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    let type = searchParams.get('type');

    useEffect(() => {
        if(query) {
            setBooks(getBooksByQuery(query));
            return;
        }
        if(type === 'Trending') {
            setBooks(getBooksTrending());
            return;
        }
        setBooks(getBooksLatest());
    }, [type, query])

    useEffect(() => {
        if(!type && !query) setSearchParams({type: "Latest"});
    }, [])
    
    return (
        <>
{/*         <Hero title='Chekhov is typing...' /> */}
        <div className="section">
            <TitleDescription title="New Books&nbsp;for the New Times" descr="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed risus sagittis, feugiat elit non, feugiat massa. Nunc aliquam congue metus pretium ullamcorper. Vivamus placerat velit quis facilisis sodales. Maecenas eu tortor orci. In eget tortor nibh. Donec non interdum enim. 
            "/>
        </div>
        <div className="section" style={{borderBottom:"1px solid #666"}}>
            <BookNav />
        </div>
        <div className="section">
            {type && <h3 className="section-title">{type} Books</h3>}
            {query && <p className="section-caption">{books.length} books found for <span>{query}</span></p>}
            <BookList books={books} />
        </div>
        <Outlet />
        </>
    )
}