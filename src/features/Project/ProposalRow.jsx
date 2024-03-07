import React, { useState } from "react";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import { HiOutlinePencilSquare } from "react-icons/hi2";

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
function ProposalRow({ proposal, index }) {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{proposal.description}</td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td className="flex justify-center">
        <Modal
          title="تغییر وضعیت درخواستی"
          open={isShowModal}
          onClose={() => setIsShowModal(!isShowModal)}
        >
          <ChangeProposalStatus
            onClose={() => setIsShowModal(!isShowModal)}
            proposalId={proposal._id}
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

export default ProposalRow;
