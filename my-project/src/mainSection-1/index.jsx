const Section1 = () => {
  return (
    <div className="font-serif" >
      <div className="flex ">
       
        <div className=" w-1/2 flex justify-center flex-col px-24 gap-8">
          <h2 className="font-bold text-4xl ">Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="" className="font-bold text-sm relative inline-block hover:text-yellow-400 " >LEARN MORE</a>
        </div>

        <img className=" w-1/2" src="./egg.png" alt="" />

      </div>

      <div className=" flex">
        <img src="cup.png" className=" w-1/2"   alt="" />
        <div className=" w-1/2 flex justify-center flex-col px-24 gap-8">
          <h2 className="font-bold text-4xl">Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href=""  className="font-bold text-sm relative inline-block hover:text-red-400 ">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
