import React, { useState } from "react";
import "../galleria.css";
import CloseIcon from "@mui/icons-material/Close";

import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
import Img4 from "../img/img4.jpg";
import Img5 from "../img/img5.jpg";
import Img6 from "../img/img6.jpg";
import Img7 from "../img/img7.jpg";
import Img8 from "../img/img8.jpg";
import Img9 from "../img/img9.jpg";
import Img10 from "../img/img10.jpg";
import Img11 from "../img/img11.jpg";
import Img12 from "../img/img12.jpg";
import Img13 from "../img/img13.jpg";
import Img14 from "../img/img14.jpg";
import Img15 from "../img/img15.jpg";
import Img16 from "../img/img16.jpg";
import Img17 from "../img/img17.jpg";
import Img18 from "../img/img18.jpg";
import Img19 from "../img/img19.jpg";
import Img20 from "../img/img20.jpg";
import Img21 from "../img/img21.jpg";
import Img22 from "../img/img22.jpg";
import Img23 from "../img/img23.jpg";
import Img24 from "../img/img24.jpg";
import Img25 from "../img/img25.jpg";
import Img26 from "../img/img26.jpg";
import Img27 from "../img/img27.jpg";
import Img28 from "../img/img28.jpg";

const Galleria = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    },
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
    },
    {
      id: 25,
      imgSrc: Img25,
    },
    {
      id: 26,
      imgSrc: Img26,
    },
    {
      id: 27,
      imgSrc: Img27,
    },
    {
      id: 28,
      imgSrc: Img28,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className="galleria md:grid lg:grid-cols-3 md:grid-cols-2">
        {data.map((item, index) => (
          <div
            className="pics p-2 md:p-1"
            key={index}
            onClick={() => getImg(item.imgSrc)}
          >
            <img src={item.imgSrc} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Galleria;
