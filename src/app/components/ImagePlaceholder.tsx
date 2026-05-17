import { Image, Smartphone, Monitor, Globe } from "lucide-react";

interface ImagePlaceholderProps {
  type?: "mobile" | "desktop" | "dashboard" | "screenshot";
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export function ImagePlaceholder({
  type = "screenshot",
  label = "Product Screenshot",
  className = "",
  aspectRatio = "16/9",
}: ImagePlaceholderProps) {
  const icons = {
    mobile: Smartphone,
    desktop: Monitor,
    dashboard: Globe,
    screenshot: Image,
  };

  const Icon = icons[type];

  return (
    <div
      className={`relative rounded-xl border-2 border-dashed border-[var(--vegrin-green-300)] bg-gradient-to-br from-[var(--vegrin-green-50)] to-white p-8 flex flex-col items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--vegrin-green-100)]/50 to-transparent rounded-xl" />
      <Icon className="w-16 h-16 text-[var(--vegrin-green-500)] mb-4 relative z-10" strokeWidth={1.5} />
      <p className="text-sm text-[var(--vegrin-green-700)] font-medium relative z-10">{label}</p>
      <p className="text-xs text-[var(--vegrin-green-600)] mt-2 relative z-10">Replace with actual screenshot</p>
    </div>
  );
}
