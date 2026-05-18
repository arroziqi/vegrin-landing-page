import {
  AlertTriangle,
  MapPin,
  CloudOff,
  GraduationCap,
  Brain,
  Wifi,
  CloudRain,
  Smartphone,
  Layers,
  Database,
  Server,
  Code2,
  Container,
} from "lucide-react";

export const problems = [
  {
    icon: AlertTriangle,
    title: "Late Disease Detection",
    description:
      "Traditional methods detect plant diseases too late, resulting in significant crop losses and reduced yield.",
  },
  {
    icon: MapPin,
    title: "Manual Land Monitoring",
    description:
      "Time-consuming manual inspection of large farmlands is inefficient and prone to human error.",
  },
  {
    icon: CloudOff,
    title: "Weather Uncertainty",
    description:
      "Lack of accurate, localized weather predictions makes planning and resource allocation difficult.",
  },
  {
    icon: GraduationCap,
    title: "Limited Educational Resources",
    description:
      "Farmers lack access to modern agricultural knowledge and best practices for crop management.",
  },
];

export const features = [
  {
    icon: Brain,
    title: "AI Plant Disease Detection",
    description:
      "Advanced AI powered by Gemini analyzes plant images to detect diseases early with 95% accuracy. Get instant diagnosis and treatment recommendations.",
    image: "/images/scan-ai.png",
  },
  {
    icon: Wifi,
    title: "IoT Monitoring",
    description:
      "Real-time monitoring of soil moisture, temperature, humidity, and other critical parameters through connected sensors across your farm.",
    image: "/images/iot-dashboard.png",
  },
  {
    icon: CloudRain,
    title: "Weather & Content Hub",
    description:
      "Stay updated with hyperlocal weather forecasts while accessing farming guides, best practices, and expert educational content tailored to your agricultural needs.",
    image: "/images/weather-news.png",
  },
];

export const techStack = [
  { name: "React Native", icon: Code2, category: "Mobile" },
  { name: "Expo", icon: Smartphone, category: "Mobile" },
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "Redux Toolkit", icon: Layers, category: "State" },
  { name: "TanStack Query", icon: Database, category: "Data" },
  { name: "Gemini AI", icon: Brain, category: "AI" },
  { name: "IoT Sensors", icon: Wifi, category: "Hardware" },
  { name: "Google Cloud", icon: Server, category: "Cloud" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "MySQL", icon: Database, category: "Database" },
];
