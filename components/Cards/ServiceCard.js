// Globals
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

// Classes
import { standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function ServiceCard({ service, classes }) {
  return (
    service.link && service.link.startsWith('http') || service.link && service.link.startsWith('www') ?
      <a
        href={service.link ? service.link : ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full bg-white shadow-md w-24 h-24 flex items-center justify-center mx-auto group-hover:shadow-lg transition duration-75 ease-in-out">
          <Image
            layout="intrinsic"
            width={32}
            height={32}
            src={service.icon}
            alt={service.title}
          />
        </div>
        <h6
          className={`${uppercaseTextClasses} mx-auto mt-4 mb-2 sm:mt-6 text-center text-primary`}
        >
          {service.title}
        </h6>
        <p
          className={`${standardTextClasses} text-white text-gray-400 text-center`}
        >
          {service.text}
        </p>
      </a>
    :
      <Link
        href={service.link ? service.link : ''}
      >
        <a
          className={`${classes !== undefined ? classes : ''} relative block hover:opacity-90 group`}
        >
          <div className="rounded-full bg-white shadow-md w-24 h-24 flex items-center justify-center mx-auto group-hover:shadow-lg transition duration-75 ease-in-out">
            <Image
              layout="intrinsic"
              width={32}
              height={32}
              src={service.icon}
              alt={service.title}
            />
          </div>
          <h6
            className={`${uppercaseTextClasses} mx-auto mt-4 mb-2 sm:mt-6 text-center text-primary`}
          >
            {service.title}
          </h6>
          <p
            className={`${standardTextClasses} text-white text-gray-400 text-center`}
          >
            {service.text}
          </p>
        </a>
      </Link>
  )
}