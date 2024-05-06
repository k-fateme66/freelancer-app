import React, { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import ChangeUserStatus from "./ChangeUserStatus";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];
function UsersRow({ index, user }) {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[user.status].className}`}>
          {statusStyle[user.status].label}
        </span>
      </td>
      <td className="flex justify-center">
        <Modal
          title="تغییر وضعیت کاربر"
          open={isShowModal}
          onClose={() => setIsShowModal(!isShowModal)}
        >
          <ChangeUserStatus
            onClose={() => setIsShowModal(!isShowModal)}
            userId={user._id}
          />
        </Modal>
        <button
          className="btn btn--primary btn--xs flex justify-center items-center gap-x-1"
          onClick={() => setIsShowModal(!isShowModal)}
        >
          <HiOutlinePencilSquare className="w-4 h-4" />
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default UsersRow;
