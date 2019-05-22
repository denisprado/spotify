import React from 'react'

import { Container, Title, Playlist, List } from './styles.js'

const Browse = () => (
    <Container><Title>Navegar</Title>

        <List>
            <Playlist to="/playlists/1">
                <img src="https://www.billboard.com/files/styles/900_wide/public/media/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240.jpg" alt="play list" />
                <strong>Melhores Rocks</strong>
                <p>Blab bla alsbla lajsbdlasbdlajsdblas lasjhda  nalsjdbalsjdbnb  asjldbaljdba</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img src="https://www.billboard.com/files/styles/900_wide/public/media/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240.jpg" alt="play list" />
                <strong>Melhores Rocks</strong>
                <p>Blab bla alsbla lajsbdlasbdlajsdblas lasjhda  nalsjdbalsjdbnb  asjldbaljdba</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img src="https://www.billboard.com/files/styles/900_wide/public/media/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240.jpg" alt="play list" />
                <strong>Melhores Rocks</strong>
                <p>Blab bla alsbla lajsbdlasbdlajsdblas lasjhda  nalsjdbalsjdbnb  asjldbaljdba</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img src="https://www.billboard.com/files/styles/900_wide/public/media/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240.jpg" alt="play list" />
                <strong>Melhores Rocks</strong>
                <p>Blab bla alsbla lajsbdlasbdlajsdblas lasjhda  nalsjdbalsjdbnb  asjldbaljdba</p>
            </Playlist>
        </List>
    </Container>
)

export default Browse