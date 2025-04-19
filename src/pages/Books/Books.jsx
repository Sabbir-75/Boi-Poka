import React from 'react';
import Book from '../Book/Book';

const Books = ({useLoad}) => {
    return (
        <div className='max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                useLoad.map(singleBook => <Book keys={singleBook.bookId} singleBook={singleBook}></Book>)
            }
        </div>
    );
};

export default Books;