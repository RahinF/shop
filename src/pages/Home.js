import React from "react";
import Hero from "../components/Hero";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero />

      {/* Middle Section */}
      <div className="home-middle">
        <div>
          <div className="home-image">image</div>
          <h2>subheading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ipsa quas error non reprehenderit aliquid illo totam aperiam numquam
            excepturi.
          </p>
        </div>
        <div className="text-end">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut
            quam ratione consequatur porro doloribus ad tempora minima dicta
            libero.
          </p>
          <div className="home-image">image</div>
        </div>
      </div>

     



    </>
  );
}

export default Home;
