import React from 'react'

// Components
import Content from './Content';

// Styles
import './index.css';


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [], // Will hold a list of posts
    };
  }

  // Set state with the list of posts on receive
  componentWillMount() {
    const data = null;
    const xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.responseText !== "") {
        let ks = Object.keys(JSON.parse(xhr.responseText));
        let posts = ks.map((k) => JSON.parse(xhr.responseText)[k]);

        this.setState({ posts });
      }
    });

    // CHANGE THIS LINE IN PRODUCTION
    xhr.open('GET', 'http://localhost:8080/blogposts');
    // xhr.setRequestHeader('cache-control', 'no-cache');

    xhr.send(data);
  }

  render() {
    return (
      <section className="blog">
        <h1>Blog Posts</h1>
        <ul className="blogposts">
          {this.state.posts.map(Content)}
        </ul>
      </section>
    );
  }
};

export default Blog;
