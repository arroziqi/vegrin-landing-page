import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, FileText } from "lucide-react";

export function MaintenanceCTASection() {
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
