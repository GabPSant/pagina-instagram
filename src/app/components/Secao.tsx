import './secao.css';
import avatar from '../../../public/avatar.png';
import pontos from '../../../public/pontos.png'
import Image from 'next/image';


export default function Secao(){
    return (
        <header>
            <div id='borda'>
                <Image src={avatar} alt="Icone do Avatar" id='avatar'/>
            </div>
            <div id='superior'>
                <h3>Mari Cruz</h3>
                <h5>Recife, Brasil</h5>
            </div>
            <button type='button'>
                <Image src={pontos} alt='3 pontos'
                width={30} height={30}></Image>
            </button>
        </header>
    );
}