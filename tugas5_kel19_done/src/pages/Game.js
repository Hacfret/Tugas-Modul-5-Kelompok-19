import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Game.css";

export default function Game() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      title: "GTA V",
      id: 1,
      rate: 4,
      genre: "action, crime",
      img: "https://logowik.com/content/uploads/images/grand-theft-auto-v8194.jpg",
    },
    {
      title: "GTA V",
      id: 1,
      rate: 4,
      genre: "action, crime",
      img: "https://logowik.com/content/uploads/images/grand-theft-auto-v8194.jpg",
    },
    {
      title: "GTA V",
      id: 1,
      rate: 4,
      genre: "action, crime",
      img: "https://logowik.com/content/uploads/images/grand-theft-auto-v8194.jpg",
    },
  ];
  const data = [
    {
      title: "RDR2",
      id: 2,
      rate: 4,
      genre: "action, drama, history",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJGm-_E6Q1gD0HmglrtSEl1cWIyla1iCgHeRq9UPSwFnuvR_T3",
    },
    {
      title: "RDR2",
      id: 2,
      rate: 4,
      genre: "action, drama, history",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJGm-_E6Q1gD0HmglrtSEl1cWIyla1iCgHeRq9UPSwFnuvR_T3",
    },
  ];

  return (
    <>
      <p id="movies">Top Games</p>
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
          <p id="movies">Kolom Game 1</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("item id = " + item.id)} />
              {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">Kolom Game 2</p>
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
