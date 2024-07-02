const Footer = () => {
  return (
    <div className="flex flex-col bg-green-200 items-center gap-12 p-12">

      <img className="w-36" src="/logo-footer.png" alt="" />

      <div className="flex gap-16">
        <a className="text-green-800 text-xl "   href="">About</a>
        <a className="text-green-800 text-xl "  href="">Services</a>
        <a className="text-green-800 text-xl "  href="">Projects</a>
      </div>

      <div className="flex gap-9">
        <a href="">
          <img src="/facebook-footer.png" alt="" />
        </a>
        <a href="">
          <img src="/insta-footer.png" alt="" />
        </a>
        <a href="">
          <img src="/x-footer.png" alt="" />
        </a>
        <a href="">
          <img src="/pinterest-footer.png" alt="" />
        </a>
      </div>

    </div>
  );
};

export default Footer;
