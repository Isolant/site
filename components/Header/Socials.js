import { horizontalPadding } from "../../classes/Spacing";

import { ReactComponent as FacebookIcon } from '../../public/images/icons/social/header/facebook.svg';
import { ReactComponent as WhatsappIcon } from '../../public/images/icons/social/header/whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../../public/images/icons/social/header/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../public/images/icons/social/header/youtube.svg';

export default function Socials() {
  return (
    <nav className={`fixed z-20 w-full top-[58px] sm:top-[74px] ${horizontalPadding}`}>
      <ul className="flex justify-end">
        <li>
          <a
            href="https://www.facebook.com/Isolant.Aislantes/?fref=ts"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 flex items-center justify-center w-10 h-10 hover:bg-gray-600 transition ease-in-out duration-100 rounded-bl-md"
          >
            <FacebookIcon
              className="text-white fill-current"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/isolant.aislantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 flex items-center justify-center w-10 h-10 hover:bg-gray-600 transition ease-in-out duration-100"
          >
            <InstagramIcon
              className="text-white fill-current"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCrYVrCoJOaHIxyim1-SHvtw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 flex items-center justify-center w-10 h-10 hover:bg-gray-600 transition ease-in-out duration-100"
          >
            <YoutubeIcon
              className="text-white fill-current"
            />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5491124930555"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 flex items-center justify-center w-10 h-10 hover:bg-gray-600 transition ease-in-out duration-100 rounded-br-md"
          >
            <WhatsappIcon
              className="text-white fill-current"
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}