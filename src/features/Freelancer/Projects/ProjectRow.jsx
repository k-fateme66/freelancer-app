import { useState } from "react";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../Proposals/CreateProposalForm";
const statusStyle = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};
function ProjectRow({ project, index }) {
  const [isShowModal, setIsShowModel] = useState(false);
  const { title, budget, deadline, status } = project;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>
        {toPersianNumbersComma(budget)} <span className="text-xs">ریال</span>
      </td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`px-3 badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td className="">
        <button onClick={() => setIsShowModel(!isShowModal)}>
          <HiOutlineDocumentPlus className="w-5 h-5 text-primary-900" />
        </button>
        <Modal
          onClose={() => setIsShowModel(!isShowModal)}
          title={`ایجاد درخواست جدید برای ${title}`}
          open={isShowModal}
        >
          <CreateProposalForm
            projectId={project._id}
            onclose={() => setIsShowModel(!isShowModal)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
