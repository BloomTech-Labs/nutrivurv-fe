import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edamam } from "../../../../state/slices/slices";
import { useForm } from "react-hook-form";
import FoodList from "./FoodList";
const FoodSearch = () => {
  const [search, setSearch] = useState("");
  const [label, setLabel] = useState("Serving Size");
  const dispatch = useDispatch();

  const { searchError, isFetching, items } = useSelector((state) => state.auth);

  const { register, errors, handleSubmit } = useForm({});

  const onSubmit = () => {
    dispatch(Edamam(encodeURIComponent(search)));
  };

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  console.log("items", items);

  return (
    <div className="foodLog row d-flex justify-content-center mt-5">
      <h3 className="p-4">Add Food to your Daily Log</h3>
      <form
        className="col-12 d-flex pl-5 justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Search a Food Item"
          value={search}
          onChange={handleChanges}
          className="col-5 mx-3 form-control form-control-lg"
        />
        <button type="submit" className="col-2 btn btn-primary">
          Search
        </button>
      </form>
      <div className="flex-column align-items-center w-100">
        <FoodList />
      </div>
    </div>
  );
};

export default FoodSearch;
