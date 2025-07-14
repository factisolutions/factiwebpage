'use client';

import type React from "react";
import Axe from "./axe";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Axe />
      {children}
    </>
  );
} 