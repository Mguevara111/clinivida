import errorimage from '../assets/page404.jpg'
import { Link } from 'react-router-dom';


export function E404(){
    return(
        <section className="e404 w-full h-screen flex justify-center items-center relative overflow-hidden">
            <img className='w-full h-screen object-cover object-center' src={errorimage} alt={errorimage} />
            <Link to="/schendule">
                <button className='button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2' style={{width:'25ch',background:'black'}}>Return to main page</button>
            </Link>
        </section>
    );
}