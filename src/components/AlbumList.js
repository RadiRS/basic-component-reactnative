// Import labrary for making a component
import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

// Make a component (use Class Component for dynamic data)
class AlbumList extends Component {
  // Set state to set in to state to be render in component
  state = { albums: [] };

  componentWillMount() {
    // Use axios library to get json data from api and parse to state
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  // Get each data from state and render to the component
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

// Make the component avalable to other part of components
export default AlbumList;
