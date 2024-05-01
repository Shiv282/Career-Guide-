'use client'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Chart from 'chart.js/auto';

export default function Home() {


  const [predictedCareer, setpredictedCareer] = useState();
  const [vakPredictedData, setvakPredictedData] = useState();
  const [skillSetPredictionData, setskillSetPredictionData] = useState();
  var newChart;
    


    useEffect(()=>{
        setpredictedCareer(JSON.parse(localStorage.getItem("predictedCareer")).data);
        var vakData = JSON.parse(localStorage.getItem("vakPredictedData"));
        setvakPredictedData(vakData);
        var labels = [];
        var values = []
        vakData.forEach(vak => {
          console.log(vak);
          labels.push(vak[0]);
          values.push(vak[1]);
        });
        setskillSetPredictionData(JSON.parse(localStorage.getItem("skillSetPredictionData")));
        var options = {
          type: 'radar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Score',
                data: values,
                borderColor: 'white',
              }
            ]
          },
          options: {
            
            scale: {
              ticks: {
                max: 40,
                min: 0,
              },
              gridLines: {
                circular: true,
                lineWidth: 3
              }
            }
          }
        }
        if(document.getElementById('chartJSContainer')){
          var ctx = document.getElementById('chartJSContainer').getContext('2d');
          if(!newChart){
            newChart = new Chart(ctx, options);
          }
        }
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
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-2xl font-black mb-5">
                {vakPredictedData && vakPredictedData.map((item) => (
                  <p>{item[0]} --- {item[1]}</p>
                ))}
              </h1>
                <div className="py-20 bg-gradient-to-l from-cyan-500 to-blue-500 shadow-xl flex justify-center">
                <canvas id="chartJSContainer" width="600" height="400"></canvas>
                </div>
            </div>
          </div>
          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-center">
              <h1 className="text-black text-xl font-black mb-5">Career prediction based on your skills:</h1>
            </div>
            <div className="flex justify-center">
            <h1 className="text-black text-xl font-black mb-5">
              {skillSetPredictionData && skillSetPredictionData.map((item) => (
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
