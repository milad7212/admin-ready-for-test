import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import {
  AiOutlineDelete,
  AiFillPlusSquare,
  AiFillCloseCircle,
} from "react-icons/ai";
import classNames from "classnames";

import { useForm } from "react-hook-form";

function EditTest({ data, closePanel }) {
  const {
    _id,
    question,
    correctAnswer,
    option1,
    option2,
    option3,
    option4,
    paragraph,
    pageNumber,
    book,
    image,
    explanation,
    field,
    subField,
    year,
    month,
    number,
  } = data;

  const {
    inputs,
    handleInputChange,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-gray-400 flex justify-center ">
        <div
          key={_id}
          className="grid grid-cols-[1fr_100px] gap-2 relative w-2/3  bg-[#d3d3d3] shadow-md font-bold text-[#333333]  rounded-lg my-6 p-3"
        >
          <div className="">
            <textarea
              placeholder="صورت سوال "
              rows={3}
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={question}
              {...register("question")}
            />

            <textarea
              placeholder="گزینه 1"
              rows={1}
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={option1}
              {...register("option1")}
            />
            <textarea
              placeholder="گزینه 2"
              rows={1}
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={option2}
              {...register("option2")}
            />
            <textarea
              placeholder="گزینه 3"
              rows={1}
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={option3}
              {...register("option3")}
            />
            <textarea
              placeholder="گزینه 4"
              rows={1}
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={option4}
              {...register("option4")}
            />

            <div className="flex gap-4 mt-5 justify-around">
              <input
                type="text"
                placeholder="بند"
                className="w-full p-4 rounded-lg bg-gray-200 shadow"
                defaultValue={paragraph}
                {...register("paragraph")}
              />

              <input
                type="text"
                placeholder="شماره صفحه"
                className="w-full p-4 rounded-lg bg-gray-200 shadow"
                defaultValue={pageNumber}
                {...register("pageNumber")}
              />

              <input
                type="text"
                placeholder="کتاب"
                className="w-full p-4 rounded-lg bg-gray-200 shadow"
                defaultValue={book}
                {...register("book")}
              />
            </div>
            <div className="flex my-4">
              <p className="">{image}</p>
              <p className="">{explanation}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2  ">
            <input
              type="text"
              placeholder="شماره سوال"
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={number}
              {...register("number")}
            />

            <input
              type="text"
              placeholder="رشته "
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={field}
              {...register("field")}
            />

            <input
              type="text"
              placeholder="گرایش "
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={subField}
              {...register("subField")}
            />

            <input
              type="text"
              placeholder="سال "
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={year}
              {...register("year")}
            />

            <input
              type="text"
              placeholder="ماه "
              className="w-full p-4 rounded-lg bg-gray-200 shadow"
              defaultValue={month}
              {...register("month")}
            />
          </div>
          <div className="flex pr-4 items-center gap-8">
            <FiEdit
              size={20}
              className="cursor-pointer hover:scale-95 active:scale-125 duration-200"
            />
            <AiOutlineDelete
              size={20}
              className="cursor-pointer  hover:scale-95 active:scale-125 duration-200"
            />
            <button
              type="submit"
              className="mr-auto px-4 py-2  active:scale-95  bg-[#4299e1] text-white font-bold  border rounded-lg"
            >
              اعمال
            </button>
          </div>
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
            <AiFillPlusSquare
              size={30}
              className="text-gray-500 cursor-pointer  hover:scale-95 active:scale-125 duration-200"
            />
          </div>
        </div>
        <div className=" absolute top-5 left-5">
          <AiFillCloseCircle
            size={30}
            className="text-gray-200 hover:scale-95 active:scale-125 duration-150 ease-out cursor-pointer"
            onClick={() => closePanel()}
          />
        </div>
      </div>
    </form>
  );
}

export default EditTest;

const OptionTest = ({ text, isAnswer }) => {
  const classCorrectAnswer = (isAnswer) =>
    classNames("w-4", "h-4", "rounded-md", "ml-2", {
      "bg-green-600": isAnswer,
    });
  return (
    <div className="flex items-center  my-2 ">
      <div className={` ${classCorrectAnswer(isAnswer)}`} />
      <p className="my-1">{text}</p>
    </div>
  );
};
