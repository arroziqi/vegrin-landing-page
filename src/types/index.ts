export interface ImagePlaceholderProps {
  type?: "mobile" | "desktop" | "dashboard" | "screenshot";
  label?: string;
  className?: string;
  aspectRatio?: string;
  imageSrc?: string;
}

export interface MaintenancePageProps {
  onBackToHome?: () => void;
}
