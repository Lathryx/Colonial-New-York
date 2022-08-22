import Flag from './images/flag.svg'; 

export default function Footer() {
    const references = [
        "https://www.softschools.com/facts/13_colonies/new_york_colony_facts/2043/", 
        "https://www.history.com/topics/us-states/new-york", 
        "https://classroom.synonym.com/colonial-new-york-12081768.html", 
        "https://welcometocolonialnewyorkpace.weebly.com/native-relations.html#:~:text=Colonists%20from%20the%20New%20York,money%20from%20the%20fur%20trade.", 
        "https://www.thoughtco.com/colonial-governments-of-the-thirteen-colonies-104595#:~:text=In%201664%2C%20King%20Charles%20II,were%20given%20to%20a%20governor.", 
        "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/new-york-colony#:~:text=Rise%20of%20the%20Assembly,freedoms%20through%20the%20governor's%20authority.", 
        "https://www.britannica.com/place/New-York-state/Education", 
        "https://www.softschools.com/facts/13_colonies/new_york_colony_facts/2043/#:~:text=The%20New%20York%20Colony%20was%20not%20dominated%20by%20a%20specific,Lutherans%2C%20and%20Quakers%20among%20others.", 
        "https://www.effinghamschools.com/cms/lib/GA01000314/Centricity/Domain/2276/13%20colonies%20info%20student.pdf", 
        "http://www.slaveryinnewyork.org/history.htm#:~:text=As%20many%20as%2020%20percent,chocolate%2C%20and%20ultimately%2C%20cotton.", 
        "https://classroom.synonym.com/", 
        "https://www.history.com/news/native-american-land-british-colonies"
    ]; 

    return (
        <div className="mt-10 footer p-10 bg-neutral text-neutral-content">
            <div>
                <img className="w-32 h-auto rounded-lg" src={Flag} /> 
                <p className="text-lg">Made by <a className="text-primary hover:underline" href="https://github.com/lathryx">Lathryx</a></p>
            </div>
            <div>
                <p className="footer-title">References</p> 
                {/* Links go here...  */} 
                {references.map((reference, index) => (
                    <p key={index}><a className="text-primary hover:underline" href={reference}>Reference {index+1}</a></p>
                ))} 
            </div>
            <div>
                <p className="footer-title">Looking to join our colony?</p>
                <button className="btn btn-primary"><a href="#joinnow">Join Now</a></button>
            </div>
        </div>
    ); 
}