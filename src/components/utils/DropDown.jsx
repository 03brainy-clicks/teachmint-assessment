import { useState, useEffect, useRef } from "react";

const DropDown = ({ options, onSelect, select, placeholder }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative rounded-sm" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 w-full bg-white text-xs font-medium border border-orange-600 text-orange-600 rounded-sm outline-none"
      >
        {select ? select : placeholder}
      </button>
      {open && (
        <div className="absolute top-9 bg-white p-1 w-full border space-y-1 rounded-sm z-10">
          {options.map((item) => (
            <div
              onClick={() => {
                onSelect(item);
                setOpen(!open);
              }}
              className="p-1 text-xs rounded-sm hover:bg-pizza-100 cursor-pointer animate"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
