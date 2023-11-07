import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Book.css";

export default function Book() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      title: "Sophie's World",
      id: 1,
      rate: 4,
      genre: "Philosophy, Fiction, Fantasy",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357537764i/1658408.jpg",
    },
    {
      title: "Sophie's World",
      id: 1,
      rate: 4,
      genre: "Philosophy, Fiction, Fantasy",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357537764i/1658408.jpg",
    },
    {
      title: "Sophie's World",
      id: 1,
      rate: 4,
      genre: "Philosophy, Fiction, Fantasy",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357537764i/1658408.jpg",
    },
  ];
  const data = [
    {
      title: "Negeri 5 Menara",
      id: 2,
      rate: 4,
      genre: "Fiction, Drama, Slice of Life",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg",
    },
    {
      title: "Negeri 5 Menara",
      id: 2,
      rate: 4,
      genre: "Fiction, Drama, Slice of Life",
      img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg",
    },
  ];

  return (
    <>
      <p id="movies">Top Book</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            {data.length === index + 1 ? <div style={{ marginRight: 40 }} /> : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">Kolom Book 1</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("item id = " + item.id)} />
              {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">Kolom Book 2</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("item id = " + item.id)} />
              {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
