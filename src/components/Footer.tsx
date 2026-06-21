import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '../data/company';

export default function Footer() {
  return (
    <footer className="bg-marine-700 text-sand-200/80">
      <div className="wrap py-14">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <span className="font-display font-extrabold text-2xl text-sand-50">
              K<span className="text-copper">-RÖR</span>
            </span>
            <p className="mt-4 max-w-sm leading-relaxed">
              VVS, rörmokeri och bergvärme i Stenungsund, på Tjörn och Orust.
              Lokal firma med säte i Spekeröd.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-sand-200/60 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={company.phoneHref} className="flex items-center gap-2.5 hover:text-copper transition-colors">
                  <Phone size={15} /> {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="flex items-center gap-2.5 hover:text-copper transition-colors">
                  <Mail size={15} /> {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} /> {company.address.full}
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-sand-200/60 mb-4">
              Serviceområde
            </h4>
            <p className="leading-relaxed">{company.areas.join(' · ')}</p>
            <p className="mt-3 text-sm text-sand-200/60">{company.hours}</p>
          </div>
        </div>

        <div className="border-t border-sand-200/15 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p>© {new Date().getFullYear()} {company.name}. Alla rättigheter förbehållna.</p>
          <p className="text-sand-200/55">
            Drivs av{' '}
            <a
              href="https://ottoniq.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand-200 hover:text-copper transition-colors"
            >
              Ottoniq.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
