import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import "./review.css";
import review from "./review";
import { Button } from "@material-ui/core";

const ShowReview = () => {
  const [index, setIndex] = useState(0);
  const { id, name, para, img } = review[index];

  const checkNumber = (number) => {
    if (number > review.length - 1) {
      return 0;
    }
    if (number < 0) {
      return review.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <>
      <div className="container">
        <h1 className="big__heading">Our reviews</h1>
        <div className="review">
          <h1>{id}</h1>
          <div className="img">
            <img src={img} alt={name} />
          </div>
          <div className="heading">
            <h4>{name}</h4>
          </div>
          <div className="para">
            <p>{para}</p>
          </div>
          <div className="arrows">
            <ArrowBack onClick={prevReview}></ArrowBack>
            <ArrowForward onClick={nextReview} />
          </div>
          <div className="buttons">
            <Button variant="contained" color="secondary">
              Suprise Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowReview;
