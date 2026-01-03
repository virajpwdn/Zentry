interface ButtonProps {
  id: string;
  title: string;
  containerClass: string;
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const Button = ({
  id,
  title,
  containerClass,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-300 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};
export default Button;
