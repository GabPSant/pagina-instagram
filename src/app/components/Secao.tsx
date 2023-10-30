import './styles.css'
import avatar from '../../../public/avatar.png'
import Image from 'next/image'


export default function Secao(){
    return (
        <header style={{
            display: 'flex',
            border: '1px solid black',
            margin: '0px'
        }}>
            <div id='borda'>
                <Image src={avatar} alt="Icone do Avatar" id='avatar'/>
            </div>
            <div style={{
                display: 'block',
                margin: '0 0.8rem'
            }}>
                <h3>Mari Cruz</h3>
                <h4>Recife, Brasil</h4>
            </div>
            <button>
                <Image></Image>
            </button>
        </header>
    );
}