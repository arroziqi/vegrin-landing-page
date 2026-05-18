import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function ProductShowcaseSection() {
  return (
    <section className="py-24 bg-[var(--vegrin-dark)] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--vegrin-green-600)] text-white">Product Gallery</Badge>
          <h2 className="text-4xl font-bold mb-4">Experience Vegrin in Action</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive view of our mobile app and dashboard interfaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <ImagePlaceholder
            type="mobile"
            label="App Home Screen"
            aspectRatio="9/16"
            className="h-[500px]"
          />
          <ImagePlaceholder
            type="screenshot"
            label="Disease Detection Result"
            aspectRatio="9/16"
            className="h-[500px]"
          />
          <ImagePlaceholder
            type="mobile"
            label="Authentication Flow"
            aspectRatio="9/16"
            className="h-[500px]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ImagePlaceholder
            type="dashboard"
            label="IoT Sensor Dashboard"
            aspectRatio="16/9"
          />
          <ImagePlaceholder
            type="dashboard"
            label="Weather Forecast View"
            aspectRatio="16/9"
          />
        </div>
      </div>
    </section>
  );
}
