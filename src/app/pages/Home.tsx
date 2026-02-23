import { Navigation } from "../components/Navigation";
import { Link } from "react-router";
import { Coffee, Menu, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Home() {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    // End intro after animation completes
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds total animation time
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#464343]">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Intro Eightball Animation */}
            <motion.div
              className="relative w-64 h-64"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.5, 1.5, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.4, 0.6, 1],
                ease: "easeInOut"
              }}
            >
              {/* Black ball */}
              <div className="absolute inset-0 bg-black rounded-full border-8 border-[#2A2A2A] shadow-2xl"></div>
              {/* White circle - centered */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center">
                {/* Number 8 - spins */}
                <motion.span 
                  className="text-7xl font-black text-black"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 360, 360, 720] }}
                  transition={{ 
                    duration: 3, 
                    times: [0, 0.4, 0.6, 1],
                    ease: "easeInOut" 
                  }}
                >
                  8
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Navigation />
      
      {/* Hero Section - Video */}
      <motion.section
        className="relative h-[60vh] overflow-hidden bg-[#0A0A0A] -mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <video
          src="https://res.cloudinary.com/dt8qmk7et/video/upload/v1771879332/Untitled_1920_x_1080_px_m79mdw.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute bottom-0 left-0 w-screen h-full object-cover border-0"
        />
      </motion.section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#464343] to-[#3a3838]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="group relative bg-[#565353]/40 backdrop-blur-sm p-8 border border-[#DC2626]/20 hover:border-[#DC2626] transition-all duration-300 hover:shadow-2xl hover:shadow-[#DC2626]/20 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#DC2626] to-[#991B1B] mb-6 border-2 border-[#FDE047] shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FDE047] transition-colors">
                  Quality Beans
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Proudly serving <a href="https://creaturecoffee.co/" target="_blank" rel="noopener noreferrer" className="text-[#FDE047] hover:text-[#F59E0B] transition-colors underline font-semibold">@creaturecoffeeco</a>
                </p>
              </div>
            </motion.div>
            
            <Link to="/menu">
              <motion.div 
                className="group relative bg-[#565353]/40 backdrop-blur-sm p-8 border border-[#16A34A]/20 hover:border-[#16A34A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#16A34A]/20 hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#16A34A] to-[#15803D] mb-6 border-2 border-[#FDE047] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Menu className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FDE047] transition-colors">
                    Menu
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Check out our full selection of coffee drinks.
                  </p>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/location">
              <motion.div 
                className="group relative bg-[#565353]/40 backdrop-blur-sm p-8 border border-[#FDE047]/20 hover:border-[#FDE047] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FDE047]/20 hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDE047] to-[#FCD34D] mb-6 border-2 border-[#DC2626] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FDE047] transition-colors">
                    Location
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Find us in the heart of San Antonio's Southtown district.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-[#464343]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black text-[#FDE047] mb-12">
            Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-[#565353] p-8 border-2 border-[#DC2626]">
              <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">Weekdays</p>
              <p className="text-3xl font-bold text-white">7:30 AM - 4:00 PM</p>
            </div>
            <div className="bg-[#565353] p-8 border-2 border-[#16A34A]">
              <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">Weekends</p>
              <p className="text-3xl font-bold text-white">8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t-2 border-[#2A2A2A] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">
            1432 S St Mary's St, San Antonio, TX 78210
          </p>
          <p className="text-gray-600">
            © 2026 Eightball Coffee
          </p>
        </div>
      </footer>
    </div>
  );
}