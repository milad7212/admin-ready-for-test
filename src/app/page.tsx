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

export default function Home() {
  const [allTest, setAllTest] = useState([]);
  const [orderYear, setOrderYear] = useState(0);
  const [orderMonth, setOrderMonth] = useState(0);
  const [orderBook, setOrderBook] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data: allTest }: any = await getAllTest();

      setAllTest(allTest);
    }

    fetchData();
  }, []);

  const handelOrdering = async () => {
    
    const { data } = await axios.get("http://localhost:3333/admin/test/order", {
      params: {
        year: orderYear,
        month: orderMonth,
        book: orderBook,
      },
    });

    setAllTest(data);
  };

  return (
    <div className="p-4 px-6 bg-gray-200">
      <div className="flex gap-4 my-2 bg-gray-100 p-3 rounded-lg items-center">
        <p className="font-bold">فیلتر : </p>
        <div className="flex flex-1 justify-around">
          <FieldFilter />
          <SubFieldFilter />
          <YearFilter />
          <MonthFilter />
          <BookFilter />
          <ImageFilter />
        </div>
      </div>

      <div className="flex gap-4 my-4 bg-gray-100 p-3 rounded-lg items-center">
        <p className="font-bold">مرتب سازی : </p>
        <div className="flex flex-1 gap-4">
          <YearOrdering setValue={setOrderYear} />
          <MonthOrdering setValue={setOrderMonth} />
          <NumberOrdering setValue={setOrderBook} />
          <button onClick={handelOrdering} className="">
            اعمال
          </button>
        </div>
      </div>

      {allTest.map(
        (
          {
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
          },
          index
        ) => (
          <>
            <div
              key={_id}
              className="grid grid-cols-[1fr_100px]  bg-[#d3d3d3] shadow-md font-bold text-[#333333]  rounded-lg my-4 p-3"
            >
              <div className="">
                <div className="my-3 flex items-center">
                  <p className="ml-2">{index + 1}-</p>
                  <p className="">{question}</p>
                </div>
                <OptionTest text={option1} isAnswer={correctAnswer == 1} />
                <OptionTest text={option2} isAnswer={correctAnswer == 2} />
                <OptionTest text={option3} isAnswer={correctAnswer == 3} />
                <OptionTest text={option4} isAnswer={correctAnswer == 4} />
                <div className="flex mt-5 justify-around">
                  <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                    {" "}
                    {paragraph}
                  </p>
                  <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                    {" "}
                    {pageNumber}
                  </p>
                  <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                    {" "}
                    {book}
                  </p>
                </div>
                <div className="flex my-4">
                  <p className="">{image}</p>
                  <p className="">{explanation}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2  ">
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {number}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {field}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {subField}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {year}
                </p>
                <p className="bg-gray-200 p-2 rounded-lg shadow-sm text-center">
                  {month}
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
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
