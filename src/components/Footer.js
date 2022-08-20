import Flag from './images/flag.svg'; 

export default function Footer() {
    return (
        <div className="mt-10 footer p-10 bg-neutral text-neutral-content">
            <div>
                <img className="w-32 h-auto rounded-lg" src={Flag} /> 
                <p>Made by <a className="text-primary hover:underline" href="https://github.com/lathryx">Lathryx</a></p>
            </div>
            <div>
                <p className="footer-title">References</p> 
                {/* Links go here...  */}
            </div>
            <div>
                <p className="footer-title">Looking to join our colony?</p>
                <button className="btn btn-primary">Join Now</button>
            </div>
        </div>
    ); 
}