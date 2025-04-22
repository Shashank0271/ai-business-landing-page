import logoIcon from "../../assets/icon.svg"; // Adjust the path to your SVG file
import Button from "../shared/Button";

const Navbar = () => {
  const navItems = [
    { href: "#", text: "Home" },
    { href: "#services", text: "Services" },
    { href: "#about-us", text: "About Us" },
    { href: "features", text: "Features" },
  ];

  return (
    <header className="flex flex-row justify-between items-center p-4 max-container">
      <div className="flex flex-row items-center gap-2">
        <img src={logoIcon} alt="Logo" className="h-10 w-10" />
        <div className="inline-flex text-lg font-semibold text-heading-1">
          EdgeAI
        </div>
      </div>

      <ul className="max-lg:hidden flex flex-row px-6 text-heading-2 w-full justify-center">
        {navItems.map((item, index) => (
          <li>
            <a
              key={index}
              href={item.href}
              className="text-heading-2 px-4 text-nowrap font-medium"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-6">
        <Button label="Get Started" />
        <div className="cursor-pointer border-2 rounded-full p-2 hover:scale-110 max-h-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
