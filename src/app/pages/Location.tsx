import { Navigation } from "../components/Navigation";
import { MapPin, Clock } from "lucide-react";

export function Location() {
  return (
    <div className="min-h-screen bg-[#464343]">
      <Navigation />
      
      {/* Header */}
      <section className="bg-[#464343] border-b-2 border-[#2A2A2A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Visit Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Come by for a cup
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-8">
              <div className="bg-[#565353] p-8 border-2 border-[#2A2A2A] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Address
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      1432 S St Mary's St<br />
                      San Antonio, TX 78210
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#565353] p-8 border-2 border-[#2A2A2A] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#16A34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Hours
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-300 text-lg">
                        <span className="font-semibold text-white">Weekdays:</span> 7:30 AM - 4:00 PM
                      </p>
                      <p className="text-gray-300 text-lg">
                        <span className="font-semibold text-white">Weekends:</span> 8:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#DC2626] p-8 border-2 border-[#FDE047]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-white leading-relaxed mb-6 opacity-90">
                  Stop by during our hours or reach out if you have any questions. We'd love to serve you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.google.com/maps/dir//1432+S+St+Mary%27s+St,+San+Antonio,+TX+78210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-button"
                  >
                    <span>Get Directions</span>
                  </a>
                  <a
                    href="https://www.instagram.com/eightballcoffee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-button secondary"
                  >
                    <span>Follow Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden shadow-2xl border-4 border-[#FDE047] h-[600px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.0742748367707!2d-98.49536!3d29.411647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f5d42c3b0e7%3A0x3c1f0c7a8c5d0c7a!2s1432%20S%20St%20Mary&#39;s%20St%2C%20San%20Antonio%2C%20TX%2078210!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eightball Coffee Location"
              ></iframe>
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