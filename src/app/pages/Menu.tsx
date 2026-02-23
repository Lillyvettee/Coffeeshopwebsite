import { Navigation } from "../components/Navigation";
import { Coffee } from "lucide-react";

export function Menu() {
  const espressoItems = [
    { name: "CORTADO" },
    { name: "CAPPUCCINO" },
    { name: "LATTE" },
    { name: "AMERICANO" },
    { name: "DRIP" },
    { name: "COLD BREW" },
    { name: "MATCHA" },
  ];

  const syrups = [
    "COCO CAJETA",
    "LAVENDER",
    "MOCHA",
    "SALTED CARAMEL",
    "VANILLA"
  ];

  const milks = [
    "WHOLE",
    "OAT"
  ];

  return (
    <div className="min-h-screen bg-[#464343]">
      <Navigation />
      
      {/* Header */}
      <section className="bg-[#464343] border-b-2 border-[#2A2A2A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            MENU
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto uppercase tracking-wide">
            Handcrafted coffee drinks made with care
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Espresso Drinks */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#DC2626]">
              <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                Espresso
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {espressoItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#565353] p-6 border-2 border-[#2A2A2A] hover:border-[#DC2626] transition-all"
                >
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Syrups */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#FDE047]">
              <div className="w-12 h-12 bg-[#FDE047] rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                Syrups
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {syrups.map((syrup, index) => (
                <div
                  key={index}
                  className="bg-[#565353] p-6 border-2 border-[#2A2A2A] hover:border-[#FDE047] transition-all"
                >
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                    {syrup}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Milks */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#16A34A]">
              <div className="w-12 h-12 bg-[#16A34A] rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                Milks
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {milks.map((milk, index) => (
                <div
                  key={index}
                  className="bg-[#565353] p-6 border-2 border-[#2A2A2A] hover:border-[#16A34A] transition-all"
                >
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                    {milk}
                  </h3>
                </div>
              ))}
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