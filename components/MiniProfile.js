import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10 max-w-xs">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src={session?.user?.image}
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">
          Welcome to Instagram{" "}
          <span className="font-bold text-gray-500">
            {(session?.user?.name).split(" ")[0]}
          </span>
        </h3>
      </div>

      <button className="text-blue-500 text-sm font-semibold" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
