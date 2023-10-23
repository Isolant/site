import React from "react";
import ReactMarkdown from "react-markdown";

import { boldTitleClasses, standardTextClasses } from "../../classes/Text";

export default function Video({ 
  video,
  title,
  text,
  type,
  classes
}) {
  return (
    type && type === "boxed" ? (
      <section
        className={`
          ${classes || "pb-12 sm:pb-16 md:pb-24"}
          relative container mx-auto text-center
          px-4 md:px-8 xl:px-0
          pt-12 md:pt-0
        `}
      >
        {title &&
          <h3
            className={`${boldTitleClasses} text-gray-800 mb-1 md:mb-2`}
          >
            <ReactMarkdown>{title}</ReactMarkdown>
          </h3>
        }
        {text &&
          <div
            className={`${standardTextClasses} text-gray-600`}
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        }
        <div
          className="aspect-w-16 aspect-h-9 mt-8 md:mt-12 mb-4 md:mb-0"
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.split('?v=')[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full rounded-xl"
          />
        </div>
      </section>
    ) : (
      <section>
        <iframe
          src={`https://www.youtube.com/embed/${video.split('?v=')[1]}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-60 md:h-96 lg:h-screen"
        />
      </section>
    )
  )
}