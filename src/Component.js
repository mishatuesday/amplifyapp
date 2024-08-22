import React, { useState, useEffect } from 'react'

function Component() {
    const [selectedTitle, setSelectedTitle] = useState(0);
    
    useEffect(() => {
        const interval = setTimeout(() => {
            setSelectedTitle(selectedTitle === 3 ? 0 : selectedTitle + 1);
        }, 3000);

        return () => clearTimeout(interval); // Cleanup the timeout on component unmount
    }, [selectedTitle]); 
    
    return (
        <div className="full-width bg-black text-white">
            <div className="content flex sm:flex-col md:flex-row md:items-end gap-3 relative">
                <h1>Misha Tuesday</h1>
                <div className="overflow-hidden md:absolute bottom-0 right-20 pb-1 jutify-center">
                    <h2 className={selectedTitle === 0 ? "block" : "hidden"}>Software Engineer</h2>
                    <h2 id="title-1" className={selectedTitle === 1 ? "block" : "hidden"}>Magician</h2>
                    <h2 id="title-2" className={selectedTitle === 2 ? "block" : "hidden"}>Hypnotist</h2>
                    <h2 id="title-3" className={selectedTitle === 3 ? "block" : "hidden"}>Podcaster</h2>
                </div>
            </div>
        </div>
    )
}

export default Component
