/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Amenities } from "./components/Amenities";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Hours } from "./components/Hours";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Amenities />
        <Gallery />
        <Reviews />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
