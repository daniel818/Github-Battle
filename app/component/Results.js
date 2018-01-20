/**
 * Created by Daniel on 19/01/2018.
 */
/**
 * Created by Daniel on 19/01/2018.
 */
import React, { Component } from "react";
import queryString from "query-string";
import api from "../utils/api";
import { Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import Loading from './Loading'

const Profile = props => {
  const {
    name,
    location,
    company,
    followers,
    following,
    public_repos,
    avatar_url,
    login,
    blog
  } = props.info;

  return (
    <PlayerPreview username={login} avatar={avatar_url}>
      <ul className="space-list-items">
        {name && <li>{name}</li>}
        {location && <li>{location}</li>}
        {company && <li>{company}</li>}
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
        <li>Public Repos: {public_repos}</li>
        {blog && (
          <li>
            <a href={blog}>{blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
};

const Player = ({ label, score, profile }) => {
  return (
    <div>
      <h1 className="header">{label}</h1>
      <h3 style={{ textAlign: "center" }}>Score: {score}</h3>
      <Profile info={profile} />
    </div>
  );
};

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      winner: null,
      loser: null,
      loading: true
    };
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);
    api.battle([players.playerOneName, players.playerTwoName]).then(results => {
      if (!results) {
        return this.setState({
          error:
            "Looks like there was an error. Check that both users exist on Github.",
          loading: false
        });
      }
      this.setState({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false
      });
    });
  }
  render() {
    const error = this.state.error;
    const winner = this.state.winner;
    const loser = this.state.loser;
    const loading = this.state.loading;

    if (loading === true) {
      return <Loading/>;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }
    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}
