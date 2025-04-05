import React, { useState } from "react";
import { databases, ID } from "../../appwriteConfig"; // Import ID from Appwrite SDK

const AddHospital = () => {
  const [hospital, setHospital] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
    ambulance_count: "",
    contact: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setHospital((prevHospital) => ({
      ...prevHospital,
      [name]:
        name === "latitude" || name === "longitude"
          ? parseFloat(value) || ""
          : name === "ambulance_count"
          ? parseInt(value) || 0
          : value,
    }));
  };

  // Add Hospital to Appwrite Database
  const addHospital = async (e) => {
    e.preventDefault();

    try {
      // Create document in the database
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID, // Database ID
        import.meta.env.VITE_APPWRITE_HOSPITALS_COLLECTION_ID, // Collection ID
        ID.unique(), // Generate a unique document ID
        {
          name: hospital.name,
          address: hospital.address,
          latitude: parseFloat(hospital.latitude),
          longitude: parseFloat(hospital.longitude),
          ambulance_count: parseInt(hospital.ambulance_count),
          contact: hospital.contact,
        }
      );

      alert("✅ Hospital added successfully!");
      setHospital({
        name: "",
        address: "",
        latitude: "",
        longitude: "",
        ambulance_count: "",
        contact: "",
      }); // Reset form after submission

    } catch (error) {
      console.error("❌ Error adding hospital:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🏥 Add New Hospital</h2>
      <form onSubmit={addHospital} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Hospital Name"
          value={hospital.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={hospital.address}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          value={hospital.latitude}
          onChange={handleChange}
          required
          className="border p-2 w-full"
          step="any" // Allows decimals
        />
        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          value={hospital.longitude}
          onChange={handleChange}
          required
          className="border p-2 w-full"
          step="any" // Allows decimals
        />
        <input
          type="number"
          name="ambulance_count"
          placeholder="Number of Ambulances"
          value={hospital.ambulance_count}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={hospital.contact}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          ➕ Add Hospital
        </button>
      </form>
    </div>
  );
};
console.log(import.meta.env);


export default AddHospital;
