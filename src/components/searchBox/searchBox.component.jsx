import React, { useState } from 'react';

const SearchBox = ({ searchGame, setSearchGame }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchGame(text);
    }

    const goBack = (e) => {
      e.preventDeafult();
      setSearchGame(e.value)
    }

        return (
          <div className="mt-5 w-full">
            <form onSubmit={onSubmit} className="inline-block">
              <div className="flex justify-center border-b border-b-2 border-teal-500 py-2 mb-10 max-w-sm">
                <input
                  onChange={(e) => setText(e.target.value)}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search Game"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 bg-teal-500 mr-1 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            <form className="inline-block">
              { searchGame ? 
              <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                  value=""
                  onCLick={goBack}
                >
                  Go Back
                </button> 
                : ''
                }
            </form>
          </div>
        );
}

export default SearchBox;