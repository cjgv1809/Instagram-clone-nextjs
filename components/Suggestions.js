import faker from "faker";
import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // const suggestions = [...Array(5)].map((_, i) => ({
    //   ...faker.helpers.contextualCard(),
    //   id: i,
    // }));
    function fetchData() {
      fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((results) => {
          setSuggestions(results.results);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semibold text-gray-600">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile, i) => (
        <Suggestion key={i} profile={profile} />
      ))}
    </div>
  );
}

export default Suggestions;
