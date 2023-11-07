import React from "react";
import "./style.css"; // Import CSS yang telah dibuat

export default function Movie1() {
  return (
    <div>
      <div className="movie-card">
        <h1>John Wick: Chapter 4</h1>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg" // Gantilah URL gambar dengan URL gambar yang sesuai
            alt="John Wick: Chapter 4 Poster"
            style={{ width: "200px", height: "300px" }} // Atur ukuran gambar sesuai kebutuhan
          />
        </div>
        <div>
          <h2>John Wick: Chapter 4</h2>
          <h2>Genre: Action, Thriller</h2>
          <p>
            John Wick: Chapter 4 is the upcoming fourth installment in the John Wick film series. It is an action-packed thriller that continues the story of the legendary assassin John Wick, portrayed by Keanu Reeves. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed hendrerit mi vel lacinia hendrerit. Nulla sed orci nec risus sodales ullamcorper. Integer tincidunt justo eget urna semper, in cursus ligula tincidunt. Phasellus dignissim justo at dictum
            blandit.
          </p>
        </div>
      </div>
      <div className="movie-card">
        <h1>Oppenheimer</h1>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71lqDylcvGL.jpg" // Gantilah URL gambar dengan URL gambar "Oppenheimer" yang sesuai
            alt="Oppenheimer Poster"
            style={{ width: "200px", height: "300px" }} // Atur ukuran gambar sesuai kebutuhan
          />
        </div>
        <div>
          <h2>Oppenheimer</h2>
          <h2>Genre: Drama, Biography</h2>
          <p>
            Oppenheimer is an upcoming drama and biography film directed by Christopher Nolan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mi vel lacinia hendrerit. Nulla sed orci nec risus sodales ullamcorper.
            Integer tincidunt justo eget urna semper, in cursus ligula tincidunt. Phasellus dignissim justo at dictum blandit.
          </p>
        </div>
      </div>
    </div>
  );
}
