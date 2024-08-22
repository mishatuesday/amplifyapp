import React from 'react';

function Wheel() {
    
    /*
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<div className="{{$padding_top_mobile}} {{$padding_top_desktop}} {{$padding_bottom_mobile}} {{$padding_bottom_desktop}}">
    <div id="everyday-easy" className="">
        <div id="everyday-easy_main-text-container" class='mx-4 md:mx-9 lg:mx-16 xl:mx-20'>
            <h1 className="mb-3 ee-title">{{$title}}</h1>
            <div className="text-3xl ee-main-description">
                {{$description}}
            </div>
        </div>
        <div class=' absolute flex w-[100%] ee-navigation-container'>
            <div id='ee-navigation-left' class='flex flex-1 items-center justify-end' role='button'>
                <img class='h-9 w-9 svg-pointer svg-pointer-left'
                    src='@asset("images/icons/icon_circle_right_deep_blue.svg")'
                    src-default='@asset("images/icons/icon_circle_right_deep_blue.svg")'
                    src-click='@asset("images/icons/icon_circle_right_dark_gray.svg")'
                    alt='svg left'/>
            </div>
            <div id='ee-navigation-right' class='flex flex-1 items-center justify-start' role='button'>
                <img class='h-9 w-9 svg-pointer svg-pointer-right'
                    src='@asset("images/icons/icon_circle_right_deep_blue.svg")'
                    src-default='@asset("images/icons/icon_circle_right_deep_blue.svg")'
                    src-click='@asset("images/icons/icon_circle_right_dark_gray.svg")'
                    alt='svg right'/>
            </div>
        </div>

        <div className="limited-window">
            <div id="rotator-container">
                @for ($x = 0; $x < 4; $x++)
                <div id="number-{{$x}}" className="fore">
                    <img id="ee-slot-{{$x}}-image" className="slot" />
                    <img id="ee-slot-{{$x}}-color-image" className="slot" />
                    <div id="ee-slot-{{$x}}-copy-container" className="ee-slot-copy-container">
                        <div class='ee-slot-copy-justifier'>
                            <span id="ee-slot-{{$x}}-title" className="everyday-easy_slot-text"></span>
                            <p id="ee-slot-{{$x}}-description" className="everyday-easy_slot-description"></p>
                            <div id="ee-button-{{$x}}" className="slot-button" role='button'></div>
                        </div>
                    </div>
                </div>
                @endfor
                <div id="green-ball">
                </div>
            </div>
            <div id="everyday-easy_sun-rotator-container">
                <p id="everyday-easy_the-sun" className="everyday-easy_the-sun_initial"></p>
            </div>
        </div>
    </div>
</div>
    <script>
        <?php require_once WP_CONTENT_DIR.'/themes/cfcu/resources/scripts/everyday-easy.js'; ?>
    </script>





*/
    return (
        <div className="sm:text-sm md:text-lg xl:text-2xl">
            This is not yet a wheel.
        </div>
    )
}

export default Wheel