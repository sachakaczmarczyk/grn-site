
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-green-800 text-xl">
          🐰 GRN
        </Link>
        <div className="hidden md:flex gap-6 text-green-700">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/shop" className="hover:text-green-500">Shop</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white text-green-700">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
