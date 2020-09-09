import React from 'react';
import { connect } from 'react-redux';

import { createPost } from './redux/postsDuck';
import { deletePost } from './redux/postsDuck';

class App extends React.Component {
  state = {
    title: '',
    content: '',
  };

  onSubmit(e) {
    e.preventDefault();

    this.props.createPost(this.state.title, this.state.content);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <label htmlFor="title">Titulo:</label>
          <input
            value={this.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            id="title"
            name="title"
            type="text"
          />
          <label htmlFor="content">Contenido:</label>
          <input
            value={this.content}
            onChange={(e) => this.setState({ content: e.target.value })}
            id="content"
            name="content"
            type="text"
          />
          <button type="submit">crear post</button>
        </form>
        <div>
          {this.props.posts.map((post, index) => (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => this.props.deletePost(index)}>
                delete
              </button>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, {
  createPost,
  deletePost,
})(App);
