"use client";
import ProgressBar from "../progressBar";
import Box from "@mui/material/Box";
export default function Home() {

  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-1/5 mx-4">
        <ProgressBar activeSection={5}/>
      </div>

      <div className="w-4/5 mx-4">
        <Box className="bg-white  px-5 py-9 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-black underline underline-offset-8 mb-5">
              Final questions
            </h1>
            <div>
              <button
                className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg"
              >
                Complete Test
              </button>
            </div>
          </div>

          <div>
            <div className="mt-5">
              
            </div>
          </div>

          
        </Box>
      </div>
    </main>
  );
}
