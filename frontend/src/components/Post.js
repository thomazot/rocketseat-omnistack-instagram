import React, { Component } from "react";
import Api from '../services/api';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';


export default class Post extends Component {

    handleLike = id => {
        Api.post(`/posts/${ id }/like`);
    }

    render() {

        const { post } = this.props;

        return <article>
        <header>
            <div className="user-info">
                <span>{ post.author }</span>
                <span className="place">{ post.places }</span>
            </div>
            <img src={ more } alt="Mais" />
        </header>
        <img src={`http://localhost:3333/files/${ post.image }`} />
        <footer>
            <div className="actions">
                <button type="button" onClick={ () => this.handleLike(post._id) } >
                    <img src={ like } alt="Curtir" />
                </button>
                <img src={ comment } alt="Comentar" />
                <img src={ send } alt="Enviar" />
            </div>

            <strong>{ post.likes } curtidas</strong>

            <p>
                { post.description }
                <span>{ post.hashtags }</span>
            </p>
        </footer>
    </article>;
    }
}