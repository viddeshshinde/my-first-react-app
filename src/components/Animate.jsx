import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export class Animate extends React.Component {
    render() {
        return (
            <div>

                <ScrollAnimation animateIn='slideInUp'>
                    <h1>
                        I am sliding up ...
                    </h1>
                    <br />
                </ScrollAnimation>

            </div>
        );
    }
}

/*
*
* Below is a list of all available animations

 bouceOut

 bounce

 bounceIn

 bounceInDown

 bounceInLeft

 bounceInRight

 bounceInUp

 bounceOutDown

 bounceOutLeft

 bounceOutRight

 bounceOutUp

 fadeIn

 fadeInDown

 fadeInDownBig

 fadeInLeft

 fadeInLeftBig

 fadeInRight

 fadeInRightBig

 fadeInUp

 fadeInUpBig

 fadeOut

 fadeOutDown

 fadeOutDownBig

 fadeOutLeft

 fadeOutLeftBig

 fadeOutRight

 fadeOutRightBig

 fadeOutUp

 fadeOutUpBig

 flash

 flip

 flipInX

 flipInY

 flipOutX

 flipOutY

 headShake

 hinge

 jello

 lightSpeedIn

 lightSpeedOut

 pulse

 rollIn

 rollOut

 rotateIn

 rotateInDownLeft

 rotateInDownRight

 rotateInUpLeft

 rotateInUpRight

 rotateOut

 rotateOutDownLeft

 rotateOutDownRight

 rotateOutUpLeft

 rotateOutUpRight

 rubberBand

 shake

 slideInDown

 slideInLeft

 slideInRight

 slideInUp

 slideOutDown

 slideOutLeft

 slideOutRight

 slideOutUp

 swing

 tada

 wobble

 zoomIn

 zoomInDown

 zoomInLeft

 zoomInRight

 zoomInUp

 zoomOut

 zoomOutDown

 zoomOutLeft

 zoomOutRight

 zoomOutUp

* */