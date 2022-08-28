import Flag from './images/flag.svg'; 

export default function Navbar() {
    return (
        <div className="p-5 navbar fixed bg-base-100 shadow-lg z-10">
            <div className="flex-1">
                <img className="hidden lg:inline w-32 h-auto mr-2 rounded-lg" src={Flag} /> 
                <a className="btn btn-ghost normal-case text-xl" href="#top">
                    Colonial New York
                </a>
            </div>
            <div className="flex-none">
                <a href="#joinnow"><button className="btn btn-neutral">Join Now</button></a> 
            </div>
        </div>
    ); 
}