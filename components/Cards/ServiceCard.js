import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import { ReactComponent as ArrowIcon } from "../../public/images/icons/arrow-right.svg";

import { standardTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function ServiceCard({ service, classes, isSustainability, iconSize }) {
  return (
    service.link && service.link.startsWith('http') || service.link && service.link.startsWith('www') ?
      <a
        href={service.link ? service.link : ''}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="rounded-full bg-white shadow-md w-24 h-24 flex items-center justify-center mx-auto group-hover:shadow-lg transition duration-75 ease-in-out">
          <Image
            layout="intrinsic"
            width={iconSize ? iconSize : 32}
            height={iconSize ? iconSize : 32}
            src={service.icon}
            alt={service.title}
          />
        </div>
        <h6
          className={`${uppercaseTextClasses} md:text-sm mx-auto mt-4 mb-2 sm:mt-6 text-center ${isSustainability === true ? 'text-sustainability' : 'text-primary'}`}
        >
          {service.title}
        </h6>
        <p
          className={`${standardTextClasses} text-white md:text-sm text-gray-400 text-center md:max-w-md md:mx-auto`}
        >
          {service.text}
        </p>
        {service.linkText ?
          <div
            className={`${uppercaseTextClasses} mx-auto mt-4 mb-2 sm:mt-6 text-center text-gray-600 font-semibold flex items-center gap-1 justify-center`}
          >
            {service.linkText}
            <ArrowIcon className="fill-current fill-gray-800" />
          </div>
        : ''
        }
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
              width={iconSize ? iconSize : 32}
              height={iconSize ? iconSize : 32}
              src={service.icon}
              alt={service.title}
            />
          </div>
          <h6
            className={`${uppercaseTextClasses} md:text-sm mx-auto mt-4 mb-2 sm:mt-6 text-center ${isSustainability === true ? 'text-sustainability' : 'text-primary'}`}
          >
            {service.title}
          </h6>
          <p
            className={`${standardTextClasses} md:text-sm text-gray-400 text-center`}
          >
            {service.text}
          </p>
          {service.linkText ?
            <div
              className={`${uppercaseTextClasses} mx-auto mt-4 mb-2 sm:mt-6 text-center text-gray-600 font-semibold flex items-center gap-1 justify-center`}
            >
              {service.linkText}
              <ArrowIcon className="fill-current fill-gray-800" />
            </div>
          : ''
          }
        </a>
      </Link>
  )
}