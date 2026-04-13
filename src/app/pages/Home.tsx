import { useState } from 'react';
import { Link } from 'react-router';
import { Car, Clock, DollarSign, Shield, CheckCircle, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#00D66A] rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-[#0A0F0D]" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl tracking-wide text-[#0A0F0D]">DRIVIO</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-[#0A0F0D] hover:text-[#00D66A] transition-colors">How It Works</a>
              <a href="#pricing" className="text-[#0A0F0D] hover:text-[#00D66A] transition-colors">Pricing</a>
              <a href="#benefits" className="text-[#0A0F0D] hover:text-[#00D66A] transition-colors">Benefits</a>
              <button
                onClick={scrollToPricing}
                className="px-6 py-2.5 bg-[#00D66A] text-[#0A0F0D] rounded-lg font-medium hover:bg-[#00B356] transition-all hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#how-it-works" className="block text-[#0A0F0D] hover:text-[#00D66A] py-2">How It Works</a>
              <a href="#pricing" className="block text-[#0A0F0D] hover:text-[#00D66A] py-2">Pricing</a>
              <a href="#benefits" className="block text-[#0A0F0D] hover:text-[#00D66A] py-2">Benefits</a>
              <button
                onClick={scrollToPricing}
                className="w-full px-6 py-2.5 bg-[#00D66A] text-[#0A0F0D] rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#E6FAF1] to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D66A] rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-[#E6FAF1] rounded-full">
                <span className="text-[#00B356] font-medium">Weekly Rentals for Gig Workers</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#0A0F0D] leading-none">
                DRIVE. <br />
                <span className="text-[#00D66A]">EARN.</span> <br />
                REPEAT.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Affordable weekly car rentals designed for gig workers and delivery drivers.
                No long-term commitment. Just reliable wheels to keep you earning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToPricing}
                  className="px-8 py-4 bg-[#00D66A] text-[#0A0F0D] rounded-lg font-medium text-lg hover:bg-[#00B356] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#00D66A]/30"
                >
                  Reserve Your Car
                </button>
                <button
                  onClick={scrollToPricing}
                  className="px-8 py-4 bg-[#0A0F0D] text-white rounded-lg font-medium text-lg hover:bg-[#1F2937] transition-all"
                >
                  View Pricing
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00D66A]" />
                  <span className="text-gray-700">No credit check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00D66A]" />
                  <span className="text-gray-700">24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00D66A]" />
                  <span className="text-gray-700">Same-day pickup</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D66A] to-[#00B356] rounded-3xl rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1593950315186-76a92975b60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Car rental for gig workers"
                className="relative rounded-3xl w-full h-[400px] md:h-[500px] object-cover shadow-2xl"
              />

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="font-display text-4xl text-[#00D66A]">$300</div>
                <div className="text-sm text-gray-600">Starting Per Week</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#0A0F0D] p-6 rounded-2xl shadow-xl">
                <div className="font-display text-4xl text-[#00D66A]">500+</div>
                <div className="text-sm text-white">Active Drivers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
              WHY GIG WORKERS CHOOSE US
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We understand the gig economy. Our rentals are designed specifically for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Weekly Pricing",
                description: "Affordable rates with no hidden fees. Pay weekly and stay flexible.",
                color: "#00D66A"
              },
              {
                icon: Clock,
                title: "Same-Day Pickup",
                description: "Need a car now? Pick up within hours and start earning today.",
                color: "#FFD93D"
              },
              {
                icon: Shield,
                title: "Insurance Included",
                description: "Liability insurance and maintenance covered. Drive with peace of mind.",
                color: "#00D66A"
              },
              {
                icon: Car,
                title: "Well-Maintained Fleet",
                description: "All vehicles are regularly inspected and maintained to keep you on the road.",
                color: "#FFD93D"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1F2937] p-8 rounded-2xl hover:bg-[#374151] transition-all group hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: benefit.color + '20' }}
                >
                  <benefit.icon
                    className="w-7 h-7"
                    style={{ color: benefit.color }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#E6FAF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-[#0A0F0D] mb-4">
              SIMPLE, TRANSPARENT PRICING
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No surprises. No hidden fees. Just straightforward weekly rates based on vehicle age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Economy",
                price: "$300",
                features: [
                  "Older model vehicles",
                  "Reliable & fuel-efficient",
                  "Unlimited mileage",
                  "Liability insurance included",
                  "Maintenance included",
                  "24/7 roadside assistance",
                  "Weekly payment"
                ],
                popular: false
              },
              {
                name: "Standard",
                price: "$400",
                features: [
                  "Mid-year model vehicles",
                  "Sedan or compact SUV",
                  "Unlimited mileage",
                  "Liability insurance included",
                  "Maintenance included",
                  "24/7 roadside assistance",
                  "Weekly payment",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Premium",
                price: "$500",
                features: [
                  "Newer model vehicles",
                  "Premium sedan or SUV",
                  "Unlimited mileage",
                  "Liability insurance included",
                  "Maintenance included",
                  "24/7 roadside assistance",
                  "Weekly payment",
                  "Priority support",
                  "Free car wash"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 ${
                  plan.popular
                    ? 'border-4 border-[#00D66A] shadow-2xl scale-105 relative'
                    : 'border-2 border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#00D66A] text-[#0A0F0D] rounded-full font-medium">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display text-3xl text-[#0A0F0D] mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl text-[#00D66A]">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/week</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00D66A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/book/${plan.name.toLowerCase()}`}
                  className={`block w-full py-3 rounded-lg font-medium transition-all text-center ${
                    plan.popular
                      ? 'bg-[#00D66A] text-[#0A0F0D] hover:bg-[#00B356] hover:scale-105'
                      : 'bg-[#0A0F0D] text-white hover:bg-[#1F2937]'
                  }`}
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-[#0A0F0D] mb-4">
              GET ON THE ROAD IN 3 STEPS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Choose Your Car",
                description: "Browse our fleet and select the vehicle that fits your needs and budget."
              },
              {
                step: "02",
                title: "Book Online",
                description: "Complete your reservation online in minutes. No lengthy paperwork or credit checks."
              },
              {
                step: "03",
                title: "Start Earning",
                description: "Pick up your car same-day and hit the road. Start making money immediately."
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00D66A] to-[#00B356] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="font-display text-4xl text-white">{step.step}</span>
                  </div>
                </div>
                <h3 className="font-display text-3xl text-[#0A0F0D] mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#00D66A] to-[#00B356] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-4xl md:text-6xl text-[#0A0F0D] mb-6">
            READY TO START EARNING?
          </h2>
          <p className="text-xl text-[#0A0F0D]/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of gig workers who trust Drivio for reliable, affordable car rentals.
          </p>
          <button
            onClick={scrollToPricing}
            className="px-10 py-5 bg-[#0A0F0D] text-white rounded-lg font-medium text-lg hover:bg-[#1F2937] transition-all hover:scale-105 shadow-2xl"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#00D66A] rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-[#0A0F0D]" strokeWidth={2.5} />
                </div>
                <span className="font-display text-2xl text-white">DRIVIO</span>
              </Link>
              <p className="text-gray-400">
                Empowering gig workers with affordable, reliable car rentals.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">Our Fleet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">Locations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">Roadside Assistance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@drivio.com</li>
                <li>1-800-DRIVIO</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Drivio Car Rentals. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00D66A] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
