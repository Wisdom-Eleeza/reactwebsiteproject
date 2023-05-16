import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  const trainerLength = 6;
  const trainer = [];


  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log('IMAGES::', images)

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        accusamus consequatur  repellendus molestiae
        eligendi doloribus maiores!
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery Image ${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;
