import './style.scss'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import logo from '../../assets/Logo.svg'

const prevDef = (e: any) => {
    e.preventDefault();
}

const header_links = [
    { text: "Home", href: "", onClick: prevDef },
    { text: "Services", href: "", onClick: prevDef },
    { text: "Over Ons", href: "", onClick: prevDef },
]

function index() {
    let timeline: GSAPTimeline;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".c-nav",
                start: "+20rem",
                toggleActions: "play none pause reverse",
                scrub: 0.1,
            },
        })
            .to(".c-nav", {
                background: "rgba(0,0,0,0.75)"
            })

        return () => {
            timeline.kill();
        }
    }, [])

    return (
        <nav className='c-nav'>
            <header className='c-nav__header'>
                <a href="#" className='c-nav__headerLogo'><img src={logo} alt="logo" /></a>
                <ul>
                    { header_links.map((link) => {
                        return (
                            <li key={`${Math.random}-${link.text}`}><a href={link.href} onClick={link.onClick}>{link.text}</a></li>
                        )
                    })}
                </ul>
            </header>
        </nav>
    )
}

export default index