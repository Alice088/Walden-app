import React from "react";

 export default function App() {
  return (
    <div>


      <footer>
        <div className="flex flex-col mb-14 items-center gap-y-3 text-neutral-400">
          <p>Sign up for our newsletter</p>

          <form method="get">
            <input type="email" placeholder="Enter email"
             className="text-center w-80 border-[1px] border-solid  border-neutral-300 rounded-3xl"></input>
          </form>
        </div>

        <div className="flex justify-around text-neutral-400">
          <p>© 2021 Walden</p>

          <p>FAQ</p>

          <p>Reading</p>

          <p>love@walden.us</p>

          <p>Wholesale</p>

          <p>Instagram</p>
        </div>

        <div className="flex h-16 flex-col justify-center bg-neutral-100">
          <p className=" text-zinc-700 text-center font-roboto">
            Free Shipping Over $100, Returns, and a One-Year Warranty
          </p>
        </div>
      </footer>
    </div>
  );
}