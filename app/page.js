"use client"
import { useCallback, useEffect } from 'react';
import Landing from '@/components/Landing';
import TeamConcept from '@/components/TeamConcept';
import Forest from '@/components/Forest';
import Views from '@/components/Views';
import Record from '@/components/Record';
import Footer from '@/components/Footer';

export default function Home() {
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition()
    }
  }, [resetWindowScrollPosition])

  return (
    <>
      <Landing />
      <TeamConcept />
      <Forest />
      <Views />
      <Record />
    </>
  );
}
