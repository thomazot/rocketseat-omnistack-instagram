import React, { Component } from "react";
import Api from '../services/api';

import './New.css';

export default class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await Api.post('posts', data);

        this.props.history.push('/');
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return <form id="new-post" onSubmit={ this.handleSubmit }>
            <input required type="file" onChange={ this.handleImageChange } />
            <input 
                required
                type="text"
                name="author"
                placeholder="Autor do post" 
                onChange={this.handleChange}
                value={ this.state.author }/>
            <input 
                required
                type="text"
                name="place"
                placeholder="Local do post" 
                onChange={this.handleChange}
                value={ this.state.place } />
            <input 
                required
                type="text"
                name="description"
                placeholder="Descrição do post" 
                onChange={this.handleChange}
                value={ this.state.description } />
            <input 
                required
                type="text"
                name="hashtags"
                placeholder="Hashtags do post" 
                onChange={this.handleChange}
                value={ this.state.hashtags } />

            <button type="submit">Enviar</button>
        </form>;
    }
}