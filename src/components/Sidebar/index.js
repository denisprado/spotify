import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Container, NewPlayList, Nav } from './styles'
import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'

import PropTypes from 'prop-types'

import Loading from '../../components/Loading'

class Sidebar extends Component {

    static propTypes = {
        getPlaylistsRequest: PropTypes.func.isRequired,
        playlists: PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string
            })),
            loading: PropTypes.bool,
        }).isRequired
    }

    componentDidMount() {
        this.props.getPlaylistsRequest()
    }

    render() {
        return (
            <Container>
                <div>
                    <Nav main>
                        <li>
                            <Link to="/">Navegar</Link>
                        </li>
                        <li>
                            <a href="#teste">Radio</a>
                        </li>
                    </Nav>
                    <Nav>
                        <li>
                            <span>SUA BIBLIOTECA</span>
                        </li>
                        <li>
                            <a href="#teste">Seu daily mix</a>
                        </li>
                        <li>
                            <a href="#teste">Tocados recentemente</a>
                        </li>
                        <li>
                            <a href="#teste">Albúns</a>
                        </li>
                        <li>
                            <a href="#teste">Artistas</a>
                        </li>
                        <li>
                            <a href="#teste">Estações</a>
                        </li>
                        <li>
                            <a href="#teste">Arquivos locais</a>
                        </li>
                        <li>
                            <a href="#teste">Videos</a>
                        </li>
                        <li>
                            <a href="#teste">Podcasts</a>
                        </li>
                    </Nav>
                    <Nav >
                        <li>
                            <span>PLAYLISTS</span>
                            {this.props.playlists.loading && <Loading />}
                        </li>
                        {this.props.playlists.data.map(playlist => (
                            <li key={playlist.id}>
                                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                            </li>
                        ))}
                    </Nav>
                </div>
                <NewPlayList>
                    <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
                    Nova PLaylist
                </NewPlayList>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);