"use client";

import { useParams } from "next/navigation";

const data: any = {
  "bhoo-vaibhav": {
    title: "RR BHOO VAIBHAV GARDEN",
    desc: "Premium villa plots with world-class amenities.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  terracon: {
    title: "RR Terracon Sai Enclave",
    desc: "Modern plotted development in Bangalore.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  "kgs-layout": {
    title: "RR KGS Layout",
    desc: "Approved layout with strong investment potential.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
};

export default function PropertyPage() {
  const params = useParams();
  const property = data[params.id as string];

  if (!property) return <div className="text-white p-20">Not Found</div>;

  return (
    <div className="bg-[#0a0a0c] text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh]">
        <img
          src={property.image}
          className="w-full h-full object-cover brightness-50"
        />
        <h1 className="absolute bottom-10 left-10 text-4xl font-light">
          {property.title}
        </h1>
      </div>

      {/* DETAILS */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-white/70 text-lg leading-relaxed">
          {property.desc}
        </p>
      </div>
    </div>
  );
}