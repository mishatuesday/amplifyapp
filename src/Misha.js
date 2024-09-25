import React, { useState, useEffect } from 'react'

function Component() {
    // TODO: use this effect to scroll in and out titles periodically
    // const [selectedTitle, setSelectedTitle] = useState(0);
    
    // useEffect(() => {
    //     const interval = setTimeout(() => {
    //         setSelectedTitle(selectedTitle === 3 ? 0 : selectedTitle + 1);
    //     }, 3000);

    //     return () => clearTimeout(interval); // Cleanup the timeout on component unmount
    // }, [selectedTitle]); 
    
    return (
        <div className="full-width bg-black text-white">
            <div className="content flex sm:flex-col md:flex-row md:items-end gap-3 relative">
                <h1>Misha Tuesday</h1>
                <div className="overflow-hidden md:absolute bottom-0 right-20 pb-1 jutify-center">
                    <h2 className="scroll-text">Software Engineer<br /><br />Magician<br /><br />Hypnotist<br /><br />Podcaster</h2>
                </div>
            </div>
        </div>
    )
}

export default Component