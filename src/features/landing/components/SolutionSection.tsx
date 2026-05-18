import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Check } from "lucide-react";
import { features } from "@/constants/landing";

export function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--vegrin-green-50)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)] border-[var(--vegrin-green-300)]">
            Solutions
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive Smart Agriculture Platform
          </h2>
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
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)]"
                  >
                    <Check className="w-3 h-3 mr-1" />
                    Real-time
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)]"
                  >
                    <Check className="w-3 h-3 mr-1" />
                    Accurate
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)]"
                  >
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
                  imageSrc={feature.image}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
