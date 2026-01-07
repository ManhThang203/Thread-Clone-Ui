const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
};

export const UserAvatar = ({ name, size = "md" }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={` ${sizeClasses[size]} bg-secondary text-foreground flex flex-shrink-0 items-center justify-center rounded-full font-semibold`}
    >
      {initial}
    </div>
  );
};
