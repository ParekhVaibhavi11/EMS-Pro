import { Menu } from "lucide-react";

function Navbar({
  setIsOpen,
}) {
  return (
    <div className="bg-white border-b h-16 flex items-center justify-between px-5">

      <button
        className="lg:hidden"
        onClick={() =>
          setIsOpen(true)
        }
      >
        <Menu size={24} />
      </button>

      <h2 className="font-semibold text-lg">
        Admin Dashboard
      </h2>

      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        A
      </div>

    </div>
  );
}

export default Navbar;