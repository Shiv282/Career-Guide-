"use client";
import ProgressBar from "../progressBar";
import Box from "@mui/material/Box";
import axios from "axios";
import { careers,books,subjects,certifications,workshops,companies,coding_ans,iq_ans } from "../data";
export default function Home() {

  async function careerPredict(){
    var result = [];
    var coding_marked = localStorage.getItem('Coding').split(',');
    var iq_marked = localStorage.getItem('IQ').split(',');
    var writing = localStorage.getItem('writing');
    var coding = 0;
    var iq = 0;
    for(var i=0;i<10;i++){
      if(coding_marked[i] == coding_ans[i]){
        coding++;
      }
      if(iq_marked[i] == iq_ans[i]){
        iq++;
      }
    }
    result.push(iq);
    result.push(coding);
    var ids=['hackathons','public_speaking','self_learning','extra_courses','senior_input','worked_in_teams','introvert','read_write','memory','hard_smart','field_of_int','subjects','books','certifications','workshops','companies','careers'];
    for(var i=0;i<ids.length;i++){
      if(ids[i] == 'hard_smart' || ids[i] == "field_of_int"){
        if(document.getElementById(ids[i]).value == '0'){
          result.push('0');
          result.push('1');
        }else{
          result.push('1');
          result.push('0');
        }
      }else{
        result.push(document.getElementById(ids[i]).value || '0');
      }
    }
    console.log(result);
    const response = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/careerPredict",
      data: {
        data: result
      },
    });
    console.log(response);
    localStorage.setItem('predictedCareer',JSON.stringify(response));

    const vakResponse = await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/vakModel",
      data: {
        data: [writing]
      },
    });
    console.log(vakResponse.data);
    localStorage.setItem('vakPredictedData',JSON.stringify(vakResponse.data));

    
let data = JSON.stringify({
  "inputs": "I like you. I love you"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-inference.huggingface.co/models/fazni/distilbert-base-uncased-career-path-prediction',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer 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'
  },
  data : data
};

const skillSetPredictionData = await axios.request(config);
console.log(skillSetPredictionData.data[0]);
localStorage.setItem('skillSetPredictionData',JSON.stringify(skillSetPredictionData.data[0]));
window.location.href = "http://localhost:3000/test/result"

  }

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
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Number of hackathons : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <input id="hackathons" type="number" className="border text-black"/>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Public speaking : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="public_speaking" id="public_speaking" className="border text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Self Learning : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="self_learning" id="self_learning" className="border text-black">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Extra Courses : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="extra_courses" id="extra_courses" className="border text-black">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Inputs from seniors : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="senior_input" id="senior_input" className="border text-black">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Worked in teams : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="worked_in_teams" id="worked_in_teams" className="border text-black">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Introvert : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="introvert" id="introvert" className="border text-black">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Reading and writing skills : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="read_write" id="read_write" className="border text-black">
                <option value="1">Poor</option>
                <option value="0">Good</option>
                <option value="0">Excellent</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Memory capability score : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="memory" id="memory" className="border text-black">
                <option value="1">Poor</option>
                <option value="0">Good</option>
                <option value="0">Excellent</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">How would you describe yourself : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="hard_smart" id="hard_smart" className="border text-black">
                <option value="1">Hardworker</option>
                <option value="0">Smartworker</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Field of interest : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="field_of_int" id="field_of_int" className="border text-black">
                <option value="0">Technical</option>
                <option value="1">Management</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Interested subject : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="subjects" id="subjects" className="border text-black">
                {subjects.map((item)=>(
                  <option value={item[1]}>{item[0]}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Interested book genre : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="books" id="books" className="border text-black">
                {books.map((item)=>(
                  <option value={item[1]}>{item[0]}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Certification : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="certifications" id="certifications" className="border text-black">
                {certifications.map((item)=>(
                  <option value={item[1]}>{item[0]}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Interested workshops : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="workshops" id="workshops" className="border text-black">
                {workshops.map((item)=>(
                  <option value={item[1]}>{item[0]}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Type of company want to settle in : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="companies" id="companies" className="border text-black">
                {companies.map((item)=>(
                  <option value={item[1]}>{item[0]}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row bg-gray p-8 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center">
              <h1 className="text-black text-md font-bold">Interested career area : </h1>
            </div>
            <div className="flex justify-center mx-3">
              <select name="careers" id="careers" className="border text-black">
                {careers.map((item)=>(
                  <option value={item[1]}>{item[0]}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <button
                onClick={careerPredict}
                className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg"
              >
                Complete Test
              </button>
            </div>
          </div>

          
        </Box>
      </div>
    </main>
  );
}
