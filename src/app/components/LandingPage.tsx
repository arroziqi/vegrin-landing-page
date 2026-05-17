import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImagePlaceholder } from "./ImagePlaceholder";
import {
  Sprout,
  Brain,
  Wifi,
  CloudRain,
  BookOpen,
  AlertTriangle,
  MapPin,
  CloudOff,
  GraduationCap,
  Github,
  FileText,
  Mail,
  Smartphone,
  Activity,
  Database,
  Server,
  Code2,
  Layers,
  Container,
  ArrowRight,
  Check,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <ProblemSection />
        <SolutionSection />
      </div>
      <div id="showcase">
        <ProductShowcaseSection />
      </div>
      <div id="technology">
        <TechStackSection />
      </div>
      <div id="documentation">
        <MaintenanceCTASection />
      </div>
      <Footer />
    </div>
  );
}

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--vegrin-green-50)] to-white pt-20 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)] border-[var(--vegrin-green-300)]">
            <Sprout className="w-3 h-3 mr-1" />
            AI-Powered Smart Agriculture
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--vegrin-green-700)] via-[var(--vegrin-green-600)] to-[var(--vegrin-green-500)] bg-clip-text text-transparent">
            Smarter Farming Starts with Better Monitoring
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Monitor plant health, detect diseases using AI, track farm conditions with IoT sensors,
            and get real-time weather predictions in one platform.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button
              size="lg"
              variant="vegrin"
              onClick={() => navigate("/maintenance")}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Try Vegrin App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="vegrin-outline">
              <FileText className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          <ImagePlaceholder
            type="mobile"
            label="Mobile App Preview"
            aspectRatio="9/16"
            className="h-[600px]"
          />
          <div className="space-y-6">
            <ImagePlaceholder
              type="dashboard"
              label="Dashboard Overview"
              aspectRatio="16/9"
            />
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-[var(--vegrin-green-50)] to-white border-[var(--vegrin-green-200)]">
                <CardHeader className="pb-3">
                  <Brain className="w-8 h-8 text-[var(--vegrin-green-600)] mb-2" />
                  <CardTitle className="text-base">AI Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">95% accuracy</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-[var(--vegrin-green-50)] to-white border-[var(--vegrin-green-200)]">
                <CardHeader className="pb-3">
                  <Activity className="w-8 h-8 text-[var(--vegrin-green-600)] mb-2" />
                  <CardTitle className="text-base">Real-time IoT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">24/7 monitoring</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Late Disease Detection",
      description: "Traditional methods detect plant diseases too late, resulting in significant crop losses and reduced yield.",
    },
    {
      icon: MapPin,
      title: "Manual Land Monitoring",
      description: "Time-consuming manual inspection of large farmlands is inefficient and prone to human error.",
    },
    {
      icon: CloudOff,
      title: "Weather Uncertainty",
      description: "Lack of accurate, localized weather predictions makes planning and resource allocation difficult.",
    },
    {
      icon: GraduationCap,
      title: "Limited Educational Resources",
      description: "Farmers lack access to modern agricultural knowledge and best practices for crop management.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-50 text-red-700 border-red-200">Challenges</Badge>
          <h2 className="text-4xl font-bold mb-4">The Problems Farmers Face Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern agriculture requires modern solutions to overcome traditional challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <problem.icon className="w-10 h-10 text-red-500 mb-4" />
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{problem.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Plant Disease Detection",
      description: "Advanced AI powered by Gemini analyzes plant images to detect diseases early with 95% accuracy. Get instant diagnosis and treatment recommendations.",
      image: "AI Scan Result",
    },
    {
      icon: Wifi,
      title: "IoT Monitoring",
      description: "Real-time monitoring of soil moisture, temperature, humidity, and other critical parameters through connected sensors across your farm.",
      image: "IoT Dashboard",
    },
    {
      icon: CloudRain,
      title: "Weather Forecast",
      description: "Hyperlocal weather predictions with hourly updates. Plan irrigation, harvesting, and other activities with confidence.",
      image: "Weather Dashboard",
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Access a comprehensive library of farming guides, best practices, and expert advice to improve your agricultural knowledge.",
      image: "Education Page",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--vegrin-green-50)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)] border-[var(--vegrin-green-300)]">
            Solutions
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Comprehensive Smart Agriculture Platform</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to monitor, manage, and optimize your farm
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <feature.icon className="w-12 h-12 text-[var(--vegrin-green-600)] mb-4" />
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)]">
                    <Check className="w-3 h-3 mr-1" />
                    Real-time
                  </Badge>
                  <Badge variant="secondary" className="bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)]">
                    <Check className="w-3 h-3 mr-1" />
                    Accurate
                  </Badge>
                  <Badge variant="secondary" className="bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)]">
                    <Check className="w-3 h-3 mr-1" />
                    Easy to Use
                  </Badge>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <ImagePlaceholder
                  type={index === 0 ? "mobile" : "dashboard"}
                  label={feature.image}
                  aspectRatio={index === 0 ? "9/16" : "16/9"}
                  className={index === 0 ? "h-[500px]" : ""}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcaseSection() {
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

function TechStackSection() {
  const techStack = [
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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Technology</Badge>
          <h2 className="text-4xl font-bold mb-4">Built with Modern Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies for reliability, scalability, and performance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-md transition-shadow border-gray-200 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <tech.icon className="w-10 h-10 text-[var(--vegrin-green-600)] mb-3" />
                  <p className="font-medium mb-1">{tech.name}</p>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MaintenanceCTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-[var(--vegrin-green-600)] to-[var(--vegrin-green-700)] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Platform Status</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vegrin App is Currently Under Maintenance
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We're improving the platform and adding new features. Thank you for your patience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[var(--vegrin-green-700)] hover:bg-transparent hover:border-white border-2 hover:text-white active:bg-gray-100 shadow-lg"
              onClick={() => navigate("/maintenance")}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Try App
            </Button>
            <a href="https://github.com/Arroziqi/mobile-vegrin.git" target="blank">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--vegrin-green-700)] active:bg-white/20"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--vegrin-dark)] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-6 h-6 text-[var(--vegrin-green-500)]" />
              <span className="text-xl font-bold text-white">Vegrin</span>
            </div>
            <p className="text-sm text-gray-400">
              AI-powered smart agriculture platform for modern farming
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-[var(--vegrin-green-400)] transition-colors">Features</a></li>
              <li><a href="#tech" className="hover:text-[var(--vegrin-green-400)] transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-[var(--vegrin-green-400)] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@vegrin.com" className="hover:text-[var(--vegrin-green-400)] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@vegrin.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--vegrin-green-400)] transition-colors">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Vegrin. All rights reserved. Built with passion for sustainable agriculture.</p>
        </div>
      </div>
    </footer>
  );
}
