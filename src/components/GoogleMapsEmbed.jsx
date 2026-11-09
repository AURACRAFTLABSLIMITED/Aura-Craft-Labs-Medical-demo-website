import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';

export default function GoogleMapsEmbed() {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'DHA Phase 5 Lahore Pakistan'
  )}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#159FA5] font-semibold block">
            Clinic Coordinates & Location
          </span>
          <h3 className="text-base font-bold text-[#173A45] mt-0.5">
            DHA Phase 5 · Sector C Commercial Zone
          </h3>
          <p className="text-xs text-[#73858A]">
            Lat: {clinicInfo.location.coordinates.lat}, Lng: {clinicInfo.location.coordinates.lng} · Near Jalal Sons
          </p>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#159FA5] hover:text-[#118489] transition-colors self-start sm:self-auto"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Embedded Map Frame */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
        <iframe
          title="Aura Medical Clinic DHA Lahore Location Map"
          src={clinicInfo.location.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
