import { useState,useEffect } from "react";
export default function QuestionCard({ question }) {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption(question.ans || "");
  }, [question]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    question.ans = event.target.value;
  };
  
  return (
    <div className="flex py-2 items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-black mb-4">{question.question}</h1>

        <div className="flex flex-col space-y-4">
          <label className="flex text-black items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <span className="px-2">{question.op1}</span>
          </label>

          <label className="flex text-black items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <span className="px-2">{question.op2}</span>
          </label>

          <label className="flex text-black items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <span className="px-2">{question.op3}</span>
          </label>

          <label className="flex text-black items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
            <span className="px-2">{question.op4}</span>
          </label>
        </div>

        <p className="mt-4 text-black">Selected Option: {question.ans}</p>
      </div>
    </div>
  );
}
