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

      {/* Section 3 */}
      <div>
        <div>Product 1</div>
        <div>Product 2</div>
        <div>Product 3</div>
      </div>

      {/* Section 4 */}
      <div>
        <div>image</div>
        <h1>Testimonial</h1>
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ratione
          rerum saepe. Laudantium repellendus error dicta quasi. Perspiciatis,
          consectetur doloribus.
        </blockquote>
      </div>

      {/* section 5 */}
      <div>
        <div>
          <h1>title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae, magnam a corrupti modi obcaecati!
          </p>
          <div>
            <button>play button</button>
            <div>video hidden</div>
          </div>
        </div>
        <div>image</div>
      </div>
    </>
  );
}

export default Home;
