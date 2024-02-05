import React from "react";
import { useProjectsOwner } from "./useProjectsOwner";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";

export default function ProjectTable() {
  const { isLoading, projects } = useProjectsOwner();
  console.log(projects);
  if (isLoading) return <Loader />;
  // if (!projects.length) return <Empty resoursName="پروژه" />;
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه‌ها</th>
            <th>دسته‌بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ‌ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        {/* <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.catgory.title}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
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
              <td>...</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}
