"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in every project we undertake.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to achieve shared goals and mutual success.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We promote environmentally responsible agricultural practices.",
  },
]

const milestones = [
  { year: "2010", event: "Company Founded", desc: "Established in Addis Ababa" },
  { year: "2013", event: "First Major Client", desc: "Partnership with international agrochemical company" },
  { year: "2016", event: "Expansion", desc: "Extended services to environmental consulting" },
  { year: "2019", event: "Regional Growth", desc: "Expanded operations across East Africa" },
  { year: "2022", event: "Industry Recognition", desc: "Awarded for excellence in agricultural consulting" },
  { year: "2024", event: "Digital Transformation", desc: "Launched digital advisory services" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Growing Agriculture, <span className="text-primary">Growing Ethiopia</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Agrocore Solutions PLC is a leading agricultural consulting firm based in 
                Addis Ababa, Ethiopia. We specialize in agrochemical regulation, agricultural 
                development, and environmental management, supporting sustainable agriculture 
                across Ethiopia and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button className="bg-primary hover:bg-primary/90 text-foreground font-semibold group">
                    Our Services
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Agrocore Solutions Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <div className="text-muted-foreground text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 lg:p-12 rounded-2xl"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide specialized consulting services that support sustainable agriculture, 
                ensure regulatory compliance, and promote responsible use of agro-inputs in 
                Ethiopia and beyond. We are committed to helping our clients achieve their 
                goals while protecting the environment and supporting local communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-secondary/20 p-8 lg:p-12 rounded-2xl"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading agricultural consulting firm in East Africa, recognized 
                for our expertise, innovation, and commitment to sustainable development. 
                We envision a future where agriculture thrives in harmony with nature, 
                providing food security and economic prosperity for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Our Executive Team
            </h2>
            <p className="text-muted-foreground">
              Led by industry experts with decades of experience in agricultural 
              and regulatory affairs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-xl text-center border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Yonas W/hana</h3>
              <p className="text-primary font-medium text-sm mb-4">Chief Executive Officer (CEO)</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Providing strategic vision and operational leadership to drive 
                Agrocore Solutions towards sustainable growth.
              </p>
            </motion.div>

            {/* Tamirat Solomon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-xl text-center border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Mr. Tamirat Solomon (Msc)</h3>
              <p className="text-primary font-medium text-sm mb-4">Director of Regulatory Affairs & Technical Services</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expert in agrochemical regulation and technical consulting, 
                ensuring compliance and excellence in all service deliveries.
              </p>
            </motion.div>

            {/* Addisalem Mebratu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-xl text-center border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Addisalem Mebratu (PhD)</h3>
              <p className="text-primary font-medium text-sm mb-4">Director of Business Development & Partnerships</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Driving innovation and strategic partnerships to expand our 
                impact across Ethiopia and the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg inline-block">
                      <div className="text-primary font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-foreground font-semibold mb-1">{milestone.event}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Success is Our Priority
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We bring together deep expertise, practical experience, and a commitment 
                to excellence that sets us apart in the agricultural consulting industry.
              </p>

              <ul className="space-y-4">
                {[
                  "Strong regulatory expertise in Ethiopia",
                  "Practical field experience with farmers and agribusinesses",
                  "Integrated approach combining agriculture and environment",
                  "Reliable support from registration to field implementation",
                  "Local knowledge with international standards",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-foreground font-semibold group">
                    Work With Us
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/hero-agriculture.jpg"
                alt="Agricultural field"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
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
              Let&apos;s Grow Together
            </h2>
            <p className="text-background/70 text-lg mb-8 leading-relaxed">
              Partner with Agrocore Solutions for expert guidance in agricultural 
              consulting, regulatory compliance, and sustainable development.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold">
                Get in Touch
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
