import Secao from './Secao'
import Rodape from './Rodape'
import Image, { StaticImageData } from 'next/image'
import './post.css'

interface PostProps{
    nome:string,
    lugar:string,
    imagem:StaticImageData
}
// Ajuste a propriedade de 'imagem'
export default function Post({nome,lugar, imagem}:PostProps){
    return(
        <div id='perfil'>
        <Secao nome={nome} lugar={lugar}/>
        <Image src={imagem} alt='Imagem vazia central' id='imagemCentral' ></Image>
        <Rodape/>
        </div>
    );
}