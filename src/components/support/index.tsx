import './style.scss'

import motion from '../../assets/motionfysio.png'

const items = [
    { href: "https://www.motion-fysiotherapie.nl/", src: motion }
]

function index() {
    return (
        <div className='c-support'>
            <p>Deze training wordt ondersteund door</p>
            <ul>
                { items.map((item) => {
                    return (
                        <li key={`${Math.random()}-${item.src}`}>
                            <a href={item.href} target='_blank'><img src={item.src} alt="supporter" /></a>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default index