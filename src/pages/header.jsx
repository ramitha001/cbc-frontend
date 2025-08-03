import { Link } from 'react-router-dom'
import logo from '/mainlogo.jpg'

export default function Header(){
    return (
        <header className='w-full h-16 bg-emerald-300 relative flex justify-center items-center'>
            
                    <img src={logo} alt="logo" className='w-13 h-13 rounded-full absolute left-[10px] top-[7px]' />
                
                <div className='flex justify-between items-center gap-4'>
                    <Link to="/" className='text-[#f2c5b7] font-bold text-xl hover:border-b-2 hover:border-white'>Home</Link>
                    <Link to="/" className='text-[#f2c5b7] font-bold text-xl hover:border-b-2 hover:border-white'>Products</Link>
                    <Link to="/" className='text-[#f2c5b7] font-bold text-xl hover:border-b-2 hover:border-white'>About Us</Link>
                    <Link to="/" className='text-[#f2c5b7] font-bold text-xl hover:border-b-2 hover:border-white'>Contact Us</Link>
                </div>
                   
        </header>
    )
}