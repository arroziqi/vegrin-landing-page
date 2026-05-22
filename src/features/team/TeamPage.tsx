import { motion, Variants } from "motion/react";
import { useNavigate } from "react-router";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Globe,
  Instagram,
  ArrowLeft,
  Users,
  Code,
  Briefcase,
  Crown,
  Sparkles,
  ShieldCheck,
  Layers,
  MonitorSmartphone,
  BrainCircuit,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatarInitials: string;
  avatarGradient: string;
  roleIcon: React.ComponentType<any>;
  socials?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
    instagram?: string;
  };
}

const personInCharge: TeamMember = {
  name: "Pak Widang",
  role: "Project Supervisor",
  description:
    "Guiding and supervising the Vegrin project development process while ensuring the vision, execution, and collaboration across all divisions run effectively.",
  avatarInitials: "PW",
  avatarGradient: "from-emerald-500 to-green-700",
  roleIcon: Crown,
};

const productTeam: TeamMember[] = [
  {
    name: "Stiefanny",
    role: "Product Team",
    description:
      "Contributes to product planning, user experience discussions, and feature validation for the Vegrin ecosystem.",
    avatarInitials: "ST",
    avatarGradient: "from-pink-400 to-rose-600",
    roleIcon: Briefcase,
  },
  {
    name: "Aflah",
    role: "Product Team",
    description:
      "Supports product ideation and helps align platform capabilities with real-world agricultural needs.",
    avatarInitials: "AF",
    avatarGradient: "from-sky-400 to-blue-600",
    roleIcon: Layers,
  },
  {
    name: "Yusuf",
    role: "Product Team",
    description:
      "Focused on feature evaluation, collaboration, and ensuring product usability for end users.",
    avatarInitials: "YS",
    avatarGradient: "from-orange-400 to-amber-600",
    roleIcon: Users,
  },
  {
    name: "Alyssa",
    role: "Product Team",
    description:
      "Helps shape the product experience and contributes to the strategic direction of Vegrin.",
    avatarInitials: "AL",
    avatarGradient: "from-violet-400 to-purple-600",
    roleIcon: Sparkles,
  },
];

const devTeam: TeamMember[] = [
  {
    name: "Adit",
    role: "Tech Lead",
    description:
      "Leads the technical architecture and coordinates development workflows across the engineering team.",
    avatarInitials: "AD",
    avatarGradient: "from-cyan-400 to-blue-600",
    roleIcon: ShieldCheck,
  },
  {
    name: "Ahmad Arroziqi (Ozi)",
    role: "Frontend Developer",
    description:
      "Builds modern, responsive, and interactive frontend interfaces with a focus on performance and user experience.",
    avatarInitials: "AA",
    avatarGradient: "from-emerald-400 to-teal-600",
    roleIcon: MonitorSmartphone,
    socials: {
      github: "https://github.com/Arroziqi",
      linkedin: "https://www.linkedin.com/in/ahmad-arroziqi-5a0566274/",
      portfolio: "https://ahmad-arroziqi.vercel.app/",
      instagram: "https://www.instagram.com/ahmad_arroziqi",
    },
  },
  {
    name: "Kristian",
    role: "AI Developer",
    description:
      "Develops and improves AI-driven systems, intelligent automation, and smart agricultural insights.",
    avatarInitials: "KR",
    avatarGradient: "from-fuchsia-400 to-pink-600",
    roleIcon: BrainCircuit,
  },
  {
    name: "Hafiz",
    role: "Backend Developer",
    description:
      "Handles backend systems, APIs, authentication, and scalable infrastructure integrations.",
    avatarInitials: "HF",
    avatarGradient: "from-orange-400 to-red-600",
    roleIcon: Code,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

export function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[var(--vegrin-green-50)] to-white flex flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Navbar />

      <main className="flex-grow pt-28 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <Button
              variant="vegrin-outline"
              size="sm"
              onClick={() => navigate("/")}
              className="mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Button>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="mb-4 bg-[var(--vegrin-green-100)] text-[var(--vegrin-green-700)] border-[var(--vegrin-green-300)]">
                <Sparkles className="w-3 h-3 mr-1" />
                Meet The Team
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--vegrin-green-800)] via-[var(--vegrin-green-600)] to-[var(--vegrin-green-500)] bg-clip-text text-transparent">
                Vegrin Team
              </h1>

              <p className="text-lg md:text-xl text-gray-600">
                The people behind the development, innovation, and vision of
                Vegrin smart agriculture platform.
              </p>
            </motion.div>
          </div>

          {/* Penanggung Jawab */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Crown className="w-7 h-7 text-[var(--vegrin-green-600)]" />
                Project Supervisor
              </h2>

              <div className="h-1 w-20 bg-[var(--vegrin-green-500)] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-[var(--vegrin-green-200)] shadow-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Illustration Avatar */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-700 opacity-20 blur-3xl rounded-full" />

                      <div
                        className={`w-48 h-48 rounded-full bg-gradient-to-br ${personInCharge.avatarGradient} flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative border-4 border-white`}
                      >
                        {personInCharge.avatarInitials}

                        <div className="absolute -bottom-2 -right-2 bg-white text-[var(--vegrin-green-600)] p-3 rounded-full shadow-lg">
                          <personInCharge.roleIcon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 text-center md:text-left space-y-5">
                    <div>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-3">
                        Supervisor
                      </Badge>

                      <h3 className="text-3xl font-bold text-gray-900">
                        {personInCharge.name}
                      </h3>

                      <p className="text-lg font-medium text-[var(--vegrin-green-600)]">
                        {personInCharge.role}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {personInCharge.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.section>

          {/* Product Team */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Product Team</h2>

              <div className="h-1 w-20 bg-[var(--vegrin-green-500)] mx-auto mt-3 rounded-full" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {productTeam.map((member) => (
                <motion.div key={member.name} variants={cardVariants}>
                  <Card className="rounded-2xl bg-white/70 backdrop-blur-sm border border-[var(--vegrin-green-150)] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white text-2xl font-bold relative`}
                        >
                          {member.avatarInitials}

                          <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-lg text-[var(--vegrin-green-600)] shadow-sm">
                            <member.roleIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900">
                            {member.name}
                          </h3>

                          <p className="text-sm text-[var(--vegrin-green-600)] font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Developer Team */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Development Team
              </h2>

              <div className="h-1 w-20 bg-[var(--vegrin-green-500)] mx-auto mt-3 rounded-full" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {devTeam.map((member) => (
                <motion.div key={member.name} variants={cardVariants}>
                  <Card className="rounded-2xl bg-white/70 backdrop-blur-sm border border-[var(--vegrin-green-150)] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-between">
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white text-2xl font-bold relative`}
                        >
                          {member.avatarInitials}

                          <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-lg text-[var(--vegrin-green-600)] shadow-sm">
                            <member.roleIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900">
                            {member.name}
                          </h3>

                          <p className="text-sm text-[var(--vegrin-green-600)] font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* socials */}
                    {member.socials && (
                      <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-gray-50 border text-gray-600 hover:text-[var(--vegrin-green-600)]"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-gray-50 border text-gray-600 hover:text-[var(--vegrin-green-600)]"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}

                        {member.socials.portfolio && (
                          <a
                            href={member.socials.portfolio}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-gray-50 border text-gray-600 hover:text-[var(--vegrin-green-600)]"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}

                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-gray-50 border text-gray-600 hover:text-[var(--vegrin-green-600)]"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
