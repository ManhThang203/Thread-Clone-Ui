const InstagramIcon = ({ className, style }) => {
  return (
    <i
      data-visualcompletion="css-img"
      aria-label="Instagram"
      className={className}
      role="img"
      style={{
        backgroundImage:
          'url("https://static.cdninstagram.com/rsrc.php/v4/yR/r/5XQu87_RU36.png")',
        backgroundPosition: "0px 0px",
        backgroundSize: "auto",
        width: "45px",
        height: "45px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        ...style, // Merge với style từ props nếu có
      }}
    ></i>
  );
};

export default InstagramIcon;
