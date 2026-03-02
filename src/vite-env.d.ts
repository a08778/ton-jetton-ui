/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TON_RPC_ENDPOINT?: string
  readonly VITE_TONCENTER_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
