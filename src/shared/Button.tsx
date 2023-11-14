const Button = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className: string;
  onClick?: () => void;
}) => {
  return (
    <a
      href="#contact"
      className={`w-max rounded-[2.32194rem] py-3 text-sm font-semibold leading-[1.27313rem] laptop:py-4 ${className}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default Button;
