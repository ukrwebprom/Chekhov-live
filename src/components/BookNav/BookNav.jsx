import './booknav.scss';
import {ReactComponent as SearchIcon} from '../../images/search.svg';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const BookNav = () => {

/*     const navigate = useNavigate(); */
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({query:e.target.elements.query.value});
    }

    return(
        <div className="book-nav">
            <form className="book-nav-form" onSubmit={handleSubmit}>
                <input name="query"  className="book-nav-input" defaultValue={searchParams.get("query")}/>
                <button type="submit"  className="book-nav-button"><SearchIcon width="20px" height="20px"/></button>
            </form>
            <nav className="book-nav-links">
                <button className="book-nav-link" onClick={() => setSearchParams({type: "Latest"})}>Latest books</button>
                <button className="book-nav-link" onClick={() => setSearchParams({type: "Trending"})}>Trending books</button>
            </nav>
        </div>
    )
}