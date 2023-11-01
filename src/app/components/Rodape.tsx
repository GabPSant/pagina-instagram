import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function Rodape(){
    return (
        <footer style={{height:'3rem 0'}}>
            <button type="button" style={{display:'flex', margin:'0 0.7rem 0'}}>
                <FontAwesomeIcon icon={faHeart} style={{color:'#da1010'}} width={20} height={20}/>
            </button>
        </footer>
    )
}