import Nav from '../Nav/Nav';

function Header() {
  return (
    <div className="App">
      <header className="app__header">
        <h1>Barberism</h1>
        <h2>Connecting you to Barbers to meet individualized needs!</h2>
        <Nav />
      </header>
    </div>
  );
}

export default Header;
