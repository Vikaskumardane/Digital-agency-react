import React from 'react'
import vg from "../assets/2.webp"

import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from 'react-icons/ai'



function Home() {
  return (
    <>
      {/* 1ST SECTION OF THE HOME */}
      <div className="home" id="home">
        <main>
          <h1>LearnStart.co</h1>
          <p>You think, We build !</p>
        </main>
      </div>

      {/* 2nd SECTION OF THE HOME */}

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      {/* 3rd SECTION OF THE HOME */}
      <div className="home3" id="about">
        <div>
          <h1>WHO WE ARE ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            recusandae, saepe corrupti magni numquam fugit id quis molestiae
            accusantium ducimus ipsum cumque sapiente, voluptate quisquam
            deleniti, veniam dignissimos beatae labore neque officiis
            repudiandae deserunt eos incidunt! Culpa corrupti molestiae
            deserunt, totam officiis, praesentium laudantium, dolorum qui vel
            nihil odio laborum!
          </p>
        </div>
      </div>

      {/* 4th SECTION OF THE HOME */}

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home