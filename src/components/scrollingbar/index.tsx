import './style.scss'
import gsap from 'gsap'
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const items = [
    { text: "Plan jouw gratis sessie vandaag! -" },
    { text: "Plan jouw gratis sessie vandaag! -" },
    { text: "Plan jouw gratis sessie vandaag! -" },
    { text: "Plan jouw gratis sessie vandaag! -" },
    { text: "Plan jouw gratis sessie vandaag! -" },
    { text: "Plan jouw gratis sessie vandaag! -" },
]


function index() {
    let timeline: GSAPTimeline;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".c-scrollingbar",
                start: "top bottom",
                toggleActions: "play none pause reverse",
                scrub: 0.1,
            },
        })
            .to(".c-scrollingbar", {
                translateX: "-20%"
            })

        return () => {
            timeline.kill();
        }
    }, [])

    return (
        <div className='c-scrollingbar'>
            {items.map((item, index) => {
                return (
                    <h2 key={`cscrollbar-item-${index}`}>{item.text}</h2>
                )
            })}
        </div>
    )
}

export default index