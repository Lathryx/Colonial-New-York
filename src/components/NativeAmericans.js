import NativeAmericansImg from './images/Colonial_New_York_Native_Americans.png'; 

export default function NativeAmericans() {
    return ( 
        <div className="my-20 mx-auto w-full flex flex-wrap justify-around items-center"> 
            <div className="m-10 p-10 w-full md:w-5/12 bg-neutral rounded-lg">
                <p className="mb-3 text-xl font-bold">Peace with the Natives! </p> 
                <p>Here in New York, we are at peace with the Native tribes who surroundour territory, due to our mutual economic gain from the fur trade! </p> 
            </div> 
            <img className="mx-20 w-full md:w-1/3 h-full md:h-1/3 rounded-xl shadow-xl" src={NativeAmericansImg} /> 
        </div>
    ); 
}