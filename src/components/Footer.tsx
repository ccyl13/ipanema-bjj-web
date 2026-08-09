import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import { Logo } from "./Logo";
import { contact, nav, PENDIENTE } from "@/lib/content";

const socials = [
  { icon: InstagramIcon, href: contact.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: contact.facebook, label: "Facebook" },
  { icon: YoutubeIcon, href: contact.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Academia de Jiu-Jitsu Brasileño en Gijón. Filial del Mathias
              Ribeiro BJJ Team.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                Email:{" "}
                {contact.email === PENDIENTE ? (
                  <span className="text-white/40 italic">{PENDIENTE}</span>
                ) : (
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-teal"
                  >
                    {contact.email}
                  </a>
                )}
              </li>
              <li>
                Teléfono:{" "}
                {contact.phone === PENDIENTE ? (
                  <span className="text-white/40 italic">{PENDIENTE}</span>
                ) : (
                  <a
                    href={`tel:${contact.phoneIntl}`}
                    className="hover:text-teal"
                  >
                    {contact.phone}
                  </a>
                )}
              </li>
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-teal"
                >
                  {contact.address}
                </a>
              </li>
            </ul>

            {contact.phone !== PENDIENTE && (
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-lime px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            )}

            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href === PENDIENTE ? "#contacto" : href}
                  target={href === PENDIENTE ? undefined : "_blank"}
                  rel={href === PENDIENTE ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-white/70 transition-colors hover:border-teal hover:text-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Ipanema BJJ Gijón. Todos los derechos reservados.</p>
          <p>Filial del Mathias Ribeiro BJJ Team</p>
        </div>
      </div>
    </footer>
  );
}
