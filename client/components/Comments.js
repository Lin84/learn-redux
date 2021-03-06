import React, { Component } from 'react';

class Comments extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
        this.allRefs = {};
    }

    handleSubmit(e) {
        e.preventDefault();

        const { postId } = this.props.params;
        const author = this.allRefs.author.value;
        const comment = this.allRefs.comment.value;

        this.props.addComment(postId, author, comment);
        this.allRefs.commentForm.reset();
    }

    renderComment(comment, i) {
        return (
            <div className='comment' key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className='remove-comment' onClick={() => this.props.removeComment(this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className='comments'>
                { this.props.postComments.map(this.renderComment)}
                <form ref={(form) => this.allRefs['commentForm'] = form} className="comment-form" onSubmit={this.handleSubmit}>
                    <input type='text' ref={(input) => this.allRefs['author'] = input} placeholder="author"/>
                    <input type='text' ref={(input) => this.allRefs['comment'] = input} placeholder="comment"/>
                    <input type='submit' hidden/>
                </form>
            </div>
        );
    }

}

export default Comments;
