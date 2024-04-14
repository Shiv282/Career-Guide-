"use client";
import ProgressBar from "../progressBar";
import Box from "@mui/material/Box";
export default function Home() {
  function storeWriting() {
    var text = document.getElementById('writing').value;
    localStorage.setItem('writing',text);
    window.location.href = "http://localhost:3000/test/final"
  }




  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-1/5 mx-4">
        <ProgressBar activeSection={4}/>
      </div>

      <div className="w-4/5 mx-4">
        <Box className="bg-white  px-5 py-9 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-black underline underline-offset-8 mb-5">
              Writng Test
            </h1>
            <div>
              <button
                onClick={storeWriting}
                className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg"
              >
                Complete
              </button>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <h1 className="text-black text-xl font-bold">Please fill about 100 words</h1>
              <div className="border min-h-20 flex flex-wrap justify-center gap-4 p-4">
                <textarea className="text-black" name="writing" id="writing" cols="300" rows="10"></textarea>
              </div>
            </div>
          </div>

          
        </Box>
      </div>
    </main>
  );
}
