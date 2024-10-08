import Post from './Post'

import './Post.css'

import img from '../imagens/atu.jpg'

export default function Postagens () {
    return (
        <div className="Postagens">
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
            <Post imagem ={img} />
        </div>
    )
}