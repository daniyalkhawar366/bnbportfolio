"use client";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaRobot, FaKey, FaBroom, FaTools, FaChartLine, FaRegFileAlt, FaMagic } from "react-icons/fa";

const services = [
  {
    icon: <FaRobot className="text-4xl text-yellow-400" />,
    title: "Guest Communication",
    description: "Use AI tools like Besty AI and Hospitable to automate 24/7 guest support."
  },
  {
    icon: <FaBroom className="text-4xl text-yellow-400" />,
    title: "Cleaning Coordination",
    description: "Schedule cleanings using Turno, automate alerts for cleaners."
  },
  {
    icon: <FaTools className="text-4xl text-yellow-400" />,
    title: "Basic Maintenance Coordination",
    description: "Handle repair requests and communicate with vendors."
  },
  {
    icon: <FaChartLine className="text-4xl text-yellow-400" />,
    title: "Pricing Optimization",
    description: "Use PriceLabs or Wheelhouse for dynamic pricing and occupancy maximization."
  },
  {
    icon: <FaRegFileAlt className="text-4xl text-yellow-400" />,
    title: "Monthly Reporting",
    description: "Visual report of earnings, occupancy, and reviews."
  },
  {
    icon: <FaMagic className="text-4xl text-yellow-400" />,
    title: "Listing Optimization & AI Automation",
    description: "Optimize listing descriptions, photos, and automate repetitive tasks."
  }
];

export default function ServicesPage() {
  const headerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        }
      );
    }
  }, []);

  return (
    <main className="relative min-h-screen py-10 px-4 overflow-x-hidden">
      <Bounded as="section" className="max-w-4xl mx-auto">
        <div ref={headerRef}>
          <Heading size="xl" className="mb-8 text-center" as="h1">
            My Airbnb Co-hosting Services
          </Heading>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={service.title}
              ref={el => { cardsRef.current[idx] = el; }}
              className="service-card flex flex-col items-center rounded-2xl border-2 border-slate-800 bg-slate-900 p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="mb-2 text-2xl font-bold text-yellow-300 text-center">
                {service.title}
              </h2>
              <p className="text-slate-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            linkField={{ url: "https://calendly.com/daniyalkhawar3/free-strategy-call", link_type: "Web", target: "_blank" }}
            label="Book a Free Strategy Call"
          />
        </div>
      </Bounded>
    </main>
  );
} 