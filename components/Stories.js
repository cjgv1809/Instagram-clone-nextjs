import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    // const suggestions = [...Array(20)].map((_, i) => ({
    //   ...faker.helpers.contextualCard(),
    //   id: i

    // }));
    function fetchData() {
      fetch("https://uifaces.co/api?limit=20", {
        method: "GET",
        headers: {
          "X-API-KEY": "93EE7951-88AC43C1-91002783-C321ED0E",
        },
      })
        .then((res) => res.json())
        .then((results) => {
          setSuggestions(results);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  // new array with users that have names
  const usernames = suggestions.filter((profile) => profile.name !== "");

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 select-none">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {usernames.map((profile, i) => (
        <Story key={i} img={profile.photo} username={profile.name} />
      ))}
    </div>
  );
}

export default Stories;
