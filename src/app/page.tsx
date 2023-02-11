"use client";

import { useEffect, useState } from "react";
import { getAllTest } from "services/testService";
import classNames from "classnames";

export default function Home() {
  const [allTest, setAllTest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data: allTest }: any = await getAllTest();

      setAllTest(allTest);
    }

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-gray-200">
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
          },
          index
        ) => (
          <>
            <div
              key={_id}
              className=" bg-[#d3d3d3] shadow-md font-bold text-[#333333]  rounded-lg my-4 p-2"
            >
              
              <div className="my-3 flex items-center"> 
              <p className="ml-2">{index+1}-</p>
              <p className="">{question}</p>
              </div>
              <OptionTest text={option1} isAnswer={correctAnswer == 1} />
              <OptionTest text={option2} isAnswer={correctAnswer == 2} />
              <OptionTest text={option3} isAnswer={correctAnswer == 3} />
              <OptionTest text={option4} isAnswer={correctAnswer == 4} />

              <p className="my-1"> {paragraph}</p>
              <p className="my-1"> {pageNumber}</p>
              <p className="my-1"> {book}</p>
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
