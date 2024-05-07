import React from "react";
import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-secondary-600 text-sm">{user?.name}</span>
      <img
        src="/img/user.jpg"
        alt={user?.name}
        className="rounded-full w-8 h-8 object-cover object-center"
      />
    </div>
  );
}

export default UserAvatar;
