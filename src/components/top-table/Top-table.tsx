import { Fragment, useState } from "react";

import "./Top-table.css";
import "../../../node_modules/react-tooltip/dist/index.js";

import Components from "../../components";
import menuDots from "../../assets/menu-dots.svg";
import Tooltip from "@mui/material/Tooltip";
interface TopTableParams {
  id: string;
  name: string;
  provider: string;
  type: string;
  geomField: string;
  nrows: number;
  size: number;
  lastModified: number;
  schema?: {
    name: string;
    type: string;
  }[];
  tableRegion: string;
}

const tooltipText =
  "cartodb-on-gcp-pm-team.demo.riskanalysis_railroad_accidents";
const arrow = require("../../assets/icon@2x.png");

let handleButton = () => {
  console.log("test");
};

export default function TopTable(tableDetails: TopTableParams) {
  return (
    <Fragment>
      <div className="top-table_container">
        <div className="top-table__top">
          <div className="top-table_top">
            <img
              className="top-table_top__arrow-icon"
              src={String(arrow)}
              alt="arrow icon"
            />

            <div className="top-table_top__buttons">
              <Components.Button
                onClick={handleButton}
                type="text"
                leftIcon="addMap"
                text="Create map"
              />
              <Components.Button
                onClick={handleButton}
                type="text"
                leftIcon="tileset"
                text="Create tileset"
              />
              <Components.Button
                onClick={handleButton}
                type="text"
                leftIcon="table"
                text="Enrich table"
              />

              <img
                className="top-table_top__dots-menu"
                src={menuDots}
                alt="Icon menu dots"
              />
            </div>
          </div>
          <div className="top-table_top__breadcrumbs">
            <span className="top-table_top__breadcrumbs-text">
              Data explorer
            </span>
            <span className="top-table_top__breadcrumbs-text">bqconn</span>
            <span className="top-table_top__breadcrumbs-text">cartobq</span>
            <span className="top-table_top__breadcrumbs-text">cartobq</span>
            <div className="top-table_top__copy">
              <Tooltip title={tooltipText} placement="top" arrow>
                <span
                  className="top-table_top__copy-text"
                  data-tip="top-table_top__tooltip"
                >
                  Copy qualified name
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="top-table_bottom">
          <h2 className="table_bottom__title-h2">{tableDetails.id}</h2>
          <div className="top-table_bottom__data-details">
            <Components.Button
              onClick={handleButton}
              size="small"
              type="text"
              leftIcon="products"
              text="Table"
              style="tertiary"
            ></Components.Button>
            <span>BigQuery</span>
            <span>320M Rows</span>
            <span>7.6MB</span>
            <span>2 week ago</span>
            <Components.Button
              onClick={handleButton}
              size="small"
              type="text"
              leftIcon="map"
              text="2"
              style="tertiary"
            ></Components.Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
