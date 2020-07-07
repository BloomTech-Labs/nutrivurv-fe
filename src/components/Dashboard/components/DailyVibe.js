import React, { useState, useEffect } from "react";
import axios from "axios";

const DailyVibe = () => {
  const [vibe, setVibe] = useState("");
  const [author, setAuthor] = useState("");

  const vibesApi = async () => {
    let arrayOfVibes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfVibes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setVibe(arrayOfVibes.content);
      setAuthor(arrayOfVibes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    vibesApi();
  }, []);
  return (
    <div>
      <p className="text-secondary pr-1">
        {vibe} <span> - {author}</span>
      </p>
    </div>
  );
};

export default DailyVibe;
