import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sprout, Wrench, ArrowLeft, Clock, RefreshCw } from "lucide-react";

import { MaintenancePageProps } from "@/types";
import { AnimatedMaintenanceIllustration } from "@/components/shared/AnimatedMaintenanceIllustration";

export function MaintenancePage({ onBackToHome }: MaintenancePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--vegrin-green-50)] to-white flex items-center justify-center px-6 py-12">
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full relative z-10"
      >
        <Card className="rounded-3xl p-8 md:p-12 bg-white/80 backdrop-blur-sm border border-[var(--vegrin-green-200)] shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--vegrin-green-500)] opacity-20 blur-2xl rounded-full" />

                <Sprout className="w-20 h-20 text-[var(--vegrin-green-600)] relative z-10" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-[var(--vegrin-green-600)]" />

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                We're Improving Vegrin
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our platform is temporarily unavailable while we enhance
              performance, improve infrastructure, and introduce smarter AI
              farming features.
            </p>
          </div>

          {/* Feature Status Row */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--vegrin-green-200)] px-6 py-5 text-center">
              <RefreshCw className="w-7 h-7 text-[var(--vegrin-green-600)] mb-3 mx-auto" />

              <h3 className="font-semibold text-gray-900">Platform Updates</h3>

              <p className="text-sm text-gray-600 mt-1">
                Upgrading core systems
              </p>
            </div>

            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--vegrin-green-200)] px-6 py-5 text-center">
              <Sprout className="w-7 h-7 text-[var(--vegrin-green-600)] mb-3 mx-auto" />

              <h3 className="font-semibold text-gray-900">New Features</h3>

              <p className="text-sm text-gray-600 mt-1">
                Enhanced AI capabilities
              </p>
            </div>

            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--vegrin-green-200)] px-6 py-5 text-center">
              <Clock className="w-7 h-7 text-[var(--vegrin-green-600)] mb-3 mx-auto" />

              <h3 className="font-semibold text-gray-900">Back Soon</h3>

              <p className="text-sm text-gray-600 mt-1">
                Expected completion soon
              </p>
            </div>
          </div>

          {/* Illustration Hero */}
          <div className="mb-12">
            <div className="rounded-3xl overflow-hidden border border-[var(--vegrin-green-200)] bg-gradient-to-br from-[var(--vegrin-green-50)] via-white to-[var(--vegrin-green-50)] p-8 md:p-12">
              <AnimatedMaintenanceIllustration />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <Button size="lg" variant="vegrin" onClick={onBackToHome}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Button>

            <p className="text-sm text-gray-500">
              Thank you for your patience while we improve your farming
              experience.
            </p>
          </div>
        </Card>

        {/* Footer Contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need immediate support?{" "}
            <a
              href="mailto:ahmadarroziqi@gmail.com"
              className="text-[var(--vegrin-green-600)] hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
