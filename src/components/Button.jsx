import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component with accessible states, loading spinner, and single-line guarantee
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  icon: Icon,
  iconPosition = 'left'
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap shrink-0 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5'
  };

  const variantClasses = {
    primary: 'bg-[#159FA5] text-white hover:bg-[#118489] active:bg-[#0E6C70] shadow-sm focus-visible:outline-[#159FA5]',
    secondary: 'bg-[#173A45] text-white hover:bg-[#1f4a57] active:bg-[#112d36] shadow-sm focus-visible:outline-[#173A45]',
    outline: 'border border-[#159FA5] text-[#159FA5] bg-transparent hover:bg-[#EAF7F7] active:bg-[#d6f0f0] focus-visible:outline-[#159FA5]',
    outlineDark: 'border border-[#173A45] text-[#173A45] bg-transparent hover:bg-slate-100 active:bg-slate-200 focus-visible:outline-[#173A45]',
    ghost: 'text-[#173A45] hover:bg-[#EAF7F7] hover:text-[#159FA5] active:bg-[#d6f0f0]'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' ? (
        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}
