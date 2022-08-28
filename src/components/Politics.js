export default function Politics() {
    return (
        <div className="mx-auto my-10 w-11/12"> 
            <p className="mx-auto mb-10 pb-2 w-1/4 text-center text-2xl font-bold border-b-2 border-b-primary">Government</p> 
            <div className="p-10 bg-neutral rounded-lg">
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li data-content="..." className="step"></li>
                    <li data-content="&#9733;" className="w-d1/2 step step-primary">
                        In 1664, King Charles II gave New York as a proprietary colony to the Duke of York, the future King James II. Quite quickly, he was able to seize New Amsterdam and renamed it New York. The Duke chose to give citizens a limited form of self-government. Ruling powers were given to a governor. 
                    </li>
                    <li data-content="..." className="step step-primary"></li>
                    <li data-content="&#9733;" className="step step-primary">
                        In 1683, James II guaranteed New York a representative legislature and personal freedoms through the governor's authority. 
                    </li>
                    <li data-content="..." className="step"></li>
                </ul> 
            </div>
        </div>
    ); 
}