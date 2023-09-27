import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import { smallTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function OtherServicesCard({ service, classes }) {
  const children = <div className="relative rounded-lg shadow-md hover:shadow-lg transition duration-75 ease-in-out bg-white">
    <div className="relative w-full h-40">
      <Image
        layout="fill"
        objectFit="cover"
        className="w-full h-full rounded-t-lg"
        src={service.image}
        alt={service.title}
      />
    </div>
    <div className="p-4 rounded-b-lg">
      <h6
        className={`${uppercaseTextClasses} mb-2 text-gray-800 font-semibold`}
      >
        {service.title}
      </h6>
      <p
        className={`${smallTextClasses} text-gray-400 h-24`}
      >
        {service.text}
      </p>
      <span className={`${uppercaseTextClasses} text-primary font-semibold block mt-2`}>{service.ctaText}</span>
    </div>
  </div>;

  return (
    service.ctaLink && service.ctaLink.startsWith('http') || service.ctaLink && service.ctaLink.startsWith('www') ?
      <a
        href={service.ctaLink ? service.ctaLink : ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    :
      <Link
        href={service.ctaLink ? service.ctaLink : ''}
      >
        <a
          className={`${classes !== undefined ? classes : ''} relative block hover:opacity-90 group`}
        >
          {children}
        </a>
      </Link>
  )
}