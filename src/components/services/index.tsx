import './style.scss'
import Card from './card'

import p1 from '../../assets/promo/1.jpeg'
import p2 from '../../assets/promo/2.jpeg'
import p3 from '../../assets/promo/3.jpeg'
import p4 from '../../assets/promo/4.jpeg'

const cards = [
    {
        title: "Personal training",
        background: p1,
        description: "Wil je specifieke doelen behalen en persoonlijke aandacht? Onze deskundige personal trainers staan klaar om jou te begeleiden op jouw fitnessreis. Ontvang op maat gemaakte trainingssessies, voedingsadvies en de motivatie die je nodig hebt om je doelen te bereiken. Samen maken we succes tastbaar."
    },
    {
        title: "Duo training",
        background: p2,
        description: "Samen is beter! Onze duo-trainingen bieden jou en je trainingspartner een unieke kans om samen te werken aan jullie fitnessdoelen. Deel de motivatie, de uitdaging en de overwinningen terwijl jullie samen worden begeleid door onze professionele trainers. Maak fitness leuk en effectief met een vriend of vriendin!"
    },
    {
        title: "Groeplessen",
        background: p3,
        description: "Onze energieke groepslessen zijn perfect voor wie houdt van een levendige trainingsomgeving. Sluit je aan bij gelijkgestemde individuen en laat je meeslepen door de kracht van de groep. Of je nu van dans, yoga, krachttraining of cardio houdt, onze diverse lessen bieden voor ieder wat wils. Bereid je voor op een geweldige workoutervaring!"
    },
    {
        title: "Bootcamp",
        background: p4,
        description: "Voor degenen die hunkeren naar uitdaging en avontuur, biedt onze bootcamp de ultieme fitnesservaring. Ga tot het uiterste met intensieve trainingssessies in de buitenlucht. Onze instructeurs zullen je motiveren en begeleiden terwijl je je kracht, uithoudingsvermogen en doorzettingsvermogen naar nieuwe hoogten brengt. Doe mee en ontdek de krijger in jezelf!"
    },
]

function index() {
    return (
        <div className='c-services'>
            <span className='c-services__heading'>
                <h2>Dit zijn <span className='-special'>onze</span> services <br></br> die wij aanbieden</h2>
                <span className='c-services__headingArrows'>
                    {/* <AiOutlineArrowLeft />
                    <AiOutlineArrowRight /> */}
                </span>
            </span>
            <ul>
                {cards.map((card) => {
                    return (
                        <li><Card title={card.title} background={card.background} description={card.description} /></li>
                    )
                })}
            </ul>
        </div >
    )
}

export default index