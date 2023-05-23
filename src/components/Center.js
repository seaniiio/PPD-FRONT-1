import '../App.css';
import personImg from '../images/icon_person.png'

function Center(props) {
    if(props.img === 'person') {
      return <div className="center">
        <img src={personImg} className="image"></img>
      </div>
    }
  }

export default Center;