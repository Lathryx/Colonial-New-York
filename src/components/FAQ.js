export default function FAQ() {
    return (
        <div className="m-10 my-10"> 
            <p className="mb-10 pb-2 w-1/4 text-2xl font-bold border-b-2 border-b-primary">Frequently Asked Questions</p> 
            <div className="m">
                <div className="mb-2 collapse">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-neutral rounded-t-lg">What about education? </div>
                    <div className="pb-2 collapse-content bg-neutral rounded-b-lg"> 
                        <p className="pt-3">Schools were established by churches with government support as early as 1638 in New Amsterdam. It was not until 1791, however, that the state's first public school was established. Education is MANDATORY for ages 6 to 17. So don't worry! Your children will get the education they deserve!</p>
                    </div>
                </div>
                <div className="mb-2 collapse">
                    <input type="checkbox" /> 
                    <div className="collapse-title text-xl font-medium bg-neutral rounded-t-lg">Will my religious beliefs be tolerated? </div>
                    <div className="pb-2 collapse-content bg-neutral rounded-b-lg"> 
                        <p className="pt-3">Well, we can't exactly promise anything, but we've got Catholics, Jews, Lutherans, Quakers, and more! No one religion dominates the colony of New York, and residents are free to worship as they choose!</p> 
                    </div>
                </div>
            </div>
        </div>
    ); 
}