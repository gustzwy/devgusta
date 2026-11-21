import type { FC, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const HTML5Icon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L3 5.25l1.35 15.22L12 23.25l7.65-2.78L21 5.25 12 2zm6.18 5.62l-.24 2.67H9.28l.18 2.05h8.24l-.59 6.64-5.11 1.42-5.11-1.42-.35-3.95h2.38l.18 2.02 2.9.79 2.9-.79.31-3.48H6.55L5.8 7.62h12.38z" />
  </svg>
);

export const CSS3Icon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L3 5.25l1.35 15.22L12 23.25l7.65-2.78L21 5.25 12 2zm0 18.72l-5.74-1.6-.96-10.82h13.4l-.96 10.82L12 20.72zm5.02-9.67H7.95l.18 2.05h8.48l-.45 5.08-4.16 1.15-4.16-1.15-.27-3.05H5.19l.47 5.24 6.34 1.76 6.34-1.76.84-9.32h-.16z" />
  </svg>
);

export const JavaScriptIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3h18v18H3V3zm13.7 13.9c.7 0 1.3-.3 1.6-.8l1.4 1c-.7 1.1-1.8 1.6-3.1 1.6-2.5 0-4-1.6-4-4.1 0-2.4 1.6-4.1 3.9-4.1 1.3 0 2.3.5 3 1.5l-1.4 1.1c-.4-.7-1-1-1.6-1-1.3 0-2.2 1-2.2 2.5 0 1.6.9 2.3 2.4 2.3zm-6.2.1c0 1-.7 1.7-1.8 1.7-.9 0-1.5-.4-1.9-1l-1.3 1c.7 1 1.8 1.7 3.3 1.7 2.2 0 3.5-1.2 3.5-3.3v-6.7h-1.8v6.6z" />
  </svg>
);

export const TypeScriptIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3h18v18H3V3zm8.3 7.8v7.4h-2.1v-7.4H6.5V9.1h6.4v1.7h-3.6v-.01zm4 7.4c2.2 0 3.6-1.1 3.6-2.8 0-1.6-1-2.3-2.6-2.9l-.7-.3c-.8-.3-1.2-.6-1.2-1.2 0-.6.5-1 1.3-1 .8 0 1.4.3 1.8.8l1.2-1.3c-.7-.8-1.7-1.2-3-1.2-2 0-3.3 1.1-3.3 2.7 0 1.5.9 2.3 2.4 2.8l.7.3c.9.3 1.4.7 1.4 1.3 0 .7-.6 1.2-1.6 1.2-1.1 0-1.8-.4-2.3-1.1l-1.3 1.2c.8 1.1 1.9 1.6 3.4 1.6z" />
  </svg>
);

export const ReactIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

export const NextJsIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.47 0 4.73-.9 6.49-2.4l-7.9-10.22H8.8V16.8h1.8v-5.61l6.76 8.78C19.8 18.23 22 15.37 22 12c0-5.52-4.48-10-10-10zm3.3 5.48h1.8v6.78l-1.8-2.33V7.48z" />
  </svg>
);

export const TailwindIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1.2-.6 2.4-.4 3.3.3.8.7 1.4 1.6 2.4 1.6 2.4 0 3.9-1.2 4.5-3.6-1.2.6-2.4.4-3.3-.3-.8-.7-1.4-1.6-2.4-1.6zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1.2-.6 2.4-.4 3.3.3.8.7 1.4 1.6 2.4 1.6 2.4 0 3.9-1.2 4.5-3.6-1.2.6-2.4.4-3.3-.3-.8-.7-1.4-1.6-2.4-1.6z" />
  </svg>
);

export const ShadcnIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="16.5" y1="7.5" x2="7.5" y2="16.5" />
    <polyline points="19.5 13.5 13.5 19.5 4.5 10.5 10.5 4.5" />
  </svg>
);

