import React, { useState } from "react";
import FoodJournal from "../components/FoodJournal/Components/FoodJournal";
import Favorites from "./Favorites";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

const JournalContainer = () => {
  const [active, setActive] = useState(true);
  return (
    <Tabs className="mt-5" activeLinkStyle={{}}>
      <div style={{ width: "50vw" }}>
        <TabLink
          to="tab1"
          onClick={() => setActive(!active)}
          className={`font-weight-bold border-0 rounded ${
            active ? "btn-secondary" : "bg-light"
          } `}
        >
          <h4 className="font-weight-light">Food Journal</h4>
        </TabLink>
        <TabLink
          to="tab2"
          onClick={() => setActive(!active)}
          className={`font-weight-bold border-0 rounded ${
            !active ? "btn-secondary" : "bg-light"
          } `}
        >
          <h4 className="font-weight-light">Favorites</h4>
        </TabLink>
      </div>

      <TabContent className="foodJournal-tab flex-sm-column" for="tab1">
        <FoodJournal />
      </TabContent>
      <TabContent for="tab2">
        {" "}
        <Favorites />{" "}
      </TabContent>
    </Tabs>
  );
};

export default JournalContainer;
