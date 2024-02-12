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
function CreateProjectForm({ onclose }) {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { categories } = useCategories();
  const { isCreating, creatProject } = useCreateProject();
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    creatProject(newProject, {
      onSuccess: (data) => {
        onclose();
        reset();
      },
    });
  };

  console.log(categories);

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
      {isCreating ? (
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
