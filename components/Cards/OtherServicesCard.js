import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import { smallTextClasses, uppercaseTextClasses } from "../../classes/Text";

export default function OtherServicesCard({ service, classes, color, decorator }) {
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
    <div className="p-4 pt-0 rounded-b-lg">
      <h6
        className={`${uppercaseTextClasses} mb-2 text-gray-800 font-semibold line-clamp-3 h-12`}
      >
        {service.title}
      </h6>
      <p
        className={`${smallTextClasses} text-gray-400 min-h-[60px] line-clamp-2 md:line-clamp-3`}
      >
        {service.text}
      </p>
      <span
        className={`${uppercaseTextClasses} text-primary font-semibold block mt-2 flex gap-1 items-center`}
        style={{
            color: color || '',
            fill: color || '',
        }}
      >
          {service.ctaText}

          {decorator && decorator}
      </span>
    </div>
  </div>;

  return (
    service.ctaLink && service.ctaLink.startsWith('http') || service.ctaLink && service.ctaLink.startsWith('www') ?
      <a
        href={service.ctaLink ? service.ctaLink : ''}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classes !== undefined ? classes : ''} relative block hover:opacity-90 group`}
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