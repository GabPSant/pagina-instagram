import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Icone de Coração
import { faHeart as farFaHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasFaHeart} from '@fortawesome/free-solid-svg-icons';

// Icone de comentario
import { faComment as farFaComment} from '@fortawesome/free-regular-svg-icons';
import { faComment as fasFaComment } from '@fortawesome/free-solid-svg-icons/faComment';

// Icone de mensagem
import { faPaperPlane as farFaPaperPlane} from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane as fasFaPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

// Icone de marcação
import { faBookmark as farFaBookmark} from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasFaBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import './rodape.css'

const tamanhoIcone = 24;

const LikeDislike = (opiniao:boolean) => {opiniao === true ? opiniao = false: opiniao = true;}

/*function TrocarIcone(){
    const like:boolean = false;

    return (
        
    );
}*/

export default function Rodape(){
    return (
        <footer>
            <button type="button">
                <FontAwesomeIcon icon={fasFaHeart} style={{color:'#da1010'}} width={tamanhoIcone} height={tamanhoIcone} 
                className='icone'/>
            </button>

            <button type='button'>
                <FontAwesomeIcon icon={farFaComment} style={{color:'#000000'}} width={tamanhoIcone} height={tamanhoIcone}
                className='icone'/>
            </button>

            <button type='button'>
                <FontAwesomeIcon icon={farFaPaperPlane} style={{color:'#000000'}} width={tamanhoIcone} height={tamanhoIcone}
                className='icone'/>
            </button>

            <button type='button' id='marcador'>
                <FontAwesomeIcon icon={farFaBookmark} style={{color: '#000000'}} width={tamanhoIcone} height={tamanhoIcone}
                className='icone'/>
            </button>
        </footer>
    )
}