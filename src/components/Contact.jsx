import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const brandEmail = "shreestackdigitalsolutions@gmail.com";
const formEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";
const whatsappUrl =
  "https://wa.me/919091701136?text=Hi%20ShreeStack%20Digital%20Solutions%2C%20I%20want%20to%20discuss%20a%20website%20or%20digital%20solution.";

function Contact() {
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
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Thank you. We received your enquiry and will contact you soon.");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900/40 px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let’s discuss your project.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
            Tell us what you want to build. We’ll help you choose the right
            scope, features, and launch plan for your business.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>

          <div className="mt-6 grid gap-3">
            <ContactInfo
              icon={<Mail size={20} />}
              label="Email"
              text={brandEmail}
              href={`mailto:${brandEmail}`}
            />
            <ContactInfo
              icon={<MessageCircle size={20} />}
              label="WhatsApp"
              text="Consultation available"
              href={whatsappUrl}
            />
            <ContactInfo
              icon={<MapPin size={20} />}
              label="Location"
              text="West Bengal, India"
            />
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-white">What happens next?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              We review your requirement, suggest the right scope, and share a
              simple project plan before development starts.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-sky-950/20 backdrop-blur md:p-8"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Start an enquiry</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Share a few details and we’ll get back with a clear next step.
            </p>
          </div>

          <input type="hidden" name="_subject" value="New ShreeStack enquiry" />

          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" name="name" type="text" />
            <Input label="Phone" name="phone" type="tel" />
          </div>

          <div className="mt-4">
            <Input label="Email" name="email" type="email" />
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300">
              Project Type
            </label>
            <select
              name="projectType"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
            >
              <option>Starter Website</option>
              <option>Business Website</option>
              <option>Custom Web App</option>
              <option>Website Redesign</option>
              <option>Maintenance & Support</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300">
              Project Details
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your business and what you want to build..."
              required
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
            {status === "sending" ? "Sending..." : "Send Enquiry"}
            <Send size={18} />
          </button>
        </form>
      </div>
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
        className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
      />
    </div>
  );
}

function ContactInfo({ icon, label, text, href }) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <p className="mt-1 break-words text-sm text-slate-200">{text}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-slate-300 transition hover:border-sky-400/50"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">
      {content}
    </div>
  );
}

export default Contact;
