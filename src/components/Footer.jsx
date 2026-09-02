import { Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import { navLinks, services } from "../data/siteData";

const brandEmail = "shreestackdigitalsolutions@gmail.com";

const whatsappUrl =
  "https://wa.me/918697002797?text=Hi%20ShreeStack%20Digital%20Solutions%2C%20I%20want%20to%20discuss%20a%20website%20or%20digital%20solution.";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 pb-5 pt-8 sm:px-6 sm:pb-8 sm:pt-12">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-7

          sm:grid-cols-2
          sm:gap-10

          lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.95fr]
          lg:gap-10
        "
      >
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a
            href="#"
            aria-label="ShreeStack Digital Solutions home"
            className="inline-block"
          >
            <BrandLogo size="large" />
          </a>

          <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-400 sm:text-sm">
            We help businesses establish a stronger online presence through
            professional websites, dashboards, and custom digital solutions.
          </p>

          <p className="mt-2 text-xs font-medium leading-relaxed text-sky-400 sm:text-sm">
            Websites, Dashboards & Smart Business Systems
          </p>

          {/* Social Links */}
          <div className="mt-4 flex gap-2.5">
            <SocialLink
              href="https://www.linkedin.com/in/swarnadip-sarkar/"
              icon={<FaLinkedinIn size={16} />}
              label="LinkedIn"
            />

            <SocialLink
              href={`mailto:${brandEmail}`}
              icon={<Mail size={17} />}
              label="Email"
            />

            <SocialLink
              href={whatsappUrl}
              icon={<FaWhatsapp size={17} />}
              label="WhatsApp"
            />
          </div>
        </div>

        {/* Mobile: Quick Links + Services side by side */}
        <div className="grid grid-cols-2 gap-5 sm:col-span-2 sm:grid-cols-2 lg:col-span-2 lg:contents">

          {/* Quick Links */}
          <FooterGroup title="Quick Links">
            {navLinks.map((link) => (
              <FooterLink key={link.name} href={link.path}>
                {link.name}
              </FooterLink>
            ))}
          </FooterGroup>

          {/* Services */}
          <FooterGroup title="Services">
            {services.slice(0, 5).map((service) => (
              <FooterLink key={service.title}>
                {service.title}
              </FooterLink>
            ))}
          </FooterGroup>

        </div>

        {/* Contact */}
        <FooterGroup title="Contact">
          <FooterLink
            href={`mailto:${brandEmail}`}
            icon={<Mail size={15} />}
          >
            <span className="break-all">{brandEmail}</span>
          </FooterLink>

          <FooterLink
            href={whatsappUrl}
            icon={<FaWhatsapp size={15} />}
            external
          >
            WhatsApp Consultation
          </FooterLink>

          <p className="inline-flex items-start gap-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span>West Bengal, India</span>
          </p>
        </FooterGroup>
      </div>

      {/* Bottom Footer */}
      <div
        className="
          mx-auto
          mt-7
          flex
          max-w-7xl
          flex-col
          gap-2
          border-t
          border-white/10
          pt-4
          text-center
          text-[11px]
          text-slate-500

          sm:mt-10
          sm:pt-6
          sm:text-sm

          md:flex-row
          md:items-center
          md:justify-between
          md:text-left
        "
      >
        <p>
          © {new Date().getFullYear()} ShreeStack Digital Solutions.
          <span className="hidden sm:inline"> All rights reserved.</span>
        </p>

        <p>Built through project work.</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white sm:text-base">
        {title}
      </h3>

      <div className="mt-3 grid gap-2 sm:mt-4 sm:gap-3">
        {children}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  icon,
  external = false,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        inline-flex
        max-w-full
        items-center
        gap-2
        text-xs
        leading-relaxed
        text-slate-400
        transition
        hover:text-sky-400
        sm:text-sm
      "
    >
      {icon}
      {children}
    </a>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        inline-flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        text-slate-300
        transition
        hover:border-sky-400
        hover:bg-sky-400
        hover:text-slate-950

        sm:h-10
        sm:w-10
      "
    >
      {icon}
    </a>
  );
}

export default Footer;
