import './style.scss'
import deco from '../../assets/hero_decorations.svg'
import thijs from '../../assets/thijs.svg'

function index() {
    return (
        <div className='c-hero'>
            <div className='c-hero__text'>
                <h1>Train<span className='-cspec'>actief</span> <br></br> de <span className='-cspec'>beste</span> personal <br></br> training</h1>
                <p>Streef naar jouw beste ik met persoonlijke begeleiding. Welkom bij Train actief, waar we <br></br> je helpen je fitnessdoelen te bereiken en een gezonde levensstijl te omarmen. Samen <br></br> creëren we een op maat gemaakt pad naar succes.</p>
                <a href="">Contact</a>
            </div>

            <img src={deco} alt="decorations" className='c-hero__deco' />
            <img src={thijs} alt="decorations" className='c-hero__deco -thijs' />
            <hr />
        </div>
    )
}

export default index