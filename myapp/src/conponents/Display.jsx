import React from "react";
import "./Display.css";
import { WiDaySunny ,WiHumidity} from "weather-icons-react";
import { MdVisibility } from 'react-icons/md';
import { CgCompressV } from 'react-icons/cg';
import { FiWind } from 'react-icons/fi';
import { GiDew } from 'react-icons/gi';
import { WiMoonAltWaxingCrescent1 } from 'react-icons/wi';
const Display = () => {
  return (
    <div className="main">
      <h2 className="char">Weather Today in New York City, NY, United States</h2>

      <div className="insidemain_a">
        <div>21 <br />
            Feels Like
        </div>
        <div className="time">
            <p>06:09</p>
            <p>19:49</p>
        </div>
      </div>
      <br /><br />
      <div className="inside_b">
     <div className="inside_d">

     <div>
          <div className="inside_c">
            <p><WiDaySunny size={24} color='#000' /></p>
            <p>High/Low</p>
          </div>
          <div className="inside_c">
            <p><WiHumidity size={24} color='#000' /></p>
            <p>Humidity</p>
          </div>
          <div className="inside_c">
            <p><CgCompressV  size={24} color='#000' /> </p>
            <p>Pressure</p>
          </div>
          <div className="inside_c">
            <p><MdVisibility size={24} color='#000' /></p>
            <p>Visibility</p>
          </div>
        </div>

        <div className="value">
     
          <div><p>30/20</p></div><br />
          <div><p>67%</p></div><br />
        
          <div><p>1012.5 mb</p></div><br />
        
          <div><p>Unlimited</p></div>
          <br /><br />
        </div>
     </div>

      <div className="inside_e">

      <div>
          <div className="inside_c">
            <p><FiWind  size={24} color='#000' /></p>
            <p>Wind</p>
          </div>
          <div className="inside_c">
            <p><GiDew  size={24} color='#000' /></p>
            <p>Dew Point</p>
          </div>
          <div className="inside_c">
            <p><WiDaySunny size={24} color='#000' /></p>
            <p>UV Index</p>
          </div>
          <div className="inside_c">
            <p><WiMoonAltWaxingCrescent1  size={24} color='#000' /></p>
            <p>Moon Phase</p>
          </div>
        </div>
        <div className="value"> 
       
          <div><p>8 km/h</p></div><br />
          <div><p>14</p></div><br />
         
          <div><p>0 of 10</p></div><br />
          
          <div><p>waning Gibbous</p></div><br /><br />
          <br />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Display;
