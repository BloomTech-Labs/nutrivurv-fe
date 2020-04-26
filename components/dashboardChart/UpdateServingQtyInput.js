import { useState } from "react";
import { adjustIntValuesonAnObject } from "../../lib/utils";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_FOOD_LOG_RECORD } from "../../gql/mutations";
import { GET_FOODJOURNAL_LOGS } from "../../gql/queries";

export default function UpdateServingQtyInput({ item, isEditing, setIsEditing }) {
  const [adjustedItem, setAdjustedItem] = useState(item);
  const { calories, fat, protein, carbs, food_string, id } = adjustedItem;
  const { loggedQty } = JSON.parse(food_string);
  const [qty, setQty] = useState(loggedQty);
  console.log(qty)
  const [foodString, setfoodString] = useState(JSON.parse(food_string));
  const [updateRecord] = useMutation(UPDATE_FOOD_LOG_RECORD);
  const variables = {
    id: id,
    calories: calories,
    fat: fat,
    protein: protein,
    carbs: carbs,
    food_string: JSON.stringify({ ...foodString, loggedQty: qty}),
  };

  const update = (e) => {
    e.preventDefault();
    const adjItem = adjustIntValuesonAnObject(
      adjustedItem,
      loggedQty,
      qty
    );
    setAdjustedItem(adjItem);
    /* 
        loggedQty doesn't update properly on UI with optimnisticResponse (or refecthQueries), 
        suspicion is that it needs to be moved to a field on the actual
        mutation in order to update properly
    */
    updateRecord({
      variables: variables,
      optimisticResponse: {
        __typename: "Mutation",
        updateDailyRecord: {
          id: id,
          __typename: "DailyRecord",
          calories: calories,
          fat: fat,
          protein: protein,
          carbs: carbs,
          food_string: JSON.stringify({ ...foodString, loggedQty: qty})
        },
      },
    });
    setIsEditing(!isEditing)
  };

  return (
    <form onSubmit={update}>
      <input
        type="number"
        placeholder="Entered adjusted servings"
        value={qty}
        onChange={(e) => setQty(parseInt(e.target.value))}
      />
      </form>
  );
}
