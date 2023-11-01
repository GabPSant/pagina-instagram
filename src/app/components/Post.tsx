import Secao from './Secao'
import Rodape from './Rodape'
import Image from 'next/image'
import imagemVazia from '../../../public/vazia.jpg'
import './post.css'

interface PostProps{
    nome:string,
    lugar:string,
    imagem:string
}
// Ajuste a propriedade de 'imagem'
export default function Post({nome,lugar, imagem}:PostProps){
    return(
        <div id='perfil'>
        <Secao nome={nome} lugar={lugar}/>
        <Image src={imagemVazia} alt='Imagem vazia central' id='imagemCentral'></Image>
        <Rodape/>
        </div>
    );
}