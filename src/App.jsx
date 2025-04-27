import { useState } from "react";
import React from 'react';
import PropertyCard from './components/propertycard';
import "./App.css";
import house1 from "./assets/house.jpg";
import hrome from "./assets/hrome.jpg";
import cottage from "./assets/cottage.jpg";
import loft from "./assets/loft.jpg";
import hbeach from "./assets/hbeach.jpg";
import cabin from "./assets/cabin.jpg";
import urban from "./assets/urban.jpg";
import hcountryside from "./assets/hcountryside.jpg";
import penthouse from "./assets/penthouse.jpg";
import bungalow from "./assets/bungalow.jpg";
import luxury from "./assets/luxury.jpg";
import historic from "./assets/historic.jpg";
import coastal from "./assets/coastal.jpg";
import farmhouse from "./assets/farmhouse.jpg";
import mansion from "./assets/mansion.jpg";
import studio from "./assets/studio.jpg";



const properties = [
  {
    id: 1,
    title: "Sunny Apartment",
    price: 250000,
    address: "Milan, Italy 🇮🇹",
    bedrooms: 3,
    bathrooms: 2,
    size: 120,
    image: house1,
  },
  {
    id: 2,
    title: "Luxury Villa",
    price: 750000,
    address: "Rome, Italy 🇮🇹",
    bedrooms: 5,
    bathrooms: 4,
    size: 350,
    image: hrome,

  },
  {
    id: 3,
    title: "Cozy Cottage",
    price: 300000,
    address: "Florence, Italy 🇮🇹",
    bedrooms: 2,
    bathrooms: 1,
    size: 80,
    image: cottage,
  },
  {
    id: 4,
    title: "Modern Loft",
    price: 400000,
    address: "Venice, Italy 🇮🇹",
    bedrooms: 1,
    bathrooms: 1,
    size: 60,
    image: loft,
  },
  {
    id: 5,
    title: "Beach House",
    price: 600000,
    address: "Sicily, Italy 🇮🇹",
    bedrooms: 4,
    bathrooms: 3,
    size: 200,
    image: hbeach,
  },
  {
    id: 6,
    title: "Mountain Cabin",
    price: 350000,
    address: "Alps, Italy 🇮🇹",
    bedrooms: 3,
    bathrooms: 2,
    size: 150,
    image: cabin,
  },
  {
    id: 7,
    title: "Urban Apartment",
    price: 280000,
    address: "Milan, Italy 🇮🇹",
    bedrooms: 2,
    bathrooms: 1,
    size: 90,
    image: urban,
  },
  {
    id: 8,
    title: "Countryside House",
    price: 450000,
    address: "Tuscany, Italy 🇮🇹",
    bedrooms: 4,
    bathrooms: 3,
    size: 250,
    image: hcountryside,
  },
  {
    id: 9,
    title: "Penthouse Suite",
    price: 900000,
    address: "Rome, Italy 🇮🇹",
    bedrooms: 3,
    bathrooms: 2,
    size: 180,
    image: penthouse,
  },
  {
    id: 10,
    title: "Charming Bungalow",
    price: 320000,
    address: "Naples, Italy 🇮🇹",
    bedrooms: 2,
    bathrooms: 1,
    size: 70,
    image: bungalow,
  },
  {
    id: 11,
    title: "Luxury Apartment",
    price: 500000,
    address: "Milan, Italy 🇮🇹",
    bedrooms: 3,
    bathrooms: 2,
    size: 150,
    image: luxury,
  },
  {
    id: 12,
    title: "Historic Villa",
    price: 800000,
    address: "Florence, Italy 🇮🇹",
    bedrooms: 5,
    bathrooms: 4,
    size: 400,
    image: historic,
  },
  {
    id: 13,
    title: "Coastal Retreat",
    price: 700000,
    address: "Amalfi Coast, Italy 🇮🇹",
    bedrooms: 4,
    bathrooms: 3,
    size: 300,
    image: coastal,
  },
  {
    id: 14,
    title: "Rustic Farmhouse",
    price: 350000,
    address: "Tuscany, Italy 🇮🇹",
    bedrooms: 3,
    bathrooms: 2,
    size: 200,
    image: farmhouse,
  },
  {
    id: 15,
    title: "Elegant Mansion",
    price: 1200000,
    address: "Rome, Italy 🇮🇹",
    bedrooms: 6,
    bathrooms: 5,
    size: 600,
    image: mansion,
  },
  {
    id: 16,
    title: "Chic Studio",
    price: 220000,
    address: "Milan, Italy 🇮🇹",
    bedrooms: 1,
    bathrooms: 1,
    size: 50,
    image: studio,
  },
];

function App() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}

export default App;






