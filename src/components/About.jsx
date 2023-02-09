import React from "react";
import me from "../images/me.jpg";

function About() {
  return (
    <div id="about" className="flex justify-center items-center flex-wrap md:flex-row sm:flex-col pt-40 pb-60">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 md:w-7/12 sm:pl-6">
        <div className="md:w-full sm:w-fit">
          <h1 className="md:text-4xl font-bold text-gray-100">About Me</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            reiciendis quisquam aliquam voluptatem dolorum a laborum rem quam,
            vero quas accusamus? Optio commodi porro ipsum facere, non iusto vel
            sapiente.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={me} className="flex flex-wrap rounded-md w-3/4 md:ml-8" />
        </div>
      </div>
    </div>
  );
}

export default About;

// <div id="about" className="mt-20 mb-40">
//   <div className="w-1/3 grid justify-items-end ml-4"></div>
//   <div className="flex flex-col md:flex-cols-2 justify-center items-center pl-48">
//     <div className="flex flex-cols-2 justify-center w-2/3">
//       <div className="flex justify-items-end w-2/4">
//         <h1 className="md:text-4xl font-bold text-gray-100">About Me</h1>
//         <span>
//           Lorem ispansum dolor sit amet consectetur, adipisicing elit. Quis
//           id recusandae a soluta quam eaque magni delectus ducimus incidunt
//           vitae hic vero, voluptates, nihil nostrum molestias. Laboriosam ab
//           ducimus libero. Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Consequuntur magnam aliquid aperiam ut? Laudantium delectus
//           ratione cupiditate, illo hic eum perspiciatis aliquid officia
//           aspernatur beatae molestias ad magni suscipit corporis.
//         </span>
//       </div>
//       <div>
//         <img src={me} className="w-2/4 rounded-md mx-8" />
//       </div>
//     </div>
//   </div>
// </div>
