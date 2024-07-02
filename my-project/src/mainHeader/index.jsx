const Header = () => {
  return (
    <div className="bg-sky-500/[.75]  flex flex-col ">
      <nav className=" flex justify-between p-8">
        <img src="logo-sunnyside.png" alt="orange picture" />

        <ul className="flex gap-x-8 text-white font-semibold font-serif">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a
              href=""
              className="bg-gray-100 text-black px-6 py-2 rounded-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="flex text-7xl font-bold text-white self-center pt-20 font-serif ">
        We are creatives
      </h1>

      <div  className="flex justify-center  h-1/4">
      <img
          src="orange-theme.png"
          alt=""
          className="max-w-fit overflow-hidden h-1/4 relative top-[-20%]"
        />
         <img src="arrow-down.png" className="h-20 absolute top-80" alt="" />
      </div>
     
    </div>
  );
};

export default Header;
