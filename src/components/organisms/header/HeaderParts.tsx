import  { memo } from 'react';
import {FaGithub } from 'react-icons/fa';



const HeaderParts = memo(() => {
    return (
        <header className="bg-blue-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center">
                <FaGithub className="text-3xl mr-2" />
                <h1 className="text-2xl font-bold">GitHub Repository Search</h1>
            </div>
        </header>
    )
}, () => true)

export default HeaderParts