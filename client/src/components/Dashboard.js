import React from "react";

const AddTripButton = props => {
  return (
    <article className="intro text-center">
      {" "}
      <h1
        className="intro__heading intro__heading--income title"
        className="title-one"
      >
        KOLLAB
      </h1>
      <div className="intro__body wysiwyg">
        <p className="intro">
          We here to help you build a team to put together your next event
        </p>
        <p> Let's KOLLAB!</p>
        <button className="example_f" onClick={props.addTrip}>
          <span>GET STARTED</span>
        </button>{" "}
      </div>
    </article>
  );
};

export default AddTripButton;
