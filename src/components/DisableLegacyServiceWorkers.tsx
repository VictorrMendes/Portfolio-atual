"use client";

import { useEffect } from "react";

export function DisableLegacyServiceWorkers() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    const cleanup = async () => {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister()));

      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
    };

    void cleanup();
  }, []);

  return null;
}
