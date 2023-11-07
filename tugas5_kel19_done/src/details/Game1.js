import React from "react";
import "./style.css"; // Import CSS yang telah dibuat

export default function Book1() {
  return (
    <div>
      <div className="movie-card">
        <h1>Grand Theft Auto V</h1>
        <div>
          <img
            src="https://logowik.com/content/uploads/images/grand-theft-auto-v8194.jpg" // Gantilah URL gambar dengan URL gambar "Grand Theft Auto V" yang sesuai
            alt="Grand Theft Auto V Poster"
            style={{ width: "200px", height: "300px" }} // Atur ukuran gambar sesuai kebutuhan
          />
        </div>
        <div>
          <h2>Grand Theft Auto V</h2>
          <h2>Genre: Action, Adventure</h2>
          <p>
            Grand Theft Auto V is an action-adventure game developed by Rockstar Games. It offers an open-world environment and a compelling storyline. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit mi vel lacinia
            hendrerit. Nulla sed orci nec risus sodales ullamcorper. Integer tincidunt justo eget urna semper, in cursus ligula tincidunt. Phasellus dignissim justo at dictum blandit.
          </p>
        </div>
      </div>
      <div className="movie-card">
        <h1>Red Dead Redemption 2</h1>
        <div>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJGm-_E6Q1gD0HmglrtSEl1cWIyla1iCgHeRq9UPSwFnuvR_T3" // Gantilah URL gambar dengan URL gambar "Red Dead Redemption 2" yang sesuai
            alt="Red Dead Redemption 2 Poster"
            style={{ width: "200px", height: "300px" }} // Atur ukuran gambar sesuai kebutuhan
          />
        </div>
        <div>
          <h2>Red Dead Redemption 2</h2>
          <h2>Genre: Action, Adventure</h2>
          <p>
            Red Dead Redemption 2 is an action-adventure game developed by Rockstar Games. It offers an open-world environment and a gripping narrative set in the American Wild West. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed hendrerit mi vel lacinia hendrerit. Nulla sed orci nec risus sodales ullamcorper. Integer tincidunt justo eget urna semper, in cursus ligula tincidunt. Phasellus dignissim justo at dictum blandit.
          </p>
        </div>
      </div>
    </div>
  );
}
