import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faRoute, faPhoneAlt, faComment } from '@fortawesome/free-solid-svg-icons';

function Tracking() {
  return (
    <div className="pt-16 sm:h-screen">
      <div className="flex sm:h-full">
        {/* Map Section */}
        <div className="sm:w-[70%] relative hidden sm:flex">
          <div className="absolute inset-0">
            <img
              src="https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png"
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <FontAwesomeIcon icon={faClock} className="text-blue-500" />
                <span className="font-medium">ETA: 8 mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faRoute} className="text-blue-500" />
                <span className="font-medium">Distance: 2.5 km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Information Section */}
        <div className="w-full sm:w-[30%] bg-white border-l border-gray-200 sm:overflow-y-auto h-full">
          <div id="userdata" className="p-6">
            {/* Patient Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Patient Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Name</label>
                  <p id="patientName" className="font-medium"></p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Contact</label>
                  <p id="userNumTrucking" className="font-medium">+916258741254</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Emergency Type</label>
                  <p id="emergencyinfo" className="font-medium">Accident</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Pickup Location</label>
                  <p id="pickupLocation" className="font-medium">Old Police line Road Berhampore 710014</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Additional Notes</label>
                  <p id="patientNotes" className="font-medium"></p>
                </div>
              </div>
            </div>

            {/* Ambulance Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Ambulance Details</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://img.freepik.com/premium-photo/cheerful-young-indian-man-driver-standing-by-white-luxury-car_116547-73254.jpg"
                  alt="Driver"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Neel Khan</p>
                  <p className="text-sm text-gray-500">Unit #A-123</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  Call
                </button>
                <button className="flex-1 border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faComment} className="mr-2" />
                  Message
                </button>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Status Timeline</h2>
              <div className="relative pl-8 space-y-6">
                {[
                  { status: "Booking Confirmed", time: "10:30 AM" },
                  { status: "Ambulance Dispatched", time: "10:32 AM" },
                  { status: "On the Way", time: "Current Status" }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 w-4 h-4 bg-blue-500 rounded-full"></div>
                    {index < 2 && <div className="border-l-2 border-blue-500 absolute -left-6 top-4 bottom-0"></div>}
                    <p className="font-medium">{item.status}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Booking Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500">Booking ID</label>
                  <p className="font-medium">#pulsecare1234</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Timestamp:</label>
                  <p id="timeStamp" className="font-medium">2025-03-17 17:21:50</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Destination Hospital:</label>
                  <p className="font-medium">Lake View Hospital</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
