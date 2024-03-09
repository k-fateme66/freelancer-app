import React from "react";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/Authentication/UserAvatar";
import useUser from "../features/Authentication/useUser";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="border border-b border-secondary-200 bg-secondary-0 px-8 py-4">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
