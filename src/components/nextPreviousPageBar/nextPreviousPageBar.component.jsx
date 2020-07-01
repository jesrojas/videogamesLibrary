import React, { useState } from 'react';

const NextPreviousPageBar = ({ searchGame, page, changePage }) => {
    const [direction, changeDirection] = useState("");

    const onSubmit = (e) => {
      e.preventDefault();
      changePage(direction);
    };

  return (
    <form onSubmit={onSubmit}>
      <div className="text-center mx-0 p-1 bottom-0 fixed z-100 inset-x-0">
        <button
          onClick={(e) => page < 2 ? e.preventDefault() : changeDirection("firstPage")}
          type="submit"
          className={`${page < 2 ? "cursor-not-allowed opacity-50 select-none " : ""}
                      ${searchGame ? "hidden " : ""}
                     change-page-button focus:outline-none`}
        >
          &#171;
        </button>
        <button
          onClick={(e) => page < 2 ? e.preventDefault() : changeDirection("previous")}
          type="submit"
          className={`${page < 2 ? "cursor-not-allowed opacity-50 select-none " : ""}
                      ${searchGame ? "hidden " : ""} 
                     change-page-button focus:outline-none`}
        >
          &#8249;
        </button>
        <button
          onClick={() => changeDirection("next")}
          type="submit"
          className={`${searchGame ? "hidden " : ""} change-page-button focus:outline-none`}
        >
          &#8250;
        </button>
      </div>
    </form>
  );
}

export default NextPreviousPageBar;