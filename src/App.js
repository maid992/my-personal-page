import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="navBar">
          <div className="textDiv">About</div>
          <div className="textDiv">Work</div>
          <div className="textDiv">Contact</div>
        </div>
        <div className="name-title-container">
          <div className="my-name">Maid Telalović</div>
          <div className="block-line" />
          <div className="my-title">web developer</div>
        </div>
        <div className="text-body">
          <div className="headings" style={{ color: '#C9C927' }}>
            About
          </div>
          <div className="paragraph">
            Front-end developer based in Zenica, BiH. Always looking for new oportunities.
            Willing to relocate. Have strong passion about web development and
            design(2D/3D).
          </div>
          <div className="headings" style={{ color: '#D1345F' }}>
            Specialities
          </div>
          <div className="paragraph">
            Javascript,<br /> React.js (high-level),<br />
            Typescript,<br /> MobX/Redux,<br /> Node.js (medium-level),<br /> Webpack/NPM,<br />{' '}
            ...moreToCome
          </div>
          <div className="headings" style={{ color: '#1F95E3' }}>
            Work
          </div>
          <div className="paragraph">
            <span>## Hulleo - Time managment app</span>
            <br />
            <br />
            <br />
            <span>## Nectar Beer - Product website</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App
