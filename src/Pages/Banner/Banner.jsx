import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

import img1 from '/pm.jpeg';
import img2 from '/WhatsApp Image 2024-02-15 at 12.39.03 PM(1).jpeg';
import img3 from '/WhatsApp Image 2024-02-15 at 12.39.00 PM(2).jpeg';
import img4 from '/WhatsApp Image 2024-02-15 at 12.39.00 PM(3).jpeg';
import img5 from '/about-1176ed4e.jpg';
 

const Banner = () => {
    return (
       <div className='mt-6 mb-10'>
          <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={9000}
  >
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
    <div data-src={img4} />
    <div data-src={img5} />
  </AutoplaySlider>
       </div>
    );
};

export default Banner;