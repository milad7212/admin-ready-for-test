import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiFillCloseCircle } from "react-icons/ai";
import Cropper from 'react-easy-crop'
import { useForm } from "react-hook-form";
import axios from "axios";

function EditTest({ data, closePanel }) {
  const [imageTest, setImageTest] = useState(null)
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

  const updateTest = async (id, newData) => {
    let url = `https://node.readyfortest.ir/admin/test/update/${id}`;
    const { data } = await axios.put(url, newData);
  };
  
  const buildNewTest = async (dataBuild) => {
    let url = `https://localhost:3333/admin/test/add`;
    const { data } = await axios.post(url, dataBuild);
    closePanel();
  };

  const {
    inputs,
    handleInputChange,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (formData) => {
    updateTest(data._id, formData);
    closePanel();
  };
  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fixed z-50 left-0 right-0 top-0 bg-gray-400 flex  min-h-screen justify-center overflow-y-auto ">
        <div className="grid grid-cols-[1fr_100px] gap-2 relative w-2/3  bg-[#d3d3d3] shadow-md font-bold text-[#333333]  rounded-lg my-6 p-3">
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
            <div className="mt-2">
              <select className="p-2 rounded-lg" {...register("correctAnswer")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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
            type="file"
            onChange={e=>setImageTest(e.target.files[0])}
            />
            {imageTest && <Cropper image={imageTest}/>}
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
            <div className="mr-auto">
              <button
                type="submit"
                className="ml-8 px-4 py-2  active:scale-95  bg-[#4299e1] text-white font-bold  border rounded-lg"
              >
                ویرایش
              </button>
              <button
                onClick={handleSubmit(buildNewTest)}
                className=" px-4 py-2  active:scale-95  bg-[#4299e1] text-white font-bold  border rounded-lg"
              >
                جدید
              </button>
            </div>
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
