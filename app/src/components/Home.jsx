import Header from './Header';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header/>
      <div className="player">
        <img src="./player.png" alt="player" />
      </div>
      <div className="ball">
        <img src="./ball.png" alt="player" />
      </div>
    </div>
  );
}

export default Home;
