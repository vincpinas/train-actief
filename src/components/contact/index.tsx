import './style.scss'
import logo from '../../assets/Logo.svg'

function index() {
    return (
        <div className='c-contact'>
            <form className="c-contact__form">
                <p><b>Contact us</b> <br></br> we usually respond before 24 hours</p>
                <input type="text" />
                <input type="text" />
                <textarea name="" id="" cols={10} rows={10}></textarea>
                <button>Submit</button>
            </form>
            <div className="c-contact__info">
                <img src={logo} alt="logo" />
                <p>Ondernemingsweg 54H 1422DZ Uithoorn <br></br> Noord-Holland, Netherlands</p>
                <ul>
                    <li>
                        <p>
                            <a href='mailto:info@train-actief.nl'>
                                <b>Email ons</b><br></br>
                                info@trainactief.nl
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href='tel:+31681518959'>
                                <b>Telefoon nummer</b><br></br>
                                +31681518959
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>KVK nummer</b><br></br>
                            90731336
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default index