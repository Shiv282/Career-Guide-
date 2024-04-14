import ProgressBar from "./progressBar";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-1/5 mx-4">
        <ProgressBar activeSection={0}/>
      </div>

      <div className="w-4/5 mx-4">
        <Box className="bg-white px-5 py-9 rounded-lg">
          <h1 className="text-black text-2xl font-black underline underline-offset-8 mb-5">
            Introduction
          </h1>
          <p className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consectetur magni obcaecati amet tenetur minima praesentium dolorem
            aperiam nulla laboriosam facilis veniam, consequuntur, porro rem,
            accusantium incidunt totam assumenda earum? Impedit doloribus omnis
            quasi aspernatur consectetur nam dolores sed quis tempora, quo illo
            enim adipisci autem iure molestiae? Cum libero ipsa non quis, iusto
            ducimus nemo ipsum laborum magni dolor? Blanditiis, cupiditate fuga
            qui neque, odio vel cumque adipisci numquam perspiciatis rem
            voluptates. Quisquam aspernatur, reprehenderit quasi nostrum esse
            minus sunt fugit expedita, quo pariatur, molestiae maiores aliquid
            delectus aliquam.
          </p>
          <p className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consectetur magni obcaecati amet tenetur minima praesentium dolorem
            aperiam nulla laboriosam facilis veniam, consequuntur, porro rem,
            accusantium incidunt totam assumenda earum? Impedit doloribus omnis
            quasi aspernatur consectetur nam dolores sed quis tempora, quo illo
            enim adipisci autem iure molestiae? Cum libero ipsa non quis, iusto
            ducimus nemo ipsum laborum magni dolor? Blanditiis, cupiditate fuga
            qui neque, odio vel cumque adipisci numquam perspiciatis rem
            voluptates. Quisquam aspernatur, reprehenderit quasi nostrum esse
            minus sunt fugit expedita, quo pariatur, molestiae maiores aliquid
            delectus aliquam.
          </p>
          <p className="text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consectetur magni obcaecati amet tenetur minima praesentium dolorem
            aperiam nulla laboriosam facilis veniam, consequuntur, porro rem,
            accusantium incidunt totam assumenda earum? Impedit doloribus omnis
            quasi aspernatur consectetur nam dolores sed quis tempora, quo illo
            enim adipisci autem iure molestiae? Cum libero ipsa non quis, iusto
            ducimus nemo ipsum laborum magni dolor? Blanditiis, cupiditate fuga
            qui neque, odio vel cumque adipisci numquam perspiciatis rem
            voluptates. Quisquam aspernatur, reprehenderit quasi nostrum esse
            minus sunt fugit expedita, quo pariatur, molestiae maiores aliquid
            delectus aliquam.
          </p>
          <div className="flex items-center justify-center">
            <a href="/test/iq">
              <button className="bg-green-600 hover:bg-green-500 text-white py-4 px-8 rounded-lg mt-2">
                Get Started
              </button>
            </a>
          </div>
        </Box>
      </div>
    </main>
  );
}
