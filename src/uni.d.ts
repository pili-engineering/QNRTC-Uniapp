declare const uni: {
  requireNativePlugin: (module: string) => any
  getSystemInfoSync: () => {
    platform: string
  }
}
