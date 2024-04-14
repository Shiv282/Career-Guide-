"use client"
import ProgressBar from "../progressBar";
import QuestionProgress from "../questionProgress";
import QuestionCard from "../QuestionCard";
import Box from "@mui/material/Box";
import { useState } from "react";

const questions = [
    {
        "question" : "1 + 1",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "2 + 2",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "3 + 3",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "4+4",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "5+5",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "6+6",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "7+7",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "8+8",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "9+9",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    },
    {
        "question" : "10+10",
        "op1" : "2",
        "op2" : "1",
        "op3" : "3",
        "op4" : "0",
        "ans" : " "
    }
]

export default function Home() {

    const [activeQuestion, setActiveQuestion] = useState(0);

    function storeCodingSkills(){
        var answers = [];
        questions.map((q)=> answers.push(q.ans));
        localStorage.setItem('Coding',answers);
        window.location.href = "http://localhost:3000/test/skills";
    }

  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-1/5 mx-4">
        <ProgressBar activeSection={2}/>
      </div>

      <div className="w-4/5 mx-4">
        <Box className="bg-white  px-5 py-9 rounded-lg">
            <div className="flex justify-between">
            <h1 className="text-black text-2xl font-black underline underline-offset-8 mb-5">
            Coding Round
            </h1>
            <div onClick={storeCodingSkills} className={(activeQuestion===9)?"":"hidden"}>
              <button className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg">
                Complete
              </button>
            </div>
        </div>
        

        <div>
            <QuestionCard question={questions[activeQuestion]}/>
        </div>

        <div className="flex items-center justify-center">
        <QuestionProgress setActiveQuestion={setActiveQuestion}/>
        </div>
        
        </Box>
      </div>
    </main>
  );
}
