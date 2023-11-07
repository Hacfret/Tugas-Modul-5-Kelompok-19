import React from "react";
import "./style.css"; // Import CSS yang telah dibuat

export default function Book1() {
  return (
    <div>
      <div className="movie-card">
        <h1>Sophie's World</h1>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357537764i/1658408.jpg" // Gantilah URL gambar dengan URL gambar "Sophie's World" yang sesuai
            alt="Sophie's World Poster"
            style={{ width: "200px", height: "300px" }} // Atur ukuran gambar sesuai kebutuhan
          />
        </div>
        <div>
          <h2>Sophie's World</h2>
          <h2>Genre: Philosophy, Novel</h2>
          <p>
            Sophie's World is a philosophical novel by Jostein Gaarder. It tells the story of a young girl named Sophie who embarks on a journey into the world of philosophy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            hendrerit mi vel lacinia hendrerit. Nulla sed orci nec risus sodales ullamcorper. Integer tincidunt justo eget urna semper, in cursus ligula tincidunt. Phasellus dignissim justo at dictum blandit.
          </p>
        </div>
      </div>
      <div className="movie-card">
        <h1>Negeri 5 Menara</h1>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg" // Gantilah URL gambar dengan URL gambar "Negeri 5 Menara" yang sesuai
            alt="Negeri 5 Menara Poster"
            style={{ width: "200px", height: "300px" }} // Atur ukuran gambar sesuai kebutuhan
          />
        </div>
        <div>
          <h2>Negeri 5 Menara</h2>
          <h2>Genre: Drama</h2>
          <p>
            Negeri 5 Menara is a novel by Ahmad Fuadi, and it has been adapted into a film. The story revolves around the journey of Alif, an Indonesian student studying in Egypt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            hendrerit mi vel lacinia hendrerit. Nulla sed orci nec risus sodales ullamcorper. Integer tincidunt justo eget urna semper, in cursus ligula tincidunt. Phasellus dignissim justo at dictum blandit.
          </p>
        </div>
      </div>
    </div>
  );
}
