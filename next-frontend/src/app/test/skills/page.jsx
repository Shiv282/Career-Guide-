"use client";
import ProgressBar from "../progressBar";
import Box from "@mui/material/Box";
import { useState } from "react";
import skills from "./skills";
export default function Home() {
  function storeSkills() {
    localStorage.setItem('skillSet',mySkills);
    window.location.href = "http://localhost:3000/test/writing"
  }

  function addSkill(skill, index) {
    setAllSkills((allSkills) => {
      const updatedAllSkills = [...allSkills];
      updatedAllSkills.splice(index, 1);
      return updatedAllSkills;
    });
  
    setMySkills((mySkills) => {
      const updatedMySkills = [...mySkills, skill];
      return updatedMySkills;
    });
  }

  function removeSkill(skill, index) {
    setMySkills((mySkills) => {
      const updatedMySkills = [...mySkills];
      updatedMySkills.splice(index, 1);
      return updatedMySkills;
    });
  
    setAllSkills((allSkills) => {
      const updatedAllSkills = [...allSkills, skill];
      return updatedAllSkills;
    });
  }

  const [allSkills, setAllSkills] = useState(skills);
  const [mySkills, setMySkills] = useState([]);

  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-1/5 mx-4">
        <ProgressBar activeSection={3}/>
      </div>

      <div className="w-4/5 mx-4">
        <Box className="bg-white  px-5 py-9 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-black underline underline-offset-8 mb-5">
              Select your skills
            </h1>
            <div>
              <button
                onClick={storeSkills}
                className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg"
              >
                Complete
              </button>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <h1 className="text-black text-xl font-bold">My skills</h1>
              <div className="border min-h-20 flex flex-wrap justify-center gap-4 p-4">
                {mySkills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      removeSkill(skill, index);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {skill} <span className="text-red-400 font-bold">x</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <h1 className="text-black text-l font-bold">
                Choose your skills
              </h1>

              <div className="border min-h-20 flex flex-wrap justify-center gap-4 p-4">
                {allSkills.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      addSkill(skill, index);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {skill} <span className=" font-bold">+</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </div>
    </main>
  );
}
