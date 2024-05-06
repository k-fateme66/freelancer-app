import React from "react";
import Table from "../../../ui/Table";
import useUsers from "../../../hooks/useUsers";
import UsersRow from "./UsersRow";
import Loader from "../../../ui/Loader";
function UsersTable() {
  const { isLoading, users } = useUsers();
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="font-bold text-xl text-secondary-600 mb-8">
        لیست کاربران
      </h1>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام کاربر</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.body>
          {users.map((user, index) => (
            <UsersRow key={user._id} user={user} index={index} />
          ))}
        </Table.body>
      </Table>
    </div>
  );
}

export default UsersTable;
