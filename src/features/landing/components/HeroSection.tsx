import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import {
  Sprout,
  Smartphone,
  ArrowRight,
  FileText,
} from "lucide-react";

export function HeroSection() {
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
            Monitor plant health, detect diseases using AI, track farm
            conditions with IoT sensors, and get real-time weather predictions
            in one platform.
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
          className="flex flex-wrap justify-center items-center gap-2 mx-auto md:gap-6"
        >
          <ImagePlaceholder
            type="mobile"
            label="Mobile App Preview 1"
            aspectRatio="416.35/849.04"
            className="w-[90px] md:w-[275px]"
            imageSrc="/images/result.png"
          />

          <ImagePlaceholder
            type="mobile"
            label="Mobile App Preview 2"
            aspectRatio="416.35/849.04"
            className="w-[100px] md:w-[300px]"
            imageSrc="/images/home.png"
          />

          <ImagePlaceholder
            type="mobile"
            label="Mobile App Preview 3"
            aspectRatio="416.35/849.04"
            className="w-[90px] md:w-[275px]"
            imageSrc="/images/iot.png"
          />
        </motion.div>
      </div>
    </section>
  );
}
