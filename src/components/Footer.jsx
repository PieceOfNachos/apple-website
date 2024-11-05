import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store </span>
            or <span className="underline text-blue">
              {" "}
              other retailer{" "}
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-050-1966
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px]" />
        <div className="flex md:flex-row sm:flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
            <div className="flex">
              {footerLinks.map((link, i) => (
                <p key={link} className="font-semibold text-gray text-xs">
                  {link}{" "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </p>
              ))}
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
