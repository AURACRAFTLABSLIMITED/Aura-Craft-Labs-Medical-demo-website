import React from 'react';

/**
 * Clean Section Heading with human editorial discipline and balanced typography
 */
export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right ml-auto items-end'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {kicker && (
        <span
          className={`text-xs font-semibold tracking-wider uppercase mb-2.5 ${
            light ? 'text-[#EAF7F7]' : 'text-[#159FA5]'
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-[#173A45]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-[#73858A]'
          }`}
          style={{ textWrap: 'balance' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
