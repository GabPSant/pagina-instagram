import Secao from './Secao'
import Image from 'next/image'
import imagemVazia from '../../../public/vazia.jpg'
import './perfil.css'

export default function Perfil(){
    return(
        <div id='perfil'>
        <Secao/>
        <Image src={imagemVazia} alt='Imagem vazia central' id='imagemCentral'></Image>
        </div>
    );
}