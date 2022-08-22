import { useState } from 'react'; 

import Flag from './images/flag.svg'; 

export default function JoinForm() {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 

    const handleSubmit = (e) => { 
        if (firstName === '' && lastName === '' && email === '') return; 

        e.preventDefault(); 
        console.log(firstName, lastName, email);  
        setFirstName(''); 
        setLastName(''); 
        setEmail(''); 
    }; 

    const handleFirstName = (e) => { 
        setFirstName(e.target.value);  
    }; 

    const handleLastName = (e) => { 
        setLastName(e.target.value); 
    }; 

    const handleEmail = (e) => { 
        setEmail(e.target.value); 
    }; 

    return (
        <div id="joinnow" className="mx-auto my-5 p-10 w-5/6 flex flex-wrap justify-around items-center bg-neutral rounded-xl">
            <div className="w-2/3 lg:w-1/3">
                <p className="mt-3 text-4xl font-bold">Join now!</p> 
                <p className="mb-5">Become a new member of Colonial New York! </p>
                <form className="p-10 bg-base-100 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <input className="mb-4 input input-bordered input-primary w-full max-w-xs" type="text" placeholder="First Name" value={firstName} onChange={handleFirstName} /> 
                    <input className="mb-4 input input-bordered input-primary w-full max-w-xs" type="text" placeholder="Last Name" value={lastName} onChange={handleLastName} /> 
                    <input className="mb-7 input input-bordered input-primary w-full max-w-xs" type="text" placeholder="Email" value={email} onChange={handleEmail} /> 
                    <br /> 
                    <button className="w-mfin mfin-w-fit btn btn-primary">Join</button> 
                </form>
            </div> 
            <img className="mt-5 w-4/5 lg:w-2/5 h-4/5 lg:h-2/5 rounded-lg shadow-xl" src={Flag} /> 
        </div>
    ); 
}