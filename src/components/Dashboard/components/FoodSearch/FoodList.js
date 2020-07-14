import React, { useState } from "react";
import { useSelector } from "react-redux";
const FoodList = () => {
  const [label, setLabel] = useState("Serving Size");
  const { searchError, isFetching, items } = useSelector((state) => state.auth);
  return (
    <div>
      <h3 className="pt-4 d-flex justify-content-center">Results</h3>
      {isFetching ? (
        <div className="loading d-flex justify-content-center">
          <h4>Searching...</h4>
        </div>
      ) : (
        items.map((list) => (
          <>
            <div className="d-flex justify-content-center my-2">
              <h5 className="mr-5" style={{ width: "45%" }} key={list.foodId}>
                {list.food.label
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join()
                  .replace(/,/g, " ")}
              </h5>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dLabel"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {label}
                </button>
                <div className="dropdown-menu" aria-labelledby="dLabel">
                  {list.measures.map((measure) => (
                    <a key={measure.uri} className="dropdown-item" href="#">
                      {measure.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
};

export default FoodList;
