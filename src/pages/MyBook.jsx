import React from 'react';
import { useState } from 'react';
import { BookEditor } from '../components/BookEditor/BookEditor';

const MyBook = () => {
    const [content] = useState(() => {
        return [
            {id:26, auth:"Filja", text:"Ну ты Степашка и мудак..."},
            {id:27, auth:"Stepashka", text:"Сам ты Філя мудак. Та і взагалі то я вашу собачу мову не розумію"},
        ]
    })

    return(
        <BookEditor content={content} />
    )
}

export default MyBook;