import React from "react"
import { Container, NewPlayList, Nav } from './styles'
import AddPlaylistIcon from '../../assets/images/add_playlist.svg'


const Sidebar = () => (
    <Container>
        <div>
            <Nav main>
                <li>
                    <a href="#">Navegar</a>
                </li>
                <li>
                    <a href="#">Radio</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>SUA BIBLIOTECA</span>
                </li>
                <li>
                    <a href="#">Seu daily mix</a>
                </li>
                <li>
                    <a href="#">Tocados recentemente</a>
                </li>
                <li>
                    <a href="#">Albúns</a>
                </li>
                <li>
                    <a href="#">Artistas</a>
                </li>
                <li>
                    <a href="#">Estações</a>
                </li>
                <li>
                    <a href="#">Arquivos locais</a>
                </li>
                <li>
                    <a href="#">Videos</a>
                </li>
                <li>
                    <a href="#">Podcasts</a>
                </li>
            </Nav>
            <Nav >
                <li><span>PLAYLISTS</span></li>
                <li>
                    <a href="#">playlist #1</a>
                </li>
                <li>
                    <a href="#">playlist #2</a>
                </li>
            </Nav>
        </div>
        <NewPlayList>
            <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
            Nova PLaylist
        </NewPlayList>
    </Container>
)

export default Sidebar;