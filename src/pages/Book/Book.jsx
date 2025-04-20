import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { bookId, bookName, image, review, category, rating, latest, tags } = singleBook;

    return (
        <Link to={`/bookdetails/${bookId}`} >
            <div className="card flex flex-col shadow-sm p-6 bg-white border border-slate-300">

                <div className='flex-1 flex justify-center items-center rounded-[16px] bg-[#F3F3F3] px-[90px] py-[50px]'>
                    <img className=' max-w-[150px] max-h-[200px]' src={image} alt={image} />
                </div>
                <div className='flex gap-10 mt-5 justify-center'>
                {
                    tags.map(tag => <h1>{tag}</h1>)
                }
                </div>

                <div className=" flex-1 card-body">
                    <h2 className="card-title">
                        {bookName}
                        {
                            latest && <div className="badge badge-secondary">NEW</div>
                        }
                    </h2>
                    <p>{"...".padStart(120, review)}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline flex gap-2">
                            {rating}
                            <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default Book;