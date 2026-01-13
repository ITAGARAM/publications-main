'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Blog from './blog/page';

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/blog');
  // }, [router]);

  // return null; // No visible content, just redirects instantly
  return (
    <Blog />
  )
}
