import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/constants/landing";

export function TechStackSection() {
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
