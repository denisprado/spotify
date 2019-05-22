import React from 'react'

import { Container, Header, Songlist } from './styles.js'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (

    <Container>
        <Header>
            <img src="https://www.billboard.com/files/styles/900_wide/public/media/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240.jpg" alt="play list" />

            <div>
                <span>PLAYLIST</span>
                <h1>ROCK Forever</h1>
                <p>13 músicas</p>
                <button>PLAY</button>
            </div>
        </Header>

        <Songlist cellPadding={0} cellSpacing={0} >
            <thead>
                <th />
                <th>Título</th>
                <th>Artísta</th>
                <th>Album</th>
                <th><img src={ClockIcon} alt="duração" /></th>
            </thead>

            <tbody>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="adicionar" /></td>
                    <td>The wall</td>
                    <td>Pink Floyd</td>
                    <td>the wall</td>
                    <td>10:15</td>
                </tr>
            </tbody>
        </Songlist>
    </Container>

)

export default Playlist