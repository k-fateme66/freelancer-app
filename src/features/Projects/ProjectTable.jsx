import React, { useState } from "react";
import { useProjectsOwner } from "./useProjectsOwner";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { HiOutlinePlus } from "react-icons/hi2";

export default function ProjectTable() {
  const { isLoading, projects } = useProjectsOwner();
  const [isShowAddProjectModal, setIsShowAddProjectModel] = useState(false);
  const renderTemplate = () => {
    if (isLoading) return <Loader />;
    if (!projects.length) return <Empty resoursName="پروژه" />;
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه‌ها</th>
          <th>دسته‌بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ‌ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
          <th>درخواست‌ها</th>
        </Table.Header>
        <Table.body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.body>
      </Table>
    );
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl"> لیست پروژه‌ها</h1>
        <button
          className="btn btn--primary flex items-center gap-x-1"
          onClick={() => setIsShowAddProjectModel(!isShowAddProjectModal)}
        >
          <HiOutlinePlus className="w-5 h5" />
          پروژه جدید
        </button>
        <Modal
          title=" ایجاد پروژه جدید"
          open={isShowAddProjectModal}
          onClose={() => setIsShowAddProjectModel(!isShowAddProjectModal)}
        >
          <CreateProjectForm
            onclose={() => setIsShowAddProjectModel(!isShowAddProjectModal)}
          />
        </Modal>
      </div>
      {renderTemplate()}
    </>
  );
}
