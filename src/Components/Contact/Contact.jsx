import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPhone, faEdit, faTrash, faAmbulance, faComments, faCheck } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const makeCall = () => {
    window.location.href = 'tel:102'; // Initiates a phone call
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Emergency Contacts</h1>
            <p className="text-gray-600 mb-6">
              Keep your emergency contacts updated for quick access during critical situations.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Name</label>
                  <input type="text" className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50" placeholder="Enter full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Relationship</label>
                  <input type="text" className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50" placeholder="e.g. Family, Friend" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50" placeholder="Enter phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50" placeholder="Enter email address" />
                </div>
              </div>
              <button type="submit" className="rounded-md w-full bg-blue-500 text-white py-2 px-4 font-semibold hover:bg-blue-600 transition-colors">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Add Contact
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Saved Contacts</h2>
            <div className="space-y-4">
              {[
                { name: "John Smith", relation: "Family", phone: "+919725417584" },
                { name: "Sarah Johnson", relation: "Friend", phone: "+918574857452" }
              ].map((contact, index) => (
                <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="rounded-md p-2 text-blue-600 hover:bg-gray-100">
                      <FontAwesomeIcon icon={faPhone} />
                    </button>
                    <button className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <button onClick={makeCall} className="rounded-md w-full bg-blue-500 text-white py-3 px-4 font-semibold hover:bg-blue-600 transition-colors">
                <FontAwesomeIcon icon={faAmbulance} className="mr-2" />
                Call Emergency (102)
              </button>
              <button className="rounded-md w-full bg-white border-2 border-blue-500 text-blue-600 py-3 px-4 font-semibold hover:bg-gray-100 transition-colors">
                <FontAwesomeIcon icon={faComments} className="mr-2" />
                Chat with Support
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Information</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 px-4 py-3 bg-blue-100">
                <h3 className="font-medium text-gray-900">Nearest Hospital</h3>
                <p className="text-sm text-gray-600">City General Hospital (0.8 miles)</p>
                <p className="text-sm text-gray-600">123 Medical Center Dr.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Quick Instructions</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Stay calm and assess the situation</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Call emergency services if needed</li>
                  <li><FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Keep emergency contacts updated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
