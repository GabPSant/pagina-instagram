import Post from './components/Post';
import './page.css'
import vazia from '../../public/vazia.jpg'

export default function Home() {
  return (
    <>
      <Post nome='Mari Cruz' lugar='Recife, Brasil' imagem={vazia}/>
    </>
  )
}
