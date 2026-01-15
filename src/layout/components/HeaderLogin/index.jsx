import images from "@/assets/images";
function HeaderLogin() {
  return (
    <div className="fixed -top-28 right-0 left-0 hidden h-56 md:block">
      <picture>
        <img
          src={images.threadsBanner}
          alt="Threads Banner"
          className="w-full scale-120 object-cover object-center"
        />
      </picture>
    </div>
  );
}

export default HeaderLogin;
