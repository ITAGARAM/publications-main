"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // loader duration

    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) return <Preloader />;

  return <>{children}</>;
}