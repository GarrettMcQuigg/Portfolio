import React from "react";
import me from "../images/me.jpg";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center flex-wrap md:flex-row sm:flex-col pt-24 pb-16"
    >
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 md:w-7/12">
        <div className="px-8">
          <h1 className="md:text-4xl font-bold text-gray-100">About Me</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            reiciendis quisquam aliquam voluptatem dolorum a laborum rem quam,
            vero quas accusamus? Optio commodi porro ipsum facere, non iusto vel
            sapiente.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quam quidem maiores, quisquam esse, sunt placeat omnis repellat
            consectetur sit vero odio, cum maxime tempora quasi provident a
            atque ipsam.
          </p>
        </div>
        <div className="flex justify-center xl:justify-start lg:pl-8 pt-8 xl:pt-0 md:pl-2">
          <img src={me} className="max-w-xs rounded-md md:h-fit" />
        </div>
      </div>
    </div>
  );
}

export default About;
