import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Songlist } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import Loading from '../../components/Loading';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    const { getPlaylistDetailsRequest } = this.props;
    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistDetails } = this.props;
    const playlist = playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}
            <button type="button">PLAY</button>
          </div>
        </Header>

        <Songlist cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artísta</th>
              <th>Album</th>
              <th>
                <img src={ClockIcon} alt="duração" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música encontrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>10:15</td>
                </tr>
              ))
            )}
          </tbody>
        </Songlist>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
