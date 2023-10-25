import React from "react";
import ReactMarkdown from 'react-markdown';

import { regularSubtitleClasses, standardTextClasses, uppercaseTextClasses } from "../../classes/Text";
import { horizontalPadding, verticalPadding } from "../../classes/Spacing";

import styles from './Typologies.module.css';

export default function Maintenance({
  background,
  image,
  title,
  text,
  linkText,
  linkCTA,
  color
}) {
  return (
    <section
      className={`
        relative
        ${verticalPadding}
      `}
      style={{ backgroundImage: background ? `url(${background})` : '' }}
    >
      <div
        className={`
          ${horizontalPadding}
          relative mx-auto container
        `}
      >
        <ul
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center
            rounded-lg
            bg-white
          "
        >
          <li>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
            />
          </li>
          <li
            className="grid grid-cols-1 gap-4"
          >
            <h5
              className={`
                ${regularSubtitleClasses}
                ${styles.Title}
                text-gray-800
              `}
            >
              <ReactMarkdown>{title}</ReactMarkdown>
            </h5>
            <div
              className={`
                ${standardTextClasses}
                grid grid-cols-1 gap-4
              `}
            >
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
            {linkText && linkCTA.startsWith('http') || linkCTA && linkCTA.startsWith('www') ?
              <a
                href={linkCTA || ''}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${uppercaseTextClasses}
                  flex items-center gap-1
                  relative hover:opacity-80
                `}
                style={{
                  color: color || "",
                  fill: color || "",
                 }}
              >
                {linkText}
                <svg className="fill-inherit" fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9.16016 9.16992c-.13672-.10937-.19141-.27344-.19141-.46484 0-.16406.05469-.32813.19141-.4375l2.59764-2.625h-11.10155c-.382812 0-.65625-.27344-.65625-.65625 0-.35547.273438-.65625.65625-.65625h11.10155l-2.59764-2.59766c-.27344-.24609-.27344-.65625 0-.902342.24609-.273437.65625-.273437.92964 0l3.7188 3.718752c.2461.24609.2461.65625 0 .90234l-3.7188 3.71875c-.27339.27344-.68355.27344-.92964 0z" /></svg>
              </a>
            :
              <Link
                href={linkCTA || ''}
              >
                <a
                  className={`
                    ${uppercaseTextClasses}
                    flex items-center gap-1
                    relative hover:opacity-80
                  `}
                  style={{
                    color: color || "",
                    fill: color || "",
                  }}
                >
                  {linkText}
                  <svg className="fill-inherit" fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9.16016 9.16992c-.13672-.10937-.19141-.27344-.19141-.46484 0-.16406.05469-.32813.19141-.4375l2.59764-2.625h-11.10155c-.382812 0-.65625-.27344-.65625-.65625 0-.35547.273438-.65625.65625-.65625h11.10155l-2.59764-2.59766c-.27344-.24609-.27344-.65625 0-.902342.24609-.273437.65625-.273437.92964 0l3.7188 3.718752c.2461.24609.2461.65625 0 .90234l-3.7188 3.71875c-.27339.27344-.68355.27344-.92964 0z" /></svg>
                </a>
              </Link>
            }
          </li>
        </ul>
      </div>
    </section>
  )
}