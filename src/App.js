import './App.css'; 
import Flag from './components/images/flag.svg'; 
import MapImage from './components/images/thirteen_colonies.svg'; 

import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div id="top" className="flex flex-col justify-start align-middle"> 
    <Navbar /> 
    <div className="m-10 h-screen flex justify-around align-middle">
      <div className="my-auto">
        <p className="text-2xl font-bold">Colonial New York</p>
        <p>The best of the thirteen colonies!</p>
        <button className="mt-5 btn btn-neutral">Join Now</button>
      </div>
      <img className="my-auto w-1/2 h-auto rounded-xl drop-shadow-xl" src={Flag} /> 
    </div>
      {/* <p className="mx-auto my-3 text-2xl font-bold">Colonial New York</p> */}
      <div className="m-5 flex justify-around align-middle">
        <img className="mx-auto mb-1 w-auto h-full drop-shadow-xl" src={MapImage} /> 
        <div className="w-5/12 flex flex-col justify-around align-middle">
          <div className="p-10 bg-neutral rounded-xl">
            <p className="mb-5 text-2xl font-bold">The Thirteen Colonies</p>
            <p>Colonial New York is located in the Middle Colonies. We've got refreshing cold winters, and cozy hot summers! Unlike our southern neighbors, our cold winters stop disease from thriving within our realm; you're safe here! </p>
          </div>
          <button className="w-min min-w-fit btn btn-neutral">Join Now</button>
        </div>
        {/* <a className="mx-auto mb-3 italic underline" href="https://www.ducksters.com/history/colonial_america/thirteen_colonies.jpg">Source</a> */}
        {/* <p className="mx-auto text-2xl">Map of 13 Colonies</p>  */}
      </div> 
      {/* <div className="mx-auto w-1/3 card card-side shadow-xl">
        <figure><img src={MapImage} /></figure> 
        <div className="card-body">
          <p className="text-xl card-title">Map of 13 Colonies</p> 
          <a className="italic underline" href="https://www.ducksters.com/history/colonial_america/thirteen_colonies.jpg">Source</a> 
        </div> 
      </div>  */}
      <p className="mx-auto text-xl">Pictures</p> 
      <p className="mx-auto text-xl">Location</p> 
      <p className="mx-auto text-xl">Society</p> 
      <p className="mx-auto text-xl">Relations with the Native Americans</p> 
      <p className="mx-auto text-xl">Politics</p> 
      <p className="mx-auto text-xl">Important Events and People</p> 
      <p className="mx-auto text-xl">Economics</p> 
      <Footer /> 
    </div> 
  ); 
} 

export default App; 