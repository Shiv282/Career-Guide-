'use client'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

export default function Home() {

    const [predictedCareer, setpredictedCareer] = useState();
    const [vakPredictedData, setvakPredictedData] = useState();
    const [skillSetPredictionData, setskillSetPredictionData] = useState();

    useEffect(()=>{
        setpredictedCareer(JSON.parse(localStorage.getItem("predictedCareer")).data);
        setvakPredictedData(localStorage.getItem("vakPredictedData").split(",")[0]);
        setskillSetPredictionData(JSON.parse(localStorage.getItem("skillSetPredictionData")));
    },[])
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="mx-4">
        <Box className="bg-white  px-5 py-9 rounded-lg min-w-[1020px]">
          <div className="flex justify-center">
            <h1 className="text-black text-2xl font-black underline underline-offset-8 mb-5">Result</h1>
          </div>
          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-black text-xl font-black mb-5">Career Predicted based on IQ, coding and answers to the final Qs:</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-black text-2xl font-black mb-5">{predictedCareer}</h1>
            </div>
          </div>
          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-black text-xl font-black mb-5">VAK Model prediction based on your writing section:</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-black text-2xl font-black mb-5">{vakPredictedData}</h1>
            </div>
          </div>
          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-black text-xl font-black mb-5">Career prediction based on your skills:</h1>
            </div>
            <div className="flex justify-center">
            <h1 className="text-black text-xl font-black mb-5">
              {skillSetPredictionData.map((item) => (
                  <p>{item.label}</p>
                ))}
                </h1>
            </div>
          </div>
        </Box>
      </div>
    </main>
  );
}
