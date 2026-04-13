import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { Car, ArrowLeft, Calendar, User, Phone, Mail, MapPin, CreditCard, CheckCircle } from 'lucide-react';

export default function Booking() {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    driversLicense: '',
    licenseState: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    reservationDate: '',
    insuranceCarrier: '',
    insurancePolicy: '',
    emergencyContact: '',
    emergencyPhone: '',
    intendedUse: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ageError, setAgeError] = useState('');

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Validate age when date of birth changes
    if (name === 'dateOfBirth' && value) {
      const age = calculateAge(value);
      if (age < 25) {
        setAgeError('You must be at least 25 years old to rent a vehicle.');
      } else {
        setAgeError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final age validation
    if (formData.dateOfBirth) {
      const age = calculateAge(formData.dateOfBirth);
      if (age < 25) {
        setAgeError('You must be at least 25 years old to rent a vehicle.');
        return;
      }
    }

    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const planDetails = {
    economy: { name: 'Economy', price: '$300', description: 'Older model vehicles' },
    standard: { name: 'Standard', price: '$400', description: 'Mid-year model vehicles' },
    premium: { name: 'Premium', price: '$500', description: 'Newer model vehicles' }
  };

  const currentPlan = planDetails[plan as keyof typeof planDetails] || planDetails.economy;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00D66A] to-[#00B356] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 max-w-md text-center shadow-2xl">
          <div className="w-20 h-20 bg-[#00D66A] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="font-display text-4xl text-[#0A0F0D] mb-4">BOOKING RECEIVED!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for choosing Drivio! We'll contact you within 24 hours to confirm your reservation.
          </p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6FAF1]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#00D66A] rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-[#0A0F0D]" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl tracking-wide text-[#0A0F0D]">DRIVIO</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-[#0A0F0D] hover:text-[#00D66A] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-display text-5xl md:text-6xl text-[#0A0F0D] mb-4">
            COMPLETE YOUR RESERVATION
          </h1>
          <p className="text-lg text-gray-600">
            You've selected the <span className="text-[#00D66A] font-medium">{currentPlan.name}</span> plan at {currentPlan.price}/week
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Personal Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E6FAF1] rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-[#00D66A]" />
              </div>
              <h2 className="font-display text-3xl text-[#0A0F0D]">PERSONAL INFORMATION</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth * (Must be 25 or older)
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 25)).toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                    ageError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-[#00D66A]'
                  }`}
                />
                {ageError && (
                  <p className="text-red-500 text-sm mt-2">{ageError}</p>
                )}
                {formData.dateOfBirth && !ageError && (
                  <p className="text-[#00D66A] text-sm mt-2">
                    Age: {calculateAge(formData.dateOfBirth)} years old ✓
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intended Use *
                </label>
                <select
                  name="intendedUse"
                  required
                  value={formData.intendedUse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                >
                  <option value="">Select use case</option>
                  <option value="delivery">Food/Package Delivery</option>
                  <option value="personal">Personal Use</option>
                  <option value="business">Business Use</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Driver's License */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E6FAF1] rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#00D66A]" />
              </div>
              <h2 className="font-display text-3xl text-[#0A0F0D]">DRIVER'S LICENSE</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Driver's License Number *
                </label>
                <input
                  type="text"
                  name="driversLicense"
                  required
                  value={formData.driversLicense}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="D1234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License State *
                </label>
                <input
                  type="text"
                  name="licenseState"
                  required
                  value={formData.licenseState}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="CA"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E6FAF1] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#00D66A]" />
              </div>
              <h2 className="font-display text-3xl text-[#0A0F0D]">ADDRESS</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                    placeholder="Los Angeles"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                    placeholder="CA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                    placeholder="90001"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E6FAF1] rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#00D66A]" />
              </div>
              <h2 className="font-display text-3xl text-[#0A0F0D]">RESERVATION DETAILS</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Pickup Date *
                </label>
                <input
                  type="date"
                  name="reservationDate"
                  required
                  value={formData.reservationDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Insurance Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E6FAF1] rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#00D66A]" />
              </div>
              <h2 className="font-display text-3xl text-[#0A0F0D]">ADDITIONAL INFORMATION</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Insurance Carrier (Optional)
                </label>
                <input
                  type="text"
                  name="insuranceCarrier"
                  value={formData.insuranceCarrier}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="e.g., State Farm, Geico"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Policy Number (Optional)
                </label>
                <input
                  type="text"
                  name="insurancePolicy"
                  value={formData.insurancePolicy}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="Policy #"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  required
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D66A] focus:border-transparent"
                  placeholder="(555) 987-6543"
                />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#E6FAF1] rounded-2xl p-6">
            <h3 className="font-display text-2xl text-[#0A0F0D] mb-4">BOOKING SUMMARY</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Plan:</span>
                <span className="font-medium text-[#0A0F0D]">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Weekly Rate:</span>
                <span className="font-medium text-[#00D66A]">{currentPlan.price}</span>
              </div>
              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  ✓ Unlimited mileage included<br />
                  ✓ Liability insurance included<br />
                  ✓ Maintenance included<br />
                  ✓ 24/7 roadside assistance
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={!!ageError}
              className={`flex-1 px-8 py-4 rounded-lg font-medium text-lg transition-all ${
                ageError
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#00D66A] text-[#0A0F0D] hover:bg-[#00B356] hover:scale-105 hover:shadow-lg hover:shadow-[#00D66A]/30'
              }`}
            >
              Submit Reservation
            </button>
            <Link
              to="/"
              className="flex-1 px-8 py-4 bg-[#0A0F0D] text-white rounded-lg font-medium text-lg hover:bg-[#1F2937] transition-all text-center"
            >
              Cancel
            </Link>
          </div>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
            We'll contact you within 24 hours to confirm your reservation.
          </p>
        </form>
      </div>
    </div>
  );
}
