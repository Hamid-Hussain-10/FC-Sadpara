import './Awards.css';

const cardsData = [
  {
    title: 'Award 1',
    img: './awards01.png',
  },
  {
    title: 'Award 2',
    img: './awards02.png',
  },
  {
    title: 'Award 3',
    img: './awards03.png'
  },
  {
    title: 'Award 4',
    img: './awards04.png'
  },
];

function Awards() {
  return (
    <>
        <h2>Awards</h2>
    <div className="awards">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Awards;
