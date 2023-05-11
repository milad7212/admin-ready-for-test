"use client";

import { useEffect, useState } from "react";
import { getAllTest } from "services/testService";
import classNames from "classnames";
import FieldFilter from "components/filters/FieldFilter";
import SubFieldFilter from "components/filters/SubFieldFilter";
import YearFilter from "components/filters/YearFilter";
import MonthFilter from "components/filters/MonthFilter";
import BookFilter from "components/filters/BookFilter";
import ImageFilter from "components/filters/ImageFilter";
import YearOrdering from "components/ordering/YearOrdering";
import MonthOrdering from "components/ordering/MonthOrdering";
import NumberOrdering from "components/ordering/NumberOrdering";
import axios from "axios";
import BookOrdering from "components/ordering/BookOrdering";

import { FiEdit } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineDelete, AiFillPlusSquare } from "react-icons/ai";
import EditTest from "components/EditTest";

export default function Home() {
  const [allTest, setAllTest] = useState([]);
  const [orderYear, setOrderYear] = useState(0);
  const [orderMonth, setOrderMonth] = useState(0);
  const [orderBook, setOrderBook] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  const [showLove, setShowLove] = useState(0);
  const [filterParameter, setFilterParameter] = useState({
    filter_field: "",
    filter_subField: "",
    filter_year: "",
    filter_month: "",
    filter_book: "",
  });
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [dataForEdit, setDataForEdit] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { data: allTest }: any = await getAllTest();

      setAllTest(allTest);
    }

    fetchData();
  }, []);
  const closePanel = () => {
    setDataForEdit({ show: false });
  };

  const handelOrdering = async () => {
    const { data } = await axios.get(
      "http://node.readyfortest.ir/admin/test/order",
      {
        params: {
          ...filterParameter,
          year: orderYear,
          month: orderMonth,
          book: orderBook,
          number: orderNumber,
        },
      }
    );

    setAllTest(data);
  };

  const deleteTest = async (id) => {
    const { data } = axios.delete(
      `http://node.readyfortest.ir/admin/test/delete/${id}`
    );
  };

  return (
    <>
      <div className=" py-2 flex justify-center text-sm font-bold bg-gray-200">
        {showLove >7 ? <p onClick={()=>setShowLove(0)} className="select-none animate-bounce">سارا دوستت دارم :)</p>
        :
        <AiFillHeart onClick={()=>{
          setShowLove(e=>e+1)
        }} className="h-6 w-6 text-gray-400 hover:text-red-500  active:scale-90 cursor-pointer duration-95 transition-all " />

      }
      </div>
      <div className="select-none pt-0 p-4 px-6 bg-gray-200">
        <div className="flex gap-4 mb-2 bg-gray-100 p-3 rounded-lg items-center">
          <p className="font-bold">فیلتر : </p>
          <div className="flex flex-wrap flex-1 justify-around">
            <FieldFilter
              value={filterParameter}
              setValue={setFilterParameter}
            />
            <SubFieldFilter
              value={filterParameter}
              setValue={setFilterParameter}
            />
            <YearFilter value={filterParameter} setValue={setFilterParameter} />
            <MonthFilter
              value={filterParameter}
              setValue={setFilterParameter}
            />
            <BookFilter value={filterParameter} setValue={setFilterParameter} />
            <ImageFilter
              value={filterParameter}
              setValue={setFilterParameter}
            />
          </div>
        </div>

        <div className="flex gap-4 my-4 bg-gray-100 p-3 rounded-lg items-center">
          <p className="font-bold">مرتب سازی : </p>
          <div className="flex flex-wrap flex-1 gap-4 items-center">
            <YearOrdering setValue={setOrderYear} />
            <MonthOrdering setValue={setOrderMonth} />
            <NumberOrdering setValue={setOrderNumber} />
            <BookOrdering setValue={setOrderBook} />
            <button
              onClick={handelOrdering}
              className=" mr-6 px-8 py-1 active:scale-95  bg-[#4299e1] text-white font-bold  border rounded-lg"
            >
              اعمال
            </button>
            <div className="mr-auto font-black mx-4 text-xl">
              {allTest.length}
            </div>
          </div>
        </div>

        {allTest.map((data, index) => (
          <>
            <div
              key={data._id}
              className="grid grid-cols-[1fr_100px] relative  bg-[#d3d3d3] shadow-md font-bold text-[#333333]  rounded-lg my-6 p-3"
            >
              <div className="">
                <div className="my-3 flex items-center">
                  <p className="ml-2">{index + 1}-</p>
                  <p className="">{data.question}</p>
                </div>
                <OptionTest
                  text={data.option1}
                  isAnswer={data.correctAnswer == 1}
                />
                <OptionTest
                  text={data.option2}
                  isAnswer={data.correctAnswer == 2}
                />
                <OptionTest
                  text={data.option3}
                  isAnswer={data.correctAnswer == 3}
                />
                <OptionTest
                  text={data.option4}
                  isAnswer={data.correctAnswer == 4}
                />
                <div className="flex mt-5 justify-around">
                  <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                    {" "}
                    {data.paragraph}
                  </p>
                  <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                    {" "}
                    {data.pageNumber}
                  </p>
                  <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                    {" "}
                    {data.book}
                  </p>
                </div>
                <div className="flex my-4">
                  <p className="">{data.image}</p>
                  <p className="">{data.explanation}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2  ">
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {data.number}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {data.field}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {data.subField}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {data.year}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {data.month}
                </p>
              </div>
              <div className="flex pr-4 items-center gap-8">
                <FiEdit
                  onClick={() => {
                    setDataForEdit({ show: true, data });
                  }}
                  size={20}
                  className="cursor-pointer hover:scale-95 active:scale-125 duration-200"
                />
                <AiOutlineDelete
                  onClick={() => deleteTest(data._id)}
                  size={20}
                  className="cursor-pointer  hover:scale-95 active:scale-125 duration-200"
                />
              </div>
              {/* <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                <AiFillPlusSquare size={30} className="text-gray-500 cursor-pointer  hover:scale-95 active:scale-125 duration-200" />
              </div> */}
            </div>
          </>
        ))}
      </div>
      {dataForEdit?.show && (
        <EditTest data={dataForEdit.data} closePanel={closePanel} />
      )}
    </>
  );
}

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
