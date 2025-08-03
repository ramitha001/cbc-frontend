import { Route, Routes } from 'react-router-dom'
import Header from './header.jsx'

export default function TestHomePage(){
    return (
        <div className='h-screen w-screen bg-primary'>
            <Header />
            <Routes path="/*" />
            
        </div>
    )
}
