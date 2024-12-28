import React from "react";

function Revenue({ title, amount, orderCount }) {
  return (
    <div className="bg-white rounded mt-6 shadow-lg h-24 w-72 flex flex-col justify-around ">
      <div>{title}</div>
      <div className="flex justify-between">
        <div className="text-2xl font-extrabold flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {amount}
        </div>
        <div>
          {orderCount ? (
            <div className="flex justify-around text-blue-700">
              <div className=" underline underline-offset-2">
                {orderCount}orders{" "}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Revenue;
