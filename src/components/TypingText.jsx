import { useEffect, useState } from "react";

export default function TypingText({ text, onComplete }) {

  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [finished, setFinished] = useState(false);


  useEffect(() => {

    let timeout;


    // Typing forward
    if (!deleting && displayText.length < text.length) {

      timeout = setTimeout(() => {

        setDisplayText(
          text.slice(0, displayText.length + 1)
        );

      }, 100);


    }

    // Finished typing first time
    else if (!deleting && displayText.length === text.length) {


      if (!finished) {

        setFinished(true);

        if (onComplete) {
          onComplete();
        }

      }


      timeout = setTimeout(() => {
        setDeleting(true);
      }, 2000);


    }

    // Delete
    else if (deleting && displayText.length > 0) {

      timeout = setTimeout(() => {

        setDisplayText(
          text.slice(0, displayText.length - 1)
        );

      }, 50);


    }

    // Restart
    else {

      timeout = setTimeout(() => {

        setDeleting(false);

      }, 500);

    }


    return () => clearTimeout(timeout);


  }, [displayText, deleting, text, finished, onComplete]);



  return (
    <>
      {displayText}
      <span className="animate-pulse">
        |
      </span>
    </>
  );
}