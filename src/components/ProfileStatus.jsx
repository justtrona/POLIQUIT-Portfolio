
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ProfileStatus() {
  const [statusOpen, setStatusOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const formRef = useRef(null);

  // =====================================================
  // SEND EMAIL
  // =====================================================

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);

      // Clear the form after successful submission
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      alert(`EmailJS Error: ${error?.text || "Unknown error"}`);
    } finally {
      setSending(false);
    }
  };

  // =====================================================
  // CLOSE CONTACT MODAL
  // =====================================================

  const closeContact = () => {
    if (sending) return;

    setContactOpen(false);
    setSent(false);
  };

  return (
    <>
      {/* =====================================================
          FLOATING PROFILE STATUS BUTTON
          ===================================================== */}

      {!statusOpen && (
        <button
          type="button"
          onClick={() => setStatusOpen(true)}
          className="
            fixed
            right-4
            bottom-4
            sm:right-6
            sm:bottom-6
            lg:right-10
            lg:bottom-10
            min-w-40
            sm:w-44
            px-4
            sm:px-5
            py-3
            sm:py-4
            rounded-full
            border
            border-cyan-400/40
            bg-black/80
            backdrop-blur-xl
            hover:bg-cyan-400/10
            hover:border-cyan-400
            hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]
            transition
            z-50
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-400
                animate-pulse
                shadow-[0_0_10px_rgba(34,197,94,0.8)]
              "
            />

            <p
              className="
                text-cyan-400
                text-[10px]
                sm:text-xs
                tracking-[0.2em]
                sm:tracking-[0.3em]
              "
            >
              PROFILE STATUS
            </p>
          </div>
        </button>
      )}

      {/* =====================================================
          PROFILE STATUS PANEL
          ===================================================== */}

      {statusOpen && (
        <div
          className="
            fixed
            right-4
            bottom-4
            sm:right-6
            sm:bottom-6
            lg:right-10
            lg:bottom-10
            w-[calc(100%-2rem)]
            max-w-sm
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border
            border-cyan-400/30
            bg-black/90
            backdrop-blur-xl
            p-5
            sm:p-6
            shadow-[0_0_50px_rgba(0,255,255,0.15)]
            z-50
          "
        >
          {/* =================================================
              HEADER
              ================================================= */}

          <div className="flex justify-between items-start">
            <p
              className="
                text-zinc-500
                text-xs
                tracking-[0.4em]
                sm:tracking-[0.5em]
              "
            >
              PROFILE
              <br />
              STATUS
            </p>

            <button
              type="button"
              onClick={() => setStatusOpen(false)}
              className="
                text-zinc-400
                text-[10px]
                sm:text-xs
                tracking-widest
                hover:text-cyan-400
                transition
              "
            >
              ✕
              <br />
              CLOSE
            </button>
          </div>

          {/* =================================================
              ONLINE STATUS
              ================================================= */}

          <div className="mt-6 sm:mt-8">
            <div className="flex items-center gap-3">
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.8)]
                "
              />

              <p
                className="
                  text-green-400
                  text-base
                  sm:text-lg
                  tracking-widest
                "
              >
                AVAILABLE
              </p>
            </div>

            <p
              className="
                mt-2
                text-zinc-500
                text-[9px]
                sm:text-[10px]
                tracking-[0.3em]
                sm:tracking-[0.4em]
              "
            >
              OPEN FOR PROJECTS
            </p>
          </div>

          {/* =================================================
              INFORMATION
              ================================================= */}

          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">

            {/* ENGAGEMENT */}

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                "
              >
                ENGAGEMENT
              </p>

              <p
                className="
                  text-white
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                FREELANCE / REMOTE
              </p>
            </div>

            {/* SPECIALTY */}

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                "
              >
                SPECIALTY
              </p>

              <p
                className="
                  text-white
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                WEB • MOBILE • FULLSTACK DEV
              </p>
            </div>

            {/* LOCATION */}

            <div>
              <p
                className="
                  text-zinc-600
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.3em]
                  sm:tracking-[0.4em]
                "
              >
                LOCATION
              </p>

              <p
                className="
                  text-white
                  text-xs
                  sm:text-sm
                  tracking-widest
                "
              >
                DAVAO CITY, PH
              </p>
            </div>
          </div>

          {/* =================================================
              CONTACT BUTTON
              ================================================= */}

          <div className="mt-8 pt-6 border-t border-white/10">
            <p
              className="
                text-zinc-500
                text-[9px]
                sm:text-[10px]
                tracking-[0.4em]
              "
            >
              CONTACT
            </p>

            <button
              type="button"
              onClick={() => {
                setContactOpen(true);
                setSent(false);
              }}
              className="
                mt-3
                w-full
                rounded-xl
                border
                border-cyan-400/40
                bg-cyan-400/10
                px-4
                py-3
                text-cyan-400
                text-xs
                tracking-[0.3em]
                hover:bg-cyan-400/20
                hover:border-cyan-400
                hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]
                transition
              "
            >
              OPEN CONTACT FORM
            </button>
          </div>

          {/* =================================================
              FOOTER
              ================================================= */}

          <div
            className="
              mt-6
              pt-4
              border-t
              border-white/10
            "
          >
            <p
              className="
                text-zinc-600
                text-[9px]
                sm:text-[10px]
                tracking-[0.3em]
                sm:tracking-[0.4em]
              "
            >
              SYS_READY // 7232
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          CONTACT MODAL
          ===================================================== */}

      {contactOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-md
            p-4
          "
          onClick={closeContact}
        >
          <div
            className="
              relative
              w-full
              max-w-2xl
              max-h-[90vh]
              overflow-y-auto
              rounded-3xl
              border
              border-cyan-400/30
              bg-black/95
              backdrop-blur-xl
              p-6
              sm:p-8
              lg:p-10
              shadow-[0_0_80px_rgba(0,255,255,0.15)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* =================================================
                MODAL HEADER
                ================================================= */}

            <div className="flex justify-between items-start">
              <div>
                <p
                  className="
                    text-zinc-500
                    text-[10px]
                    sm:text-xs
                    tracking-[0.5em]
                  "
                >
                  SECURE CHANNEL
                </p>

                <h2
                  className="
                    mt-2
                    text-xl
                    sm:text-2xl
                    text-cyan-400
                    tracking-[0.2em]
                  "
                >
                  CONTACT ME
                </h2>

                <p
                  className="
                    mt-2
                    text-zinc-500
                    text-xs
                    tracking-wider
                  "
                >
                  SEND A MESSAGE DIRECTLY TO MY INBOX
                </p>
              </div>

              <button
                type="button"
                onClick={closeContact}
                disabled={sending}
                className="
                  text-zinc-500
                  text-xs
                  tracking-widest
                  hover:text-cyan-400
                  transition
                  disabled:opacity-50
                "
              >
                ✕
              </button>
            </div>

            {/* =================================================
                CONTACT FORM
                ================================================= */}

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-8 space-y-4"
            >
              {/* NAME */}

              <div>
                <label
                  htmlFor="from_name"
                  className="
                    text-zinc-600
                    text-[9px]
                    tracking-[0.3em]
                  "
                >
                  YOUR NAME
                </label>

                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="ENTER YOUR NAME"
                  required
                  autoComplete="name"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-zinc-700
                    tracking-wider
                    outline-none
                    focus:border-cyan-400/60
                    transition
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="from_email"
                  className="
                    text-zinc-600
                    text-[9px]
                    tracking-[0.3em]
                  "
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  placeholder="ENTER YOUR EMAIL"
                  required
                  autoComplete="email"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-zinc-700
                    tracking-wider
                    outline-none
                    focus:border-cyan-400/60
                    transition
                  "
                />
              </div>

              {/* SUBJECT */}

              <div>
                <label
                  htmlFor="subject"
                  className="
                    text-zinc-600
                    text-[9px]
                    tracking-[0.3em]
                  "
                >
                  SUBJECT
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="ENTER SUBJECT"
                  required
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-zinc-700
                    tracking-wider
                    outline-none
                    focus:border-cyan-400/60
                    transition
                  "
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    text-zinc-600
                    text-[9px]
                    tracking-[0.3em]
                  "
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="WRITE YOUR MESSAGE..."
                  rows={7}
                  required
                  className="
                    mt-2
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-zinc-700
                    tracking-wider
                    outline-none
                    focus:border-cyan-400/60
                    transition
                  "
                />
              </div>

              {/* SEND BUTTON */}

              <button
                type="submit"
                disabled={sending}
                className="
                  w-full
                  rounded-xl
                  border
                  border-cyan-400/40
                  bg-cyan-400/10
                  px-5
                  py-4
                  text-cyan-400
                  text-xs
                  tracking-[0.4em]
                  hover:bg-cyan-400/20
                  hover:border-cyan-400
                  hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  transition
                "
              >
                {sending ? "TRANSMITTING..." : "SEND MESSAGE"}
              </button>

              {/* SUCCESS MESSAGE */}

              {sent && (
                <div
                  className="
                    rounded-xl
                    border
                    border-green-400/20
                    bg-green-400/5
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p
                    className="
                      text-green-400
                      text-[10px]
                      tracking-[0.3em]
                    "
                  >
                    MESSAGE SENT SUCCESSFULLY ✓
                  </p>

                  <p
                    className="
                      mt-1
                      text-zinc-600
                      text-[9px]
                      tracking-wider
                    "
                  >
                    THANK YOU FOR REACHING OUT
                  </p>
                </div>
              )}
            </form>

            {/* =================================================
                MODAL FOOTER
                ================================================= */}

            <div
              className="
                mt-6
                pt-4
                border-t
                border-white/10
              "
            >
              <p
                className="
                  text-zinc-700
                  text-[9px]
                  tracking-[0.3em]
                "
              >
                ENCRYPTED_CHANNEL // READY
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
