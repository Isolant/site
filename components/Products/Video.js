// Globals
import React from "react";

export default function Video({ 
  video,
}) {

  return (
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
}