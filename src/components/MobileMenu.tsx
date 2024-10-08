const MobileMenu = () => {
  return (
    <div className="bg-black w-56 absolute top-8 py-5 flex-col flex border-2 border-gray-700">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          TV Shows
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Movies
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
