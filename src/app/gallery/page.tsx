import { getGalleryMedia } from "@/lib/getGalleryMedia";
import AppleGallery from "@/components/AppleGallery";
import GalleryHero from "@/components/GalleryHero";

export default function Page() {
  const media = getGalleryMedia();

  return (
    <div className="bg-white">

      <GalleryHero />

      <section className="px-6 pb-24">
        <AppleGallery media={media} />
      </section>

    </div>
  );
}
