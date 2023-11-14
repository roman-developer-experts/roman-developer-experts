const Footer = () => {
  return (
    <footer className="border-b-o mx-14 mt-[230%] flex items-center justify-center border border-x-0 border-t-[0.5px] border-[#C4C4C4] bg-white py-5 mobile-md:mt-[200%] mobile-lg:mt-[170%] tablet:mt-[100%] laptop:mt-[50%] desktop:mt-[35%] desktop-lg:mt-[25%]">
      <p className="text-center text-xs leading-[1.12875rem] text-body tablet:text-sm">
        © 2023 Roman Developers Ltd.
        <br className="mobile-md:hidden" /> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
