import {useState} from "react"
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
     const [toggle, setToggle] = useState(false)

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="bank" className="w-[124px] h-[32px]" />
            <ul className="list-none sm:flex hidden gap-[40px]">
                { navLinks.map(links => (
                    <li key={links.id} className='font-poppins font-normal text-white text-[16px] cursor-pointer'>
                        <a href={`#${links.id}`}> { links.title }</a>
                    </li>
                )) }
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(prev => !prev)} 
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute right-0 top-20 rounded-md mx-4 my-2 sidebar min-w-[140px]`}> 
                    <ul className="list-none sm:hidden flex gap-[40px] flex-col">
                    { navLinks.map(links => (
                        <li key={links.id} className='font-poppins font-normal text-white text-[16px] cursor-pointer'>
                            <a href={`#${links.id}`}> { links.title }</a>
                        </li>
                    )) }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;