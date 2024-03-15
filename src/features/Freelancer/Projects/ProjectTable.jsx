import React, { useState } from "react";
import useProjects from "../../../hooks/useProjects";
import Loader from "../../../ui/Loader";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";
import ProjectHeader from "./ProjectHeader";

function ProjectTable() {
  const { isLoading, projects } = useProjects();
  const renderTemplate = () => {
    if (isLoading) return <Loader />;
    if (!projects.length) return <Empty resoursName="پروژه" />;
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه‌ها</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
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
      <ProjectHeader />
      {renderTemplate()}
    </>
  );
}

export default ProjectTable;
