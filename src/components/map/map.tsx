import "./map.css";
import React, { Fragment } from "react";
const map = require("../../assets/map.png");

export default function Map() {
  let zoomNumber = 0;
  React.useEffect(() => {
    window.addEventListener("load", function () {
      (
        (document.getElementById("zoom-number") as HTMLCanvasElement) || null
      ).textContent = zoomNumber + "%";
    });
  });
  function zoomin() {
    if (zoomNumber >= 100) {
    } else {
      var GFG = (document.getElementById("map") as HTMLCanvasElement) || null;
      var currWidth = GFG.clientWidth;
      GFG.style.width = currWidth + 100 + "px";
      zoomNumber = zoomNumber + 10;
      console.log(zoomNumber);
      (
        (document.getElementById("zoom-number") as HTMLCanvasElement) || null
      ).textContent = zoomNumber + "%";
      if (zoomNumber > 50) {
        (
          (document.getElementById("map__wrapper") as HTMLCanvasElement) || null
        ).style.alignItems = "center";
      }
    }
  }

  function zoomout() {
    if (zoomNumber <= 0) {
    } else {
      var GFG = (document.getElementById("map") as HTMLCanvasElement) || null;
      var currWidth = GFG.clientWidth;

      GFG.style.width = currWidth - 100 + "px";
      zoomNumber = zoomNumber - 10;
      (
        (document.getElementById("zoom-number") as HTMLCanvasElement) || null
      ).textContent = zoomNumber + "%";
      if (zoomNumber < 50) {
        (
          (document.getElementById("map__wrapper") as HTMLCanvasElement) || null
        ).style.alignItems = "center";
      }
    }
  }

  return (
    <Fragment>
      <div className="dashboard-container__main__map">
        <div id="map__wrapper">
          <img id="map" src={String(map)} alt="map-mexico-city" />
        </div>

        <div className="zoom-button__wrapper">
          <button
            type="button"
            className="zoom-button"
            id="zoomout"
            onClick={zoomout} >
            <span>-</span>
          </button>
          <span id="zoom-number"></span>
          <button
            type="button"
            className="zoom-button"
            id="zoomin"
            onClick={zoomin}>
            <span>+</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
