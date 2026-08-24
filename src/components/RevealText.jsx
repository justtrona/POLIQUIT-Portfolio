import { useEffect, useState } from "react";

export default function RevealText({ text }) {

  const [displayText, setDisplayText] = useState("");


  useEffect(() => {

    let index = 0;


    const typing = setInterval(() => {

      setDisplayText(text.slice(0, index + 1));

      index++;


      if (index >= text.length) {
        clearInterval(typing);
      }


    }, 150);


    return () => clearInterval(typing);


  }, [text]);


  return (
    <>
      {displayText}
    </>
  );
}