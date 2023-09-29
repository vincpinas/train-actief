import { scrollTo2 } from "../../functions";

interface CardProps {
  title: String;
  background?: any;
  description?: String;
  button_text?: String;
}

function card({ title, background, description }: CardProps) {

  return (
    <>
      <p>{ title }</p>
      <div className='c-servicecard'>
        <img src={background} alt="background" />
        <div className="c-servicecard__overlay">
          <p>{description}</p>
        </div>
      </div>
      <button onClick={() => scrollTo2('#contact')}>Contact</button>
    </>
  )
}

export default card