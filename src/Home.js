import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          alt="home-banner"
        />
      </div>
      <div className="home__row">
        {/* Product 2 */}
        <Product
          id="8932989"
          title="the mean startup, for some unspecified reason it became it, don't ask
          why or what cause am stumped"
          price={29.99}
          image="https://assets.entrepreneur.com/content/3x2/2000/1597690588-Ent-ProductPhotography.jpg?width=700&crop=2:1"
          rating={3}
        />

        <Product
          id="8932985"
          title="the mean startup, for some unspecified reason it became it, don't ask
          why or what cause am stumped"
          price={29.99}
          image="https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518945540412-LJ3FRDBQBPHCWK0GUYOA/ke17ZwdGBToddI8pDm48kCJJGN6iSXU-HOkvm9k9k9dZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI7Z-5CtLK94bOD9WKCsDvgGf7BkN87CYIwgHcC5sPf8sKMshLAGzx4R3EDFOm1kBS/DOBD+Cover+front+and+back.jpg?format=300w"
          rating={3}
        />
      </div>
      <div className="home__row">
        {/* Product 3 */}
        <Product
          id="8932984"
          title="the mean startup, for some unspecified reason it became it, don't ask
          why or what cause am stumped"
          price={29.99}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvLMwRgfYoqEW5yDJj1O3zm9oNdzmmZQ7vlhdEJMf0inm3SCg7Uy6A45U-6BMG2_wqi0&usqp=CAU"
          rating={3}
        />
        <Product
          id="8932983"
          title="the mean startup, for some unspecified reason it became it, don't ask
          why or what cause am stumped"
          price={29.99}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGclDztKbKMbGV9Pe70qyMw5y79vJkO7eRCQ&usqp=CAU"
          rating={4}
        />

        <Product
          id="8932982"
          title="the mean startup, for some unspecified reason it became it, don't ask
          why or what cause am stumped"
          price={29.99}
          image="https://images.squarespace-cdn.com/content/v1/563890dce4b0facc12851d8f/1518945540412-LJ3FRDBQBPHCWK0GUYOA/ke17ZwdGBToddI8pDm48kCJJGN6iSXU-HOkvm9k9k9dZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI7Z-5CtLK94bOD9WKCsDvgGf7BkN87CYIwgHcC5sPf8sKMshLAGzx4R3EDFOm1kBS/DOBD+Cover+front+and+back.jpg?format=300w"
          rating={5}
        />
      </div>
      <div className="home__row">
        {/* Product 1 */}
        <Product
          id="8932981"
          title="the mean startup, for some unspecified reason it became it, don't ask
          why or what cause am stumped"
          price={29.99}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvLMwRgfYoqEW5yDJj1O3zm9oNdzmmZQ7vlhdEJMf0inm3SCg7Uy6A45U-6BMG2_wqi0&usqp=CAU"
          rating={4}
        />
        >
      </div>
    </div>
  );
}

export default Home;
