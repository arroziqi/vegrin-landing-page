import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Sprout, Wrench, ArrowLeft, Clock, RefreshCw } from "lucide-react";

interface MaintenancePageProps {
  onBackToHome?: () => void;
}

export function MaintenancePage({ onBackToHome }: MaintenancePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--vegrin-green-50)] to-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full relative z-10"
      >
        <Card className="p-12 bg-white/80 backdrop-blur-sm border-[var(--vegrin-green-200)] shadow-xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--vegrin-green-500)] opacity-20 blur-2xl rounded-full" />
                <Sprout className="w-20 h-20 text-[var(--vegrin-green-600)] relative z-10" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-[var(--vegrin-green-600)]" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                We're Currently Improving Vegrin
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The application is temporarily unavailable while we improve the experience.
              We're adding new features and enhancing performance.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
              <Card className="p-6 bg-gradient-to-br from-[var(--vegrin-green-50)] to-white border-[var(--vegrin-green-200)]">
                <RefreshCw className="w-8 h-8 text-[var(--vegrin-green-600)] mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Platform Updates</h3>
                <p className="text-sm text-gray-600">Upgrading core systems</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--vegrin-green-50)] to-white border-[var(--vegrin-green-200)]">
                <Sprout className="w-8 h-8 text-[var(--vegrin-green-600)] mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">New Features</h3>
                <p className="text-sm text-gray-600">Enhanced AI capabilities</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--vegrin-green-50)] to-white border-[var(--vegrin-green-200)]">
                <Clock className="w-8 h-8 text-[var(--vegrin-green-600)] mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">Back Soon</h3>
                <p className="text-sm text-gray-600">Expected completion soon</p>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <ImagePlaceholder
              type="screenshot"
              label="Maintenance Illustration"
              aspectRatio="21/9"
              className="max-w-2xl mx-auto"
            />
          </div>

          <div className="text-center space-y-4">
            <Button
              size="lg"
              variant="vegrin"
              onClick={onBackToHome}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Button>

            <p className="text-sm text-gray-500">
              Thank you for your patience. Follow us for updates.
            </p>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need immediate support?{" "}
            <a href="mailto:support@vegrin.com" className="text-[var(--vegrin-green-600)] hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
