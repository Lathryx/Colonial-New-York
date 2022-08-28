export default function Economics() {
    const agricultureProducts = ["cattle", "grain", "rice", "indigo", "wheat"]; 
    const merchantsProducts = ["sugar", "tobacco", "indigo", "coffee", "chocolate", "cotton"]; 

    return (
        <div className="m-10"> 
            <p className="mb-10 pb-2 w-1/4 text-2xl font-bold border-b-2 border-b-primary">Economics</p> 
            <div className="mx-auto w-full sm:w-5/6 flex flex-wrap gap-10 justify-around items-center">
                <div className="p-10 w-full sm:w-96 h-auto sm:h-96 bg-neutral rounded-xl">
                    <p className="text-xl font-bold mb-2">Agriculture & Manufacturing</p> 
                    <p className="mb-2">One of our primary economic activities is agriculture. Some of the products we grow include: </p> 
                    <ul className="mb-2">
                        {agricultureProducts.map((product, index) => (
                            <li className="flex" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {product}
                            </li> 
                        ))} 
                    </ul>
                    <p>Manufacturing is another one of our main economic activities. It mainly centers around shipbuilding and iron work. </p>
                </div>
                <div className="p-10 w-full sm:w-96 h-auto sm:h-96 bg-neutral rounded-xl">
                    <p className="text-xl font-bold mb-2">Merchants</p> 
                    <p className="mb-2">First Dutch and then English merchants built the city’s local economy largely around supplying ships for the trade in slaves and in what slaves produced, including: </p> 
                    <ul className="mb-2">
                        {merchantsProducts.map((product, index) => (
                            <li className="flex" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {product}
                            </li>
                        ))} 
                    </ul>
                </div>
            </div>
        </div>
    ); 
}