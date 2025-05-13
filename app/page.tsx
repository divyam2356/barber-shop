"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, ChevronDown, Scissors, Clock, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-amber-500 transition-colors group-hover:text-amber-400"
              >
                PMC
              </motion.span>
              <span className="ml-2 text-lg">Barbershop</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
                <Link
                  key={i}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-white hover:text-amber-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all hover:after:w-full"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="tel:+19408081569"
                className="hidden md:flex items-center text-white hover:text-amber-500 transition-colors group"
              >
                <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                <span>+1 940 808 1569</span>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                  <span className="relative z-10">Book an Appointment</span>
                  <span className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div variants={fadeIn} className="mb-2 text-amber-500">
                Premium Barber Services in Denton
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Classic Cuts, <br />
                <span className="text-gradient">Modern Style</span>
              </motion.h1>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
                Premium Barber Shop
              </motion.h2>
              <motion.p variants={fadeIn} className="text-zinc-400 mb-8 max-w-lg">
                At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the
                perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel
                shaves in a classic barbershop atmosphere.
              </motion.p>

              <motion.div variants={fadeIn} className="flex items-center mb-8">
                <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                <span>Denton, TX</span>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-zinc-700 hover:bg-zinc-800 text-white w-full sm:w-auto group"
                  >
                    <span>Our Services</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full sm:w-auto relative overflow-hidden group">
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="PMC Barbershop Team"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-amber-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <span className="font-bold text-black">Since 2015</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <ChevronDown className="h-8 w-8 text-amber-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-amber-500">PMC</span>
                <span className="ml-2 text-lg">Barbershop</span>
              </div>
              <p className="text-zinc-400 mb-4">
                Premium barber services in Denton, TX. Classic cuts with modern style.
              </p>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                <span>Denton, TX</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-amber-500 transition-colors flex items-center group"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      <span className="ml-2">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Hours</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <Link
                  href="tel:+19408081569"
                  className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors group"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span>+1 940 808 1569</span>
                </Link>
                <div>
                  <h4 className="font-bold mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: "facebook",
                        path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                      },
                      {
                        icon: "instagram",
                        path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                      },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        className="text-zinc-400 hover:text-amber-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} PMC Barbershop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Expert Stylists",
      description: "Our team of skilled barbers brings years of experience and passion to every cut.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Convenient Hours",
      description: "Open 7 days a week with flexible hours to accommodate your busy schedule.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Premium Products",
      description: "We use only the highest quality products to ensure the best results for your hair and skin.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Loyal Community",
      description: "Join our growing community of satisfied clients who trust us with their style.",
    },
  ]

  return (
    <section className="py-16 border-b border-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-amber-500/50 transition-colors text-center group"
            >
              <motion.div
                className="text-amber-500 mx-auto mb-4 bg-amber-500/10 p-4 rounded-full"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      name: "Classic Haircut",
      description: "Traditional haircut with precision styling and attention to detail.",
      price: 30,
    },
    {
      name: "Beard Trim",
      description: "Expert beard shaping and trimming for a clean, polished look.",
      price: 20,
    },
    {
      name: "Hot Towel Shave",
      description: "Relaxing traditional straight razor shave with hot towel treatment.",
      price: 35,
    },
    {
      name: "Hair & Beard Combo",
      description: "Complete grooming package with haircut and beard trim.",
      price: 45,
    },
    {
      name: "Kids Haircut",
      description: "Stylish cuts for the younger gentlemen under 12.",
      price: 25,
    },
    {
      name: "Premium Styling",
      description: "Advanced styling techniques for special occasions.",
      price: 40,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We offer a range of premium barbering services to keep you looking your best. From classic cuts to modern
            styles, our experienced barbers have you covered.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-amber-500 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="text-amber-500 text-xl font-bold group-hover:translate-x-1 transition-transform">
                  {service.name}
                </div>
                <div className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-full">${service.price}</div>
              </div>
              <p className="text-zinc-400 mb-4">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-amber-500 font-medium flex items-center group"
              >
                <span>Book now</span>
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About PMC Barbershop</h2>
            <p className="text-zinc-400 mb-6">
              Founded with a passion for exceptional grooming, PMC Barbershop has become Denton's premier destination
              for men seeking quality haircuts and grooming services.
            </p>
            <p className="text-zinc-400 mb-6">
              Our team of skilled barbers combines years of experience with a dedication to craft, ensuring every client
              leaves looking and feeling their best.
            </p>
            <p className="text-zinc-400 mb-8">
              We pride ourselves on creating a welcoming atmosphere where tradition meets modern style, offering
              services that range from classic cuts to contemporary designs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                <span className="relative z-10">Learn More About Us</span>
                <span className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[400px]"
          >
            <div className="absolute -top-5 -left-5 h-24 w-24 bg-amber-500 rounded-full flex items-center justify-center transform -rotate-12 shadow-lg">
              <span className="font-bold text-black">Quality</span>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Barbershop Interior"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-amber-500/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael T.",
      text: "Best barbershop in Denton! The attention to detail is incredible, and I always leave looking sharp.",
    },
    {
      name: "James R.",
      text: "I've been coming to PMC for over a year now. The atmosphere is great and the cuts are even better.",
    },
    {
      name: "David K.",
      text: "The hot towel shave is an experience every man should try. Professional service and amazing results.",
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience at PMC
            Barbershop.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-amber-500 transition-all duration-300 relative"
            >
              <div className="absolute -top-3 -right-3 bg-amber-500 text-black h-8 w-8 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="h-5 w-5 text-amber-500 fill-current"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-zinc-400 mb-4 italic">"{testimonial.text}"</p>
              <div className="font-bold">{testimonial.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto border border-zinc-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Fresh Look?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the premium service that has made PMC Barbershop the most
              trusted name in Denton.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group">
                  <span className="relative z-10">Book an Appointment</span>
                  <span className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white group">
                  <span>View Our Gallery</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
