"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2,
  Users,
  Globe,
  Award
} from "lucide-react"

const services = [
  {
    title: "Regulatory Consulting",
    description: "Navigate Ethiopia's complex regulatory system for pesticides and fertilizers with our expert guidance. We handle registration, compliance, and ongoing regulatory support.",
  },
  {
    title: "Agricultural Support",
    description: "Improve productivity through practical field-based support and comprehensive farmer training programs tailored to Ethiopian agricultural conditions.",
  },
  {
    title: "Environmental Auditing",
    description: "Ensure your operations meet environmental standards while minimizing risks. Our comprehensive audits help you achieve sustainability goals.",
  },
  {
    title: "Business Establishment",
    description: "Assist foreign companies in setting up and operating legally in Ethiopia. From company registration to operational permits, we guide you through every step.",
  },
]

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "200+", label: "Clients Served", icon: Users },
  { value: "50+", label: "Projects Completed", icon: CheckCircle2 },
  { value: "10+", label: "Countries Reached", icon: Globe },
]

const reasons = [
  "Strong regulatory expertise in Ethiopia",
  "Practical field experience with farmers",
  "Integrated approach combining agriculture and environment",
  "Reliable support from registration to implementation",
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/hero-agriculture.jpg"
            alt="Ethiopian agricultural landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center"
        >
          <div className="max-w-2xl pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-background text-sm font-medium">Sustainable Agriculture Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6"
            >
              Growing Tomorrow&apos;s
              <span className="text-primary block">Agriculture Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-background/80 mb-8 leading-relaxed"
            >
              Specialized consulting services in agrochemical regulation, 
              agricultural development, and environmental management. 
              Supporting sustainable agriculture in Ethiopia and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold group">
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-background/30 text-black hover:bg-background/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-20"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              What We Do
            </h2>
          </motion.div>

          {/* Services List - Clean & Simple */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href="/services" className="group block">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-t border-border items-center">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="text-sm text-muted-foreground font-mono">
                        0{index + 1}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div className="lg:col-span-4">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <div className="lg:col-span-5">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <div className="lg:col-span-2 flex justify-end">
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-border" />
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="text-muted-foreground text-lg">
              Need a customized solution for your business?
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold group">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Partner in Agricultural Excellence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With years of experience in Ethiopia&apos;s agricultural sector, 
                we bring deep expertise and practical solutions to every project. 
                Our integrated approach ensures comprehensive support from 
                registration to field implementation.
              </p>

              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{reason}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link href="/about">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Agrocore team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              Ready to Transform Your Agricultural Business?
            </h2>
            <p className="text-background/70 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how we can help you navigate regulations, 
              improve productivity, and achieve sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-background/30 text-black hover:bg-background/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
