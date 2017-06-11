import React, { Component } from 'react';
import Photo from './Photo';
import Comment from './Comments';

class Single extends Component {
    render() {
        // index of the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        // get us the post
        const post = this.props.posts[i];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}></Photo>
                <Comment />
            </div>
        );
    }
}

export default Single;
