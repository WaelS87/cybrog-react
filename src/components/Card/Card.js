import './Card.css'
import{FaStar,FaDownload} from 'react-icons/fa'
import popular_01 from '../../assets/images/popular-01.jpg';
import popular_02 from '../../assets/images/popular-02.jpg';
import popular_03 from '../../assets/images/popular-03.jpg';
import popular_04 from '../../assets/images/popular-04.jpg';

const Card = (props) => {
  return (
    <> 
        <div className='most-popular-item'>
    <div className='card-wrapper'>
      <img className='most-popular-item-image' src={props.image}/>
      <div className='most-popular-item-content'>
        <h4 className='most-popular-item-title'>{props.title}<br/>
        <span>{props.category}</span>
        </h4>
        <ul>
          <li><span style={{"color":"yellow"}}><FaStar/></span><span>{props.rate}</span></li>
          <li><span style={{'color':"var(--color-primary)"}}><FaDownload/></span><span>{props.download}</span></li>
          
        </ul>

      </div>

    </div>

  </div>
</>
  )
}

export default Card