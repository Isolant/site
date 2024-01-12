// Globals
import React, { useEffect } from "react";

// Classes
import { verticalPadding } from "../../classes/Spacing";

export default function ContactForm({ background }) {
  useEffect(() => {
    const formScript = document.createElement('script')
    formScript.setAttribute('data-b24-form', 'inline/4/z6c8i0')
    formScript.setAttribute('data-skip-moving', 'true')
    formScript.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.es/b26232869/crm/form/loader_4.js')`;
    
    const position = document.querySelector('.bitrix-form-container');
    position.appendChild(formScript);
  }, [])

  return (
    <div
      className={`
        ${verticalPadding}
      `}
      style={{
        backgroundImage: background && `url(${background})` || ''
      }}
    >
      <div className="bitrix-form-container" />
    </div>
  )
}