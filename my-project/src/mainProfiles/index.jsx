const Profiles = () => {
  return (
    <div className="flex flex-col items-center font-serif ">

      <h3 className="text-xl pt-32 pb-16">CLIENT TESTIMONIALS</h3>

      <div className="flex ">

        <div className="flex flex-col items-center ">
          <img className="" src="./client-1.png" alt="" />
          <p className="p-8  pb-20 px-16">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h5 className="font-bold">Emily R.</h5>
          <h6 className="text-sm text-gray-400">Marketing Director</h6>
        </div>

        <div className="flex flex-col items-center ">
          <img src="./client-2.png" alt="" />
          <p className="pt-8 pb-20 px-16">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h5 className="font-bold">Thomas S.</h5>
          <h6 className="text-sm text-gray-400">Chief Operating Officer</h6>
        </div>

        <div className="flex flex-col items-center ">
          <img src="./client-3.png" alt="" />
          <p className="p-8  pb-20 px-16">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h5 className="font-bold">Jennie F.</h5>
          <h6 className="text-sm text-gray-400">Business Owner</h6>
        </div>

      </div>

    </div>
  );
};

export default Profiles;
