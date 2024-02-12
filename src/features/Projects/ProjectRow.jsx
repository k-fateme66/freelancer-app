import React, { useState } from "react";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersComma } from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";
import Table from "../../ui/Table";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";

function ProjectRow({ project, index }) {
  const [isShowEditModal, setIsShowEditModel] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModel] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>
        {toPersianNumbersComma(project.budget)}{" "}
        <span className="text-xs">ریال</span>
      </td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span
              className="badge badge--secondary text-secondary-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--secondary">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsShowEditModel(!isShowEditModal)}>
              <HiOutlinePencil className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              open={isShowEditModal}
              title={`ویرایش ${project.title}`}
              onClose={() => setIsShowEditModel(!isShowEditModal)}
            >
              <CreateProjectForm />
            </Modal>
          </>
          <>
            <button onClick={() => setIsShowDeleteModel(!isShowDeleteModal)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isShowDeleteModal}
              title={`حذف ${project.title}`}
              onClose={() => setIsShowDeleteModel(!isShowDeleteModal)}
            >
              <ConfirmDelete
                nameSource={project.title}
                onClose={() => setIsShowDeleteModel(!isShowDeleteModal)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsShowDeleteModel(!isShowDeleteModal),
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
