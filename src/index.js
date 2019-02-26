import React, { Fragment } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

import Header from "./Header";
import Post from "./Post";

import "./styles.scss";

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Diego Fernandes",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        time: "há 1 min",
        body: "Foi muito legal a palestra de hoje."
      },
      {
        id: 2,
        name: "Bruno Frigeri",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        time: "há 5 min",
        body: "A foto está a mesma porém o conteudo é diferente"
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
