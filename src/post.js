import React, { Component } from 'react';
import { DeleteAction,EditAction } from './actions/postAction';
import { connect } from 'react-redux';

class Post extends Component {
    handleDelete = (id) => {
        this.props.dispatch(DeleteAction(id));
    }
    handleEdit = (id) => {
        this.props.dispatch(EditAction(id))
    }
    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.message}</p>
                <button onClick={() => this.handleEdit(this.props.post.id)}>Edit</button>
                <button onClick={() => this.handleDelete(this.props.post.id)}>Delete</button>
            </div>
        );
    }
}
export default connect()(Post);