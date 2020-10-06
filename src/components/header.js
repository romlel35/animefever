import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class Header extends React.Component{



    render(){

    return(
      <div>
 


      <Carousel>
                <div>
                <img src="./assets/code_geass.jpg" alt="anime code geass"/>
                  
                </div>
                <div>
                <img src="./assets/dbz.jpg" alt="anime dragon ball z"/>
                  
                </div>
                <div>
                <img src="./assets/naruto.jpg" alt=" anime naruto"/>
                 
                </div>
                <div>
                <img src="./assets/onepiece.jpg" alt=" anime onepiece"/>
                 
                </div>
                <div>
                <img src="./assets/vinland.jpg" alt=" anime vinland saga"/>
                 
                </div>
            </Carousel>
      </div>
      



    )
    }

}


export default Header