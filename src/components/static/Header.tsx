const Header = () => {
  return (
    <>
      <div className="w-full h-[50px] justify-center items-center flex">
        <div className="w-[95%] h-full flex justify-between items-center">
          <div>Jonathan</div>
          <div className="flex max-sm:hidden">
            Francis Kossyrisochukwu Uzoigwe
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg bg-purple-500 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
