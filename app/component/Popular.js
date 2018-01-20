/**
 * Created by Daniel on 18/01/2018.
 */
import React, { Component } from "react";
import SelectLanguages from "./selectLanguages";
import RepoGrid from './RepoGrid';
import api from "../utils/api";
import Loading from './Loading'

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: null
    };

    this.updateLanguge = this.updateLanguge.bind(this);
  }

  componentDidMount() {
    this.updateLanguge(this.state.selectedLanguage);
  }

  async updateLanguge(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    const repos = await api.fetchPopular(lang);
    this.setState({ repos });
  }

  render() {
    return (
      <div>
        <SelectLanguages
          selectedLanguage={this.state.selectedLanguage}
          updateLanguge={this.updateLanguge}
        />
          {!this.state.repos ? <Loading text="Downloading Un Momento" /> : <RepoGrid repos={this.state.repos}/>}
      </div>
    );
  }
}

export default Popular;
