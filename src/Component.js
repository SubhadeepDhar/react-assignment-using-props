import React from "react";
import "./Componenet.css";

const Component = ({link,name,about,price}) => {
  return (
    <div className="component">
      <div className="left">
        <div className="image">
            <img src={link} alt="" />
        </div>
        <div className="info"><p>{name}</p></div>
      </div>
      <div className="right">
          <div className="right_left"><p>{about}</p></div>
          <div className="right_middle"><h3>{price} <sub>AUD</sub></h3></div>
          <div className="right_right"><button>Add to Cart</button>
          <button>Make Offer</button></div>

      </div>
    </div>
  );
};

export default Component;