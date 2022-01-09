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
      fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((results) => {
          setSuggestions(results.results);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 select-none">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile, i) => (
        <Story
          key={i}
          img={profile.picture.thumbnail}
          username={profile.login.username}
        />
      ))}
    </div>
  );
}

export default Stories;
