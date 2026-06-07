import { useState } from "react";
import { AlertCircle, CheckCircle2, MessageCircle, Send, X } from "lucide-react";
import { faqs } from "../data/siteData";

const formEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";

function FAQ() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formEndpoint.includes("YOUR_FORM_ID")) {
      setStatus("error");
      setStatusMessage("Replace the Formspree placeholder with your form ID before launch.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("source", "FAQ question box");

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Question submission failed");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Your question has been sent. We will reply soon.");
    } catch {
      setStatus("error");
      setStatusMessage("Could not send your question. Please try again.");
    }
  };

  const closeBox = () => {
    setOpen(false);
    setStatus("idle");
    setStatusMessage("");
  };

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Questions clients usually ask.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-400 hover:text-slate-950"
          >
            <MessageCircle size={18} />
            Ask a Question
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/75 px-4 py-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-sky-950/30 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Ask Us
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Send your question
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Write your question and we will reply with the right guidance.
                </p>
              </div>

              <button
                type="button"
                onClick={closeBox}
                aria-label="Close question box"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <input type="hidden" name="_subject" value="New FAQ question" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Name" name="name" type="text" />
                <Input label="Email" name="email" type="email" />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm text-slate-300">
                  Question
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Type your question here..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </div>

              {statusMessage && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                      : "border-red-400/25 bg-red-400/10 text-red-200"
                  }`}
                  role="status"
                >
                  {status === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
              >
                {status === "sending" ? "Sending..." : "Send Question"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function Input({ label, name, type }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
      />
    </div>
  );
}

export default FAQ;
