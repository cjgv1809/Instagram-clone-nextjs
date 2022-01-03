function Suggestion({ profile }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <img
        src={profile.picture.thumbnail}
        alt=""
        className="w-10 h-10 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{profile.login.username}</h2>
        <h3 className="text-xs text-gray-400">
          {profile.name.first} {profile.name.last}
        </h3>
      </div>
      <button className="text-blue-500 text-xs font-bold ml-2">Follow</button>
    </div>
  );
}

export default Suggestion;
