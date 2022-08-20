import Flag from './images/flag.svg'; 

export default function Navbar() {
    return (
        <div className="p-5 navbar fixed bg-base-100 shadow-lg z-10">
            <div className="flex-1">
                <img className="w-32 h-auto mr-2 rounded-lg" src={Flag} /> 
                <a className="btn btn-ghost normal-case text-xl" href="#top">
                    Colonial New York
                </a>
            </div>
            <div class="flex-none">
                <button className="btn btn-neutral">Join Now</button>
            </div>
        </div>
    ); 
}