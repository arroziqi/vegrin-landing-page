import { useState } from "react";
import { Image as ImageIcon, Smartphone, Monitor, Globe } from "lucide-react";

import { ImagePlaceholderProps } from "@/types";

type PlaceholderType = "mobile" | "desktop" | "dashboard" | "screenshot";

function ProjectImage({
  imageSrc,
  label,
  onError,
  className,
}: {
  imageSrc: string;
  label: string;
  onError: () => void;
  className?: string;
}) {
  return (
    <img
      src={imageSrc}
      alt={label}
      className={`
        h-fit
    object-contain
    filter 
    drop-shadow-[20px_20px_40px_rgba(0,0,0,0.35)]
    ${className}
  `}
      onError={onError}
    />
  );
}

function PlaceholderContent({
  type,
  label,
  className,
  aspectRatio,
}: {
  type: PlaceholderType;
  label: string;
  className?: string;
  aspectRatio: string;
}) {
  const icons = {
    mobile: Smartphone,
    desktop: Monitor,
    dashboard: Globe,
    screenshot: ImageIcon,
  };

  const Icon = icons[type];

  return (
    <div
      className={`relative overflow-hidden rounded-xl border-2 border-dashed border-[var(--vegrin-green-300)] bg-gradient-to-br from-[var(--vegrin-green-50)] to-white ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--vegrin-green-100)]/50 to-transparent rounded-xl" />

      <div className="h-full w-full p-8 flex flex-col items-center justify-center relative z-10">
        <Icon
          className="w-16 h-16 text-[var(--vegrin-green-500)] mb-4"
          strokeWidth={1.5}
        />

        <p className="text-sm text-[var(--vegrin-green-700)] font-medium">
          {label}
        </p>

        <p className="text-xs text-[var(--vegrin-green-600)] mt-2">
          Replace with actual screenshot
        </p>
      </div>
    </div>
  );
}

export function ImagePlaceholder({
  type = "screenshot",
  label = "Product Screenshot",
  className = "",
  aspectRatio = "16/9",
  imageSrc,
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);

  const showImage = imageSrc && !imageError;

  if (showImage) {
    return (
      <ProjectImage
        imageSrc={imageSrc}
        label={label}
        className={className}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <PlaceholderContent
      type={type}
      label={label}
      className={className}
      aspectRatio={aspectRatio}
    />
  );
}
