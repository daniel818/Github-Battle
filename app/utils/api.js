/**
 * Created by Daniel on 18/01/2018.
 */
import axios from "axios";

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = "?client_id=" + id + "&client_secret=" + sec;

const getProfile = async username => {
  const res = await axios.get(
    "https://api.github.com/users/" + username + params
  );
  return res.data;
};

const getRepos = async username => {
  return await axios.get(
    "https://api.github.com/users/" +
      username +
      "/repos" +
      params +
      "&per_page=100"
  );
};

const getStarCount = repos => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
};

const handleError = error => {
  console.warn(error);
  return null;
};

const getUserData = async player => {
  const playerRes = await axios.all([getProfile(player), getRepos(player)]);

  const profile = playerRes[0];
  const repos = playerRes[1];

  return {
    profile: profile,
    score: calculateScore(profile, repos)
  };
};

const sortPlayers = players => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

module.exports = {
  battle: async players => {
    const data = await axios.all(players.map(getUserData));

    return sortPlayers(data);
  },
  fetchPopular: async language => {
    const encodedURI = window.encodeURI(
      "https://api.github.com/search/repositories?q=stars:>1+language:" +
        language +
        "&sort=stars&order=desc&type=Repositories"
    );

    const res = await axios.get(encodedURI);
    return res.data.items;
  }
};
