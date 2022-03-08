import React from "react";
import "./videos.css";

const Videos = function (props) {
  const rows = [];
  const filteredText = props.filterText;
  const isAvailable = props.isAvailable;
  
  props.videoList.forEach((video) => {
    if (video.title.indexOf(filteredText) === -1) {
      return;
    }
    if (isAvailable && !video.available) {
      return;
    }
    rows.push(video);
  });
  return (
    <div>
      {rows.map((vid, id) => (
        <div className="card" key={id}>
          <div className="card-body">
            <h5
              className={
                "card-title " + (vid.available === true ? "" : "notAvailable")
              }
            >
              {vid.title}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{vid.genre}</h6>
            <p className="card-text">{vid.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
