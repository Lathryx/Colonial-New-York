import PeterMinuit from './images/Peter_Minuit.png'; 
import KilliaenVanRensselaer from './images/Killiaen_van_Rensselaer.png'; 
import PeterStuyvesant from './images/Peter_Stuyvesant.png'; 
import ThomasDongan from './images/Thomas_Dongan.png'; 

const cards_info = [
    {
        img: PeterMinuit, 
        name: "Peter Minuit", 
        description: "Peter Minuit, a native of Germany, bought Manhattan Island from the Indians in 1626. In September of that year, the Dutch West India Company made him the director general of the new land. He built a fort at the southernmost tip of the island for settlers and founded New Amsterdam. He would be recalled to Holland in 1631, possibly for granting patroonships that came at the expense of the Dutch West India Company. " 
    }, 
    {
        img: KilliaenVanRensselaer, 
        name: "Killiaen van Rensselaer", 
        description: "In 1629, Killiaen van Rensselaer was given a large amount of land and the title of patroon by the Dutch West India Company. This made van Rensselaer a landholder who was expected explore the land and find valuable resources. By getting people to settle the new land, van Rensselaer was able to have these farmers and artisans become his tenants while they created successful communities. Van Rensselaer's land is now a part of Albany, New York, the state capital. " 
    }, 
    {
        img: PeterStuyvesant, 
        name: "Peter Stuyvesant", 
        description: "Peter Stuyvesant came to the Dutch colony in 1647. He had previous experience as a director general in the West Indies for the Dutch West India Company and drew on that experience to make immediate changes to a chaotic and corrupt government in New Amsterdam. Stuyvesant forced the closure of taverns and brothels. He also made laws that all citizens had to attend church. While he tried to keep immigrants he did not like out of the colonial state, he also demanded fair payment to Indians for services given. In 1664, Stuyvesant gave up the colony to the British when they arrived by ship to invade the Dutch colony. " 
    }, 
    {
        img: ThomasDongan, 
        name: "Thomas Dongan", 
        description: "An Irish colonel in the Royal Army who served in Africa, Thomas Dongan was appointed governor of New York in 1683 by the British government. He was able to manipulate relations with the English, French and Indians well. Dongan was instrumental in the formation of the first General Assembly of New York. While a good statesman and superb general in the face of military encroachment, Dongan's sympathies with the people he governed rankled the King of England. This caused his removal from the post in 1688. " 
    }
]; 

export default function ImportantPeople() {
    return (
        <div className="m-10">
            <p className="mb-5 pb-2 w-1/4 text-2xl font-bold border-b-2 border-b-primary">Leaders</p> 
            <div className="p-10 flex flex-wrap justify-around align-mdiddle gap-10">
                {cards_info.map((person, index) => (
                    <div className="card w-96 bg-neutral shadow-xl" key={index}>
                        <figure className="p-5"><img className="h-auto rounded-xl" src={person.img} /></figure> 
                        <div className="card-body">
                            <p className="card-title">{person.name}</p> 
                            <p>{person.description}</p>
                        </div> 
                    </div> 
                ))}
            </div>
        </div>
    ); 
}