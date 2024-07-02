import cherryImage from '/cherry.png'; // Importe a imagem (certifique-se de ajustar o caminho conforme necessário)
import wholeOrange from '/whole-orange.png';

const Section2 = () => {
  return (
    <div className='flex font-serif'>

      <div className="flex flex-col text-center gap-8  w-1/2 bg-no-repeat  bg-cover py-10 px-28 "  style={{ backgroundImage: `url(${cherryImage})` }}>
        <h3 className="mt-96 text-black font-bold font-serif text-3xl">Graphic Design</h3>
        <p className="text-black">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>

      <div className='flex flex-col text-center gap-8 bg-no-repeat w-1/2  bg-cover py-10 px-28 ' style={{backgroundImage: `url(${wholeOrange})`}}>
        <h3 className="mt-96 text-black font-bold font-serif text-3xl">Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>

    </div>
  );
};

export default Section2;
