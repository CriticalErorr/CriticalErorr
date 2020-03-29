import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPosts } from '../actions/post.Actions';
import { PropTypes } from 'prop-types';



class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : ''
        };

        this.onChange = this.onChange.bind(this);   
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title : this.state.title,
            body : this.state.body
        }
        //call action
        this.props.createPosts(post)
        console.log(post)
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title: </label><br/>
                        <input type='text' name='title' value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Body: </label><br/>
                        <textarea type='text' name='body' value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

createPosts.propTypes = {
    createPosts: PropTypes.func.isRequired
};

export default connect(null , { createPosts })(Postform);
