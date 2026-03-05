"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return <>{children}</>;
}