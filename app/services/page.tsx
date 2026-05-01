"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Sprout,
  TreeDeciduous,
  Building2,
  FileCheck,
  Users,
  Leaf,
  FlaskConical,
  ClipboardCheck,
  Globe,
  Handshake,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    id: "regulatory",
    icon: Shield,
    title: "Agrochemical Regulatory Consulting",
    description:
      "We support importers, manufacturers, and distributors in navigating Ethiopia's regulatory system for pesticides and fertilizers.",
    image: "/images/regulatory-consulting.jpg",
    features: [
      { icon: FileCheck, text: "Product registration & re-registration" },
      { icon: ClipboardCheck, text: "Dossier preparation and submission" },
      { icon: Globe, text: "Import permits & compliance follow-up" },
      { icon: Leaf, text: "Labeling & packaging approval" },
      { icon: Handshake, text: "Liaison with regulatory authorities" },
    ],
  },
  {
    id: "agricultural",
    icon: Sprout,
    title: "Agricultural Support Services",
    description:
      "We help improve productivity, product performance, and farmer adoption through practical field-based support.",
    image: "/images/agricultural-support.jpg",
    features: [
      { icon: FlaskConical, text: "Field trials & demonstration plots" },
      { icon: Users, text: "Farmer training and capacity building" },
      { icon: TrendingUp, text: "Product performance evaluation" },
      { icon: Leaf, text: "Good Agricultural Practices (GAP) support" },
      { icon: ClipboardCheck, text: "Technical advisory for crop protection" },
    ],
  },
  {
    id: "environmental",
    icon: TreeDeciduous,
    title: "Environmental Auditing & Protection",
    description:
      "We ensure your operations meet environmental standards while minimizing risks to people and ecosystems.",
    image: "/images/environmental-audit.jpg",
    features: [
      { icon: ClipboardCheck, text: "Environmental impact assessments (EIA)" },
      { icon: FileCheck, text: "Compliance audits and inspections" },
      { icon: Shield, text: "Pesticide risk assessment & safe use" },
      { icon: Leaf, text: "Environmental management plans (EMP)" },
      { icon: Globe, text: "Sustainability and compliance advisory" },
    ],
  },
  {
    id: "ecosystem",
    icon: Leaf,
    title: "Agro-Ecosystem Development",
    description:
      "We design and promote sustainable agricultural systems that balance productivity and environmental health.",
    image: "/images/hero-agriculture.jpg",
    features: [
      { icon: Shield, text: "Integrated Pest Management (IPM) strategies" },
      { icon: Sprout, text: "Soil health and fertility management" },
      { icon: Globe, text: "Climate-smart agriculture solutions" },
      { icon: TreeDeciduous, text: "Agro-ecosystem planning and optimization" },
      { icon: Leaf, text: "Sustainable input use strategies" },
    ],
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Establishment Support",
    description:
      "We assist foreign companies in setting up and operating legally and efficiently in Ethiopia, particularly in the agrochemical and agricultural sectors.",
    image: "/images/business-support.jpg",
    features: [
      { icon: Building2, text: "Company establishment (PLC, branch, or representative office)" },
      { icon: FileCheck, text: "Investment licensing and regulatory approvals" },
      { icon: ClipboardCheck, text: "Trade registration and sector-specific compliance" },
      { icon: Handshake, text: "Local partner/agent identification" },
      { icon: TrendingUp, text: "End-to-end advisory from market entry to operation" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Agricultural Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From regulatory compliance to sustainable farming practices, we provide
              end-to-end support for your agricultural needs in Ethiopia and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                      <service.icon className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-medium">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4 mb-8"
                    >
                      {service.features.map((feature) => (
                        <motion.li
                          key={feature.text}
                          variants={itemVariants}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{feature.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-foreground font-semibold group">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Work With You
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our streamlined process ensures efficient delivery and outstanding results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your needs and objectives" },
              { step: "02", title: "Assessment", desc: "Analyze requirements and develop strategy" },
              { step: "03", title: "Implementation", desc: "Execute the plan with precision" },
              { step: "04", title: "Support", desc: "Ongoing assistance and follow-up" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-2xl shadow-lg h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-background/70 text-lg mb-8 leading-relaxed">
              Contact us today to discuss your agricultural consulting needs. 
              Our team of experts is ready to help you succeed.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
