import { useState } from "react";

import "./App.css";
import Revenue from "./components/Revenue";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center justify-around">
        <div className="bg-yellow-500 min-w-4">01</div>
        <div className=" bg-lime-800 min-w-4">02</div>
        <div className="bg-rose-700 min-w-4">03</div>
      </div>

      <div class="grid mt-5 grid-cols-4 gap-2">
        <div className="rounded-md bg-yellow-500">01</div>
        <div className=" rounded-md  bg-fuchsia-900">09</div>
        <div className=" rounded-md  bg-rose-700">09</div>
        <div className="rounded-md  bg-amber-600">09</div>
      </div>
      <div className="grid mt-5 grid-cols-10 gap-2">
        <div className="rounded-md  sm:bg-rose-600  bg-yellow-500 col-span-4 ">
          01
        </div>
        <div className=" rounded-md  bg-fuchsia-900 col-span-2 ">09</div>
        <div className=" rounded-md  bg-rose-700 text-center sm:text-left col-span-3 ">
          09
        </div>
        <div className="rounded-md  bg-amber-600 text-center sm:text-left col-span-1 ">
          09
        </div>
      </div>

      <div className="grid mt-5 grid-cols-10 gap-2">
        <div className="rounded-md  sm:bg-rose-600  bg-yellow-500 sm:col-span-4 col-span-12">
          01
        </div>
        <div className=" rounded-md  bg-fuchsia-900 sm:col-span-2 col-span-12">
          09
        </div>
        <div className=" rounded-md  bg-rose-700 text-center sm:text-left sm:col-span-3 col-span-12">
          09
        </div>
        <div className="rounded-md  bg-amber-600 text-center sm:text-left sm:col-span-1 col-span-12">
          09
        </div>
      </div>

      <div className="grid mt-5 grid-col-12 gap-2 sm:grid-cols-4">
        <div className="rounded-md  sm:bg-rose-600  bg-yellow-500 ">0..1</div>
        <div className=" rounded-md  bg-fuchsia-900 ">0..9</div>
        <div className=" rounded-md  bg-rose-700 text-center sm:text-left ">
          0...9
        </div>
        <div className="rounded-md  bg-amber-600 text-center sm:text-left ">
          0...9..8
        </div>
      </div>
      <Revenue title={"Amount Pending"} amount={"92,312"} orderCount={"13"} />
    </>
  );
}

export default App;
