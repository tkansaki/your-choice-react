import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Menu, Icon, Image,} from 'semantic-ui-react';
import logo from './images/logo.png'
import sublogo from './images/sublogo.png'
import album from './images/album.jpeg'

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless id="TopMenu">
        <Container id="TopMenuContainer">
          <Menu.Menu position="left">
            <Menu.Item><Icon class="icon" name="instagram" size='big'></Icon></Menu.Item>
            <Menu.Item><Icon class="icon" name="facebook f" size='big'></Icon></Menu.Item>
            <Menu.Item><Icon class="icon" name="twitter" size='big'></Icon></Menu.Item>
            <Menu.Item><Icon class="icon" name="youtube" size='big'></Icon></Menu.Item>
          </Menu.Menu>
          <Menu.Item>
            <div id="logo">
              <Image src={logo} size='medium large' centered></Image>
              <Image src={sublogo} size='medium large' verticalAlign='bottom' centered></Image>
            </div>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item><Icon class="icon" name="amazon" size='big'></Icon></Menu.Item>
            <Menu.Item><Icon class="icon" name="spotify" size='big'></Icon></Menu.Item>
            <Menu.Item><Icon class="icon" name="youtube" size='big'></Icon></Menu.Item>
            <Menu.Item><Icon class="icon" name="shop" size='big'></Icon></Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

class SubMenu extends React.Component {
  render() {
    return (
      <Menu id="SubMenu" borderless widths={4} size='huge'>
        <Container id="SubMenuContainer">
          <Menu.Item><a>ORDER NOW</a></Menu.Item>
          <Menu.Item><a>NEWS</a></Menu.Item>
          <Menu.Item><a>TOUR</a></Menu.Item>
          <Menu.Item><a>CONTENT</a></Menu.Item>
        </Container>
      </Menu>
    );
  }
}

class News extends React.Component {
  render() {
    return (
      <div id="News">
        <Container id="NewsContainer">
          <table>
            <tr>
              <td>LATEST NEWS:</td>
              <td><p>NIGHTWISH ANNOUNCES NORTH AMERICAN TOUR 2022!</p></td>
              <td><p>OCTOBER 12, 2021</p></td>
            </tr>
          </table>
        </Container>
      </div>
    );
  }
}

class Album extends React.Component {
  render() {
    return (
      <Container id="Album">
        <table>
          <tr>
            <td>
              <div id="AlbumLeftColumn">
                <Image src={album} size="huge"></Image>
                <div id="button1" class="button">
                  <p>ORDER NOW</p>
                </div>
                <div id="button2" className="button">
                  <p>STREAM HUMAN :||: NATURE NOW</p>
                </div>
                <div id="button3" className="button">
                  <p>READ THE LYRICS</p>
                </div>
              </div>
            </td>
            <td>
              <div id="AlbumRightColumn">
                <Image src={logo} size='medium' centered></Image>
                <Image src={sublogo} size='medium' verticalAlign='bottom'></Image>
                <h2>OUT NOW!</h2>
                <h2>CD 1:</h2>
                  <ol role="list">
                    <li>
                      <strong>Music</strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Noise </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Shoemaker </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Harvest </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Pan </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>How’s The Heart? </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Procession </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Tribal</strong>
                      <a><strong> </strong><em>(lyrics)</em></a>
                    </li>
                    <li>
                      <strong>Endlessness </strong>
                      <a><em>(lyrics)</em></a>
                    </li>
                  </ol>
                <h2>CD 2:</h2>
                <ol role="list">
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Vista</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World</em> -
                    <strong>The Blue</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>The Green</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Moors</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Aurorae</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong> Quiet As The Snow</strong>
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Anthropocene </strong>(incl. “Hurrian Hymn To Nikkal”)
                  </li>
                  <li>
                    <em>All The Works Of Nature Which Adorn The World </em>-
                    <strong>Ad Astra</strong>
                  </li>
                </ol>
              </div>
            </td>
          </tr>
        </table>
      </Container>
    );
  }
}

class Nightwish extends React.Component {
  render() {
    return (
      <div>
        <TopMenu />
        <SubMenu />
        <News />
        <Album/>
      </div>
    );
  }
}

ReactDOM.render(<Nightwish/>, document.getElementById('root'));