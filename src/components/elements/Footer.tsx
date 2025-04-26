import logoIcon from "../../assets/icon.svg";
import { navItems } from "../../utils/nav-items";

const Footer = () => {
  return (
    <div className="w-full pt-28">
      <div className="max-container pb-8 flex flex-row justify-between items-center">
        <div className="max-sm:hidden flex flex-row items-center gap-2">
          <img src={logoIcon} alt="Logo" className="h-10 w-10" />
          <div className="inline-flex text-lg font-semibold text-heading-1">
            EdgeAI
          </div>
        </div>

        <ul className="flex flex-row px-6 text-heading-2 min-w-max justify-center">
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
      </div>
    </div>
  );
};

export default Footer;
