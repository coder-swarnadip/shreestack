import { Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import { navLinks, services } from "../data/siteData";

const brandEmail = "shreestackdigitalsolutions@gmail.com";
const whatsappUrl =
  "https://wa.me/918697002797?text=Hi%20ShreeStack%20Digital%20Solutions%2C%20I%20want%20to%20discuss%20a%20website%20or%20digital%20solution.";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 pb-8 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.95fr]">
        <div>
          <a href="#" aria-label="ShreeStack Digital Solutions home">
            <BrandLogo size="large" />
          </a>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            We help businesses establish a stronger online presence through
            professional websites, dashboards, and custom digital solutions.
          </p>

          <p className="mt-3 text-sm font-medium text-sky-400">
            Websites, Dashboards & Smart Business Systems
          </p>

          <div className="mt-6 flex gap-3">
            <SocialLink
              href="https://www.linkedin.com/in/swarnadip-sarkar/"
              icon={<FaLinkedinIn size={18} />}
              label="LinkedIn"
            />
            <SocialLink
              href={`mailto:${brandEmail}`}
              icon={<Mail size={18} />}
              label="Email"
            />
            <SocialLink
              href={whatsappUrl}
              icon={<FaWhatsapp size={18} />}
              label="WhatsApp"
            />
          </div>
        </div>

        <FooterGroup title="Quick Links">
          {navLinks.map((link) => (
            <FooterLink key={link.name} href={link.path}>
              {link.name}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title="Services">
          {services.slice(0, 5).map((service) => (
            <FooterLink key={service.title}>
              {service.title}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title="Contact">
          <FooterLink href={`mailto:${brandEmail}`} icon={<Mail size={16} />}>
            {brandEmail}
          </FooterLink>
          <FooterLink href={whatsappUrl} icon={<FaWhatsapp size={16} />} external>
            WhatsApp Consultation
          </FooterLink>
          <p className="inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} />
            West Bengal, India
          </p>
        </FooterGroup>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} ShreeStack Digital Solutions. All rights reserved.
        </p>
        <p>Built through project work.</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-4 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children, icon, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400"
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-sky-400 hover:text-slate-950"
    >
      {icon}
    </a>
  );
}

export default Footer;