export const ReactNativeIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="5.5" y="3" width="13" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="12" cy="11" rx="5" ry="2" transform="rotate(-25 12 11)" />
    <ellipse cx="12" cy="11" rx="5" ry="2" transform="rotate(25 12 11)" />
    <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const ExpoIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 5.5l7.5 13 7.5-13h-3.2l-4.3 7.6-4.3-7.6H4.5z" />
  </svg>
);

export const NodeJsIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm0 2.2l6.6 3.8v7.6L12 19.4l-6.6-3.8V8l6.6-3.8zm-.8 3.5v8.5h1.6V7.7h-1.6z" />
  </svg>
);

export const PythonIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.2v2.3h5v.8H5.6C3.7 8.3 2 10.1 2 12.3c0 2.3 1.7 4 3.6 4h1.7v-2.3c0-2 1.7-3.7 3.8-3.7h5c1.6 0 2.9-1.3 2.9-2.9V5.2c0-1.8-1.8-3.2-5.1-3.2zm-2.2 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm2.4 18.3c3.1 0 4.9-1.4 4.9-3.2v-2.3h-5v-.8h6.4c1.9 0 3.6-1.8 3.6-4 0-2.3-1.7-4-3.6-4h-1.7v2.3c0 2-1.7 3.7-3.8 3.7h-5c-1.6 0-2.9 1.3-2.9 2.9v2.2c0 1.8 1.8 3.2 5.1 3.2zm2.2-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
  </svg>
);

export const PostgreSQLIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.1 2.2c-4.4 0-7.8 3.2-7.8 7.3 0 2.8 1.6 5.2 3.9 6.4v3.6l3.1-1.8c.3.1.5.1.8.1 4.4 0 7.8-3.2 7.8-7.3s-3.4-8.3-7.8-8.3zm-1.8 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.8 8.1c-.8.8-1.9 1.3-3 1.3-.4 0-.8-.1-1.2-.2l.8-1.4c.1 0 .3.1.4.1.7 0 1.3-.3 1.8-.8.5-.5.7-1.1.7-1.8h1.7c0 1-.4 2-1.2 2.8z" />
  </svg>
);

export const SupabaseIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.4 2.1c-.6-.7-1.7-.5-2.1.3L4.2 14.8c-.4.8.1 1.7 1 1.7h7.2l-1.8 5.4c-.3.8.6 1.4 1.3.8l8.9-10.4c.5-.6.1-1.6-.7-1.6h-6.7V2.1z" />
  </svg>
);

export const GitGitHubIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

export const PlaywrightIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.5 4.5c-2.8 0-4.8 1.9-5.5 3.8-.7-1.9-2.7-3.8-5.5-3.8C3.1 4.5 1 7.2 1 10.8c0 5.4 6.7 9.8 10.3 11.8.4.2 1 .2 1.4 0 3.6-2 10.3-6.4 10.3-11.8 0-3.6-2.1-6.3-5.5-6.3zm-11 5.3c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm11 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" />
  </svg>
);

export const VercelIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 19.5h20L12 2z" />
  </svg>
);

export const DockerIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.9 11.2h1.8v1.8h-1.8v-1.8zm-2.8 0h1.8v1.8h-1.8v-1.8zm-2.8 0h1.8v1.8H8.3v-1.8zm-2.8 0h1.8v1.8H5.5v-1.8zm5.6-2.8h1.8v1.8h-1.8V8.4zm-2.8 0h1.8v1.8H8.3V8.4zm5.6 0h1.8v1.8h-1.8V8.4zm0-2.8h1.8v1.8h-1.8V5.6zm7.8 7.3c-.6-.4-1.5-.5-2.2-.2-.2-.6-.7-1.1-1.3-1.4l-.5-.2-.3.4c-.6.9-.7 2.1-.2 3.1.4.7 1 1.2 1.7 1.5-1.3 2.1-3.6 3.4-6.2 3.4-4.8 0-8.6-3.1-9.7-7.4H2.2c1.1 5.4 5.9 9.4 11.6 9.4 4.5 0 8.5-2.5 10.4-6.4.3-.6.5-1.2.6-1.9-.3-.1-.6-.2-.9-.3z" />
  </svg>
);
