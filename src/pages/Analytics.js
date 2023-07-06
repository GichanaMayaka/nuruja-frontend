import React from "react";
import BasePage from "../components/BasePage";
import Reports from "../components/Reports";

function Analytics({ api }) {
  return (
    <BasePage>
      <Reports api={api} />
    </BasePage>
  );
}

export default Analytics;
