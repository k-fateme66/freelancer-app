import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import TextareaField from "../../ui/TextareaField";
import RHSelectField from "../../ui/RHSelectField";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onclose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: editTags,
  } = projectToEdit;
  let editValue = {};
  if (isEditSession) {
    editValue = { title, description, budget, category: category._id };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editValue });

  const [tags, setTags] = useState(editTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, creatProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: (data) => {
            onclose(), reset();
          },
        }
      );
    } else {
      creatProject(newProject, {
        onSuccess: (data) => {
          onclose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        errors={errors}
        requierd
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 5,
            message: "حداقل 5 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextareaField
        label="توضیحات"
        name="description"
        register={register}
        errors={errors}
        requierd
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        errors={errors}
        requierd
        validationSchema={{
          required: "بودجه ضروری است",
          min: 0,
        }}
      />
      <RHSelectField
        label={"دسته‌بندی"}
        options={categories}
        name="category"
        requierd
        register={register}
        errors={errors}
        validationSchema={{
          required: "انتخاب دسته‌بندی الزامی است",
        }}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} label="ددلاین" setDate={setDate} />
      {isCreating || isEditing ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}

export default CreateProjectForm;
