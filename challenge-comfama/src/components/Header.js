import logo from '../logoComfama.svg'


export const Header = () => {
  return (
    <header className="App-header">
      <a href="https://www.comfama.com/" target="_blank">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
        <h1>Challenge</h1>
      <a href="https://www.comfama.com/" target="_blank">
        <img src={logo} className="App-logo" alt="logo" />
      </a>

    </header>
  )
}

export default Header