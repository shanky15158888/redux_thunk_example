import React, { Component } from 'react';
import PostForm from './postForm';
import AllPost from './allPost';


class PostProject extends Component {
    render() {
        return (
            <React.Fragment>
                <PostForm />
                <AllPost />
            </React.Fragment>
        );
    }
}
export default PostProject;
