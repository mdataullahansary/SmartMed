import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAmbulance, faPhoneAlt, faCheckCircle, faClock, faHospital } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Medical Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Fast and reliable ambulance service when you need it most
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  id="inputBox"
                  type="text"
                  className="w-full rounded-lg border-gray-300 border-1 bg-slate-100 pl-10 pr-4 py-3 text-gray-900 placeholder-gray-600"
                  placeholder="Enter your location"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
                </div>
              </div>
            </div>
            <button id="bookNow"
              className="rounded-lg bg-blue-500 px-8 py-3 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 h-[500px] relative overflow-hidden">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Live Ambulance Tracking
            </h2>
            <img id="map"
              src="https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Map"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <button id="requestEmergency"
                className="w-full bg-gray-500 px-4 py-3 text-white font-medium hover:bg-red-700"
              >
                <FontAwesomeIcon icon={faAmbulance} className="mr-2" /> Request Emergency
              </button>

              <button className="w-full rounded-button bg-green-600 px-4 py-3 text-white font-medium hover:bg-red-700">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Emergency Call
              </button>

              <button id="emergencyContacts"
                className="rounded-button w-full bg-blue-500 px-4 py-3 text-white font-medium hover:bg-blue-800"
              >
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Emergency Contacts
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Status Updates
            </h2>
            <div className="space-y-4">
              <div className="flex items-center text-green-500">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                <span>3 Ambulances Available Nearby</span>
              </div>
              <div className="flex items-center text-blue-500">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <span>Average Response Time: 8 mins</span>
              </div>
              <div className="flex items-center text-yellow-500">
                <FontAwesomeIcon icon={faHospital} className="mr-2" />
                <span>5 Emergency Rooms Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-4xl font-bold text-custom mb-2">24/7</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Emergency Service
          </h3>
          <p className="text-gray-600">
            Available round the clock for your emergency needs
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-4xl font-bold text-custom mb-2">5min</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Response Time</h3>
          <p className="text-gray-600">Quick response to emergency situations</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-4xl font-bold text-custom mb-2">100+</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Medical Staff</h3>
          <p className="text-gray-600">Experienced healthcare professionals</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-4xl font-bold text-custom mb-2">50+</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ambulances</h3>
          <p className="text-gray-600">Modern fleet of emergency vehicles</p>
        </div>
      </div>
    </>
  );
}

export default Home;
