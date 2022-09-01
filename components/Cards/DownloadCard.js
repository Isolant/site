// Globals
import React from "react";
import Image from 'next/image';

// Classes
import { standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

// SVGs
import { ReactComponent as EyeIcon } from '../../images/icons/eye.svg';
import { ReactComponent as DownloadIcon } from '../../images/icons/download.svg';

export default function DownloadCard({ download, classes }) {
  return (
    <div
      className={`${classes !== undefined ? classes : ''} relative block`}
    >
      <div className="rounded-full bg-white shadow-lg w-24 h-24 flex items-center justify-center mx-auto">
        <Image
          src={download.icon}
          alt={download.title}
          width={32}
          height={32}
          layout="fixed"
        />
      </div>
      <h6
        className={`${uppercaseTextClasses} mx-auto mt-4 mb-2 sm:mt-6 text-center text-white font-bold`}
      >
        {download.title}
      </h6>
      <p
        className={`${standardTextClasses} text-white text-gray-400 text-center`}
      >
        {download.format}
      </p>
      <ul className="flex justify-center items-center my-2">
        {download.pdf &&
          <li>
            <a
              href={download.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`${uppercaseTextClasses} text-primary font-bold hover:opacity-90 flex items-center`}
            >
              <EyeIcon className="mr-1" />
              Ver
            </a>
          </li>
        }
        {download.zip &&
          <React.Fragment>
            <li className="mx-2 text-gray-400">|</li>
            <li>
              <a
                href={download.zip}
                target="_blank"
                rel="noopener noreferrer"
                className={`${uppercaseTextClasses} text-primary font-bold hover:opacity-90 flex items-center`}
              >
                <DownloadIcon className="mr-1" />
                Descargar
              </a>
            </li>
          </React.Fragment>
        }
      </ul>
    </div>
  )
}