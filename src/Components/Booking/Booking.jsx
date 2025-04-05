import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faLocationCrosshairs,
  faPhone,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { databases, ID } from "../../appwriteConfig";

function Booking() {
  const [formData, setFormData] = useState({
    patientName: "",
    address: "",
    phone: "",
    emergencyType: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_BOOKINGS_COLLECTION_ID,
        ID.unique(),
        formData
      );
      alert("✅ Booking successful!");

      setTimeout(() => (window.location.href = "/tracking"), 2000);
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  //   const getCurrentLocation = () => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log('Latitude:', position.coords.latitude);
  //         console.log('Longitude:', position.coords.longitude);
  //       },
  //       (error) => {
  //         console.error('Error fetching location:', error);
  //       }
  //     );
  //   };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Emergency Medical Services
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Fast and reliable ambulance service when you need it most
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-ml font-medium text-gray-700"
              >
                Patient Name
              </label>
              <div className="mt-1 relative border-[1px] border-gray-[#D1D5DB]">
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="patientName"
                  value={formData.patientName}
                  type="text"
                  className="w-full rounded-md pl-10 p-[6px] focus:outline-none focus:border-blue-700 focus:ring rounded-none focus:ring-blue-500 transition "
                  placeholder="Enter patient name"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="addressBox"
                className="block text-sm font-medium text-gray-700"
              >
                Your Location
              </label>
              <div className="mt-1 relative border-[1px] border-gray-[#D1D5DB]">
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="address"
                  value={formData.address}
                  type="text"
                  className="w-full p-[6px] focus:outline-none focus:border-blue-700 focus:ring rounded-none focus:ring-blue-500 transition rounded-md pl-10"
                  placeholder="Enter your address"
                />
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="fas fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              <button
                type="button"
                className="mt-2 text-sm text-custom hover:text-custom/80"
              >
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="fas fa-location-crosshairs mr-1"
                />{" "}
                Use current location
              </button>
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <div className="mt-1 relative border-[1px] border-gray-[#D1D5DB]">
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="phone"
                  value={formData.phone}
                  type="tel"
                  className="w-full p-[6px] focus:outline-none focus:border-blue-700 focus:ring rounded-none focus:ring-blue-500 transition rounded-md pl-10"
                  placeholder="Your phone number"
                />
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fas fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Emergency Type
              </label>
              <div className="mt-1 relative border-[1px] border-gray-[#D1D5DB]">
                <select
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={formData.emergencyType}
                  name="emergencyType"
                  className="w-full p-[6px] focus:outline-none focus:border-blue-700 focus:ring rounded-none focus:ring-blue-500 transition  pl-10 appearance-none"
                >
                  <option value="">Select emergency type</option>
                  <option value="accident">Accident</option>
                  <option value="cardiac">Cardiac Emergency</option>
                  <option value="trauma">Trauma</option>
                  <option value="other">Other Medical Emergency</option>
                </select>
                <FontAwesomeIcon
                  icon={faTruckMedical}
                  className="fas fa-ambulance absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                value={formData.notes}
                name="notes"
                className="mt-1 w-full border-gray-300 rounded-md"
                rows="3"
                placeholder="Any specific requirements or conditions..."
              ></textarea>
            </div>

            <button
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              type="submit"
              className="w-full bg-black text-white py-3 font-medium rounded-md hover:via-gray-600 transition-colors"
            >
              <FontAwesomeIcon
                icon={faTruckMedical}
                className="fas fa-truck-medical mr-2"
              />{" "}
              Book Emergency Service Now
            </button>
          </form>
        </div>

        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png"
            alt="Map"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  3 Ambulances Nearby
                </p>
                <p className="text-sm text-gray-500">
                  Estimated arrival: 8-10 mins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <i className="fas fa-clock text-3xl text-custom"></i>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            24/7 Service
          </h3>
          <p className="mt-2 text-gray-600">
            Round-the-clock emergency medical services available
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <i className="fas fa-user-md text-3xl text-custom"></i>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Expert Medical Team
          </h3>
          <p className="mt-2 text-gray-600">
            Highly trained medical professionals ready to assist
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <i className="fas fa-shield-alt text-3xl text-custom"></i>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Safe & Reliable
          </h3>
          <p className="mt-2 text-gray-600">
            Licensed and certified emergency medical services
          </p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
