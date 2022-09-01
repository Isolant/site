// Globals
import React from "react";
import Link from "next/link";

// Classes
import { horizontalPadding } from '../../classes/Spacing';

// Vectors
import { ReactComponent as Logo } from "../../images/logos/logo.svg";

export default function LandingPageHeader() {
  return (
    <header className={`${horizontalPadding} container mx-auto flex justify-center py-4 sm:py-8`}>
      <Link href="/">
        <a className="hover:opacity-90">
          <Logo />
        </a>
      </Link>
    </header>
  )
}