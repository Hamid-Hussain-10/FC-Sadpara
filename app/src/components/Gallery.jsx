
import './Gallery.css';

const images = [
  {
    img: './3.jpg',
  },
    {
      img: './1.jpg',
    },
    {
      img: './about-img.jpg'
    },
    {
      img: './4.jpg'
    },
    {
      img: './2.jpg'
    },
];

function Gallery3D() {
  return (
    <>
    <h2>GALLERY</h2>
    <div className="gallery-3d">
      {images.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img src={img.img} alt={`Person ${index + 1}`} />
        </div>
      ))}
    </div>
    </>
  );
}

export default Gallery3D;
