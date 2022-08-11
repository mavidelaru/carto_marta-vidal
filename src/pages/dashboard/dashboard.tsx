import React, { Fragment } from "react";

import "./dashboard.css";

import Components from "../../components";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="dashboard-container">
        <header className="dashboard-container__header">
          <Components.DocHeader />
        </header>
        <aside className="dashboard-container__aside">
          <Components.Sidebar></Components.Sidebar>
        </aside>
        <main className="dashboard-container__main">
          <div>
            <Components.TopTable
              id="riskanalysis_railroad_accidents"
              name="Test "
              provider="lol"
              type="test"
              geomField="r"
              nrows={4}
              size={10}
              lastModified={6}
              tableRegion="lol"
            ></Components.TopTable>
          </div>

          <div className="dashboard-container__tab"></div>

          <Components.Tabs>
            <Components.Tab title="Map">
              <Components.Map></Components.Map>
            </Components.Tab>
            <Components.Tab title="Data Preview">
              <Components.Table></Components.Table>
            </Components.Tab>
          </Components.Tabs>
        </main>
      </div>
    </Fragment>
  );
}
