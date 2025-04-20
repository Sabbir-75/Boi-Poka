import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { addItem } from '../Utilities/Utilities';

const BookDetails = () => {

    const param = useParams()
    const id = parseInt(param.id)

    const loader = useLoaderData()

    const getSingleItems = loader.find(singleItem => singleItem.bookId === id)

    const { bookId, image, bookName, author, review, category, tags, totalPages, publisher, yearOfPublishing, rating } = getSingleItems

    const navigate= useNavigate()

    const adddItems = (id) => {
        addItem(id)
    }

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1170px] md:px-24 lg:px-8 lg:py-5">
            <div className="flex flex-col gap-50 lg:gap-0 overflow-hidden bg-white rounded lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2 bg-gray-200">
                    <div className='w-full'>
                        <img
                            src={image}
                            alt={image}
                            className="object-cover absolute h-50 lg:h-[200px] top-[20%] left-[20%]"
                        />
                    </div>
                    <svg
                        className="absolute top-0 -right-2 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center px-4 bg-white mt-4 lg:mt-0 lg:px-6 lg:w-1/2">
                    <h5 className="mb-3 max-w-full text-3xl font-extrabold leading-none sm:text-4xl">
                        {bookName}
                    </h5>

                    <h5 className="mb-3 text-lg text-[#13131380] font-medium leading-none sm:text-xl">
                        By: {author}
                    </h5>
                    <div className='py-2 my-2 border-dashed  border-b-2 border-t-2 border-t-gray-400 border-b-gray-400'>
                        <h5 className="mb-3 text-lg text-[#13131390] font-medium leading-none sm:text-xl">
                            {category}
                        </h5>
                    </div>
                    <p className="mb-5 text-gray-800">
                        <span className="font-bold">Review:</span> {"...".padStart("350", review)}
                    </p>
                    <div className='flex gap-8 pb-3 mb-[24px] items-center border-dashed  border-b-2 border-b-gray-400'> <p className='font-bold'>Tag</p> <div className='flex gap-8'> {tags.map(tag => <Link><h1 className='py-2 px-4 rounded-3xl bg-[#23BE0A15] text-[#23BE0A]'>#{tag}</h1></Link>)}
                    </div>
                    </div>
                    <div className="flex gap-[50px] mb-[32px]">
                        <div className='space-y-3'>
                            <h1 className='text-base font-normal text-[#13131370]'>Number of Pages:</h1>
                            <h1 className='text-base font-normal text-[#13131370]'>Publisher:</h1>
                            <h1 className='text-base font-normal text-[#13131370]'>Year of Publishing:</h1>
                            <h1 className='text-base font-normal text-[#13131370]'>Rating:</h1>
                        </div>
                        <div className='space-y-3'>
                            <h1 className=' text-base font-semibold text-[#131313]'>{totalPages}</h1>
                            <h1 className=' text-base font-semibold text-[#131313]'>{publisher}</h1>
                            <h1 className=' text-base font-semibold text-[#131313]'>{yearOfPublishing}</h1>
                            <h1 className=' text-base font-semibold text-[#131313]'>{rating}</h1>
                        </div>



                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={() => adddItems(bookId)} class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#23BE0A] ">
                            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#23BE0A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span class="relative text-[#23BE0A] transition duration-300 group-hover:text-white ease">Mark As Read</span>
                        </button>
                        <Link href="#_" class="relative px-5 py-2 font-medium text-white group">
                            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#22be0aba] group-hover:bg-[#23BE0A] group-hover:skew-x-12"></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#23BE0A] group-hover:bg-[#22be0aba] group-hover:-skew-x-12"></span>

                            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#22be0af3] -rotate-12"></span>
                            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#22be0aba] -rotate-12"></span>
                            <span class="relative">Add To wishList</span>
                        </Link>

                    
                            <button onClick={() => navigate(-1)} class="relative inline-flex items-end justify-end py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#000000] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#000000] group-hover:h-full"></span>
                                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg class="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg class="w-5 h-5 text-[#59C6D2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
                            </button>
                      
                    </div>
                </div>
            </div>
        </div>


    );
};

export default BookDetails;