"use client";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-emerald-50">
      {/* The video tag with performance attributes */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1611974714603-3555366b3a30?q=80&w=1200&auto=format&fit=crop" // Shows while video loads
        className="w-full h-full object-cover transition-opacity duration-1000"
      >
        <source 
          src="https://player.vimeo.com/external/494252666.sd.mp4?s=727fb385a49826338e93739763784f1b88e2c7a3&profile_id=164&oauth2_token_id=57447761" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />
    </div>
  );
}