import React from 'react';
import wheel from './images/roulette_wheel.png';
import li from './images/in.png';
import Mail from '@mui/icons-material/MailOutlined';
import insta from './images/insta.png';


function Wheel() {
    
    const spinWheel = () => {
        alert('Spin is currently disabled');
    }
    return (
        <div className="flex gap-5 pt-16 sm:text-md md:text-lg xl:text-2xl">
            <div className="flex overflow-hidden w-1/2 max-h-[600px]">
                <div className="w-[200%] ml-[-200px] md:ml-[-400px]">
                    <img src={wheel} alt="the wheel" />
                </div>
            </div>
            <div className="w-1/2">
                {/* <button onClick={spinWheel} className="border-2 py-2 px-4 border-black rounded-lg hover:bg-[#EEEEEE]">spin</button> */}
                <div className="flex flex-col gap-3 py-4 items-center">
                    <h2>Misha Tuesday</h2>
                    <div className="flex gap-4 items-center">
                        <a href="https://www.linkedin.com/in/mishatuesday"><img src={li} className="h-6" /></a>
                        <a href="https://www.instagram.com/mishatuesday"><img src={insta} className="h-6" /></a>
                        <a href="mailto:mishatuesday@gmail.com"><Mail sx={{ fontSize: 30 }} /></a>
                    </div>
                    <div>
                        Misha Tuesday is the founder of Tuesday Productions, LLC. He is a coder by day and a multifarious creative when not coding.
                        Rev. Tuesday believes that people are multifacted, and against the advice of his career coach has chosen to highlight his disparate skills which include computer programming, hypnosis, stage magic, writing, and music composition. Use the icons above to connect{/* or spin the wheel to explore one of Misha's projects*/}.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wheel