import user from '../../src/assets/img/player_icon.svg';
import bottle from '../assets/img/bottle_icon@2x.png';
import {constant} from "../helpers/constant";

const Legend = () => {
  return(
    <>
      <div className="legend-wrapper">
        <div className="items-wrapper">
          <div className="legend-content-wrapper"><img src={user} alt="user player icon" width={25}/> You</div>
          <div className="legend-content-wrapper"><img src={bottle} alt="bottle player icon" width={25}/> The Bottle</div>
          <div className="legend-content-wrapper">
            <div
              style={{
                width:25,
                height:25,
                borderRadius:'50%',
                backgroundColor:"#F2A7A7"
              }}>
            </div>GPgb - Great Pacific garbage patch
          </div>
        </div>
        <div className="legend-direction-wrapper">
          { constant.map(( direction, index ) => (
            <div key={index} className="direction"><span className="direction-capital">{direction.shorthand}</span>{direction.direction}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Legend;
