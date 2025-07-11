/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SCRIPT_URL: string;
  // Add other env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
