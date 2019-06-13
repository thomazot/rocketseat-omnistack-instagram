import React, { Component } from "react";
import Api from '../services/api';
import Post from '../components/Post';

import io from 'socket.io-client';

import  './Feed.css';

export default class Feed extends Component {

    state = {
        feed: []
    };

    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] });
        });

        socket.on('like', likedPost => {
            this.setState({ feed: this.state.feed.map(post=> post._id === likedPost._id ? likedPost : post)})
        });
    }

    async componentDidMount() {
        const response = await Api.get('posts');
        this.setState({ feed: response.data });
        this.registerToSocket();
    }

    render() {
        const { feed } = this.state;

        return <section id="post-list">
            { feed.map(post => <Post key={ post._id } post={ post } />) }   
        </section>;
    }
}