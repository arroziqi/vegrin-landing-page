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
  Mail,
  ArrowLeft,
  Sprout,
  Cpu,
  Code,
  Smartphone,
  Database,
  Sparkles,
  Award,
  Layers,
  Heart,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatarInitials: string;
  avatarGradient: string;
  roleIcon: React.ComponentType<any>;
  socials: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
    email?: string;
  };
}

const personInCharge: TeamMember = {
  name: "Ahmad Arroziqi",
  role: "Founder & Lead Architect",
  description: "Passionate about sustainable agriculture, machine learning, and building high-performance modern web & mobile systems. Led the initial design and full-stack development of the Vegrin smart farming system.",
  avatarInitials: "AA",
  avatarGradient: "from-emerald-500 to-green-700",
  roleIcon: Sprout,
  socials: {
    github: "https://github.com/Arroziqi",
    linkedin: "https://linkedin.com",
    portfolio: "https://ahmad-arroziqi.vercel.app/",
    email: "mailto:ahmadarroziqi@gmail.com",
  },
};

const productTeam: TeamMember[] = [
  {
    name: "Sofia Elena",
    role: "Product Manager",
    description: "Coordinates feature roadmaps and translates farmer feedback into intuitive, actionable product requirements.",
    avatarInitials: "SE",
    avatarGradient: "from-sky-400 to-blue-600",
    roleIcon: Layers,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sofia@vegrin.com",
    },
  },
  {
    name: "Marcus Thorne",
    role: "UX Lead",
    description: "Focuses on building elegant, accessible, and high-impact designs suited for agricultural workers on the field.",
    avatarInitials: "MT",
    avatarGradient: "from-purple-500 to-indigo-700",
    roleIcon: Heart,
    socials: {
      linkedin: "https://linkedin.com",
      portfolio: "https://portfolio.com",
      email: "mailto:marcus@vegrin.com",
    },
  },
  {
    name: "Yuki Tanaka",
    role: "Agronomist & ML Specialist",
    description: "Provides critical domain knowledge and botanical insights to train our AI disease classification models.",
    avatarInitials: "YT",
    avatarGradient: "from-amber-400 to-orange-600",
    roleIcon: Sprout,
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:yuki@vegrin.com",
    },
  },
  {
    name: "David Vance",
    role: "IoT Solutions Architect",
    description: "Designs the sensor arrays, firmware integrations, and ultra-low energy hardware nodes for real-time farm telemetry.",
    avatarInitials: "DV",
    avatarGradient: "from-teal-400 to-emerald-600",
    roleIcon: Cpu,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:david@vegrin.com",
    },
  },
  {
    name: "Zara Amin",
    role: "Data Analyst",
    description: "Analyzes seasonal weather trends, microclimates, and soil telemetry to deliver highly accurate recommendations to farmers.",
    avatarInitials: "ZA",
    avatarGradient: "from-pink-400 to-rose-600",
    roleIcon: TrendingUp,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:zara@vegrin.com",
    },
  },
];

const devTeam: TeamMember[] = [
  {
    name: "Leo Martinez",
    role: "Lead Mobile Developer",
    description: "Maintains and scales our React Native application, ensuring smooth performance and offline-first data caching.",
    avatarInitials: "LM",
    avatarGradient: "from-violet-400 to-fuchsia-600",
    roleIcon: Smartphone,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:leo@vegrin.com",
    },
  },
  {
    name: "Emily Zhao",
    role: "Backend & Cloud Engineer",
    description: "Architects fast serverless functions, database queries, and secure API gateways that handle massive IoT workloads.",
    avatarInitials: "EZ",
    avatarGradient: "from-cyan-400 to-blue-600",
    roleIcon: Database,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:emily@vegrin.com",
    },
  },
  {
    name: "Rajesh Kumar",
    role: "AI/ML Engineer",
    description: "Trains, evaluates, and deploys our deep learning models for accurate, millisecond plant disease detection.",
    avatarInitials: "RK",
    avatarGradient: "from-emerald-400 to-teal-600",
    roleIcon: ShieldCheck,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:rajesh@vegrin.com",
    },
  },
  {
    name: "Clara Dubois",
    role: "Frontend Engineer",
    description: "Specializes in building modern React web apps with fluid animations, responsiveness, and pixel-perfect design systems.",
    avatarInitials: "CD",
    avatarGradient: "from-orange-400 to-red-600",
    roleIcon: Code,
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      portfolio: "https://portfolio.com",
      email: "mailto:clara@vegrin.com",
    },
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
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          
          {/* Back Navigation & Page Header */}
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
                The Brains Behind Vegrin
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--vegrin-green-800)] via-[var(--vegrin-green-600)] to-[var(--vegrin-green-500)] bg-clip-text text-transparent">
                Meet Our Visionary Team
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                A multidisciplinary team of engineers, agronomists, and designers dedicated to building the future of sustainable, AI-driven agriculture.
              </p>
            </motion.div>
          </div>

          {/* Section 1: Person in Charge */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Award className="w-7 h-7 text-[var(--vegrin-green-600)] animate-pulse" />
                Person in Charge
              </h2>
              <div className="h-1 w-20 bg-[var(--vegrin-green-500)] mx-auto mt-3 rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-[var(--vegrin-green-200)] shadow-2xl p-8 md:p-12 hover:shadow-emerald-100/50 hover:shadow-3xl transition-all duration-300 group">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  
                  {/* Premium Spotlight Avatar */}
                  <div className="md:col-span-5 flex justify-center relative">
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--vegrin-green-500)] to-emerald-700 opacity-20 blur-3xl rounded-full" />
                      <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${personInCharge.avatarGradient} flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative border-4 border-white group-hover:border-[var(--vegrin-green-100)] transition-all`}>
                        {personInCharge.avatarInitials}
                        <div className="absolute -bottom-2 -right-2 bg-emerald-600 border-2 border-white text-white p-3 rounded-full shadow-lg">
                          <personInCharge.roleIcon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spotlight Info */}
                  <div className="md:col-span-7 space-y-6 text-center md:text-left">
                    <div>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold mb-2">
                        Project Leader
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-[var(--vegrin-green-700)] transition-colors">
                        {personInCharge.name}
                      </h3>
                      <p className="text-lg font-medium text-[var(--vegrin-green-600)] mt-1">
                        {personInCharge.role}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base">
                      {personInCharge.description}
                    </p>

                    {/* Social links */}
                    <div className="flex gap-4 justify-center md:justify-start">
                      {personInCharge.socials.github && (
                        <a
                          href={personInCharge.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] hover:border-[var(--vegrin-green-300)] transition-all duration-200 hover:scale-110"
                          title="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {personInCharge.socials.linkedin && (
                        <a
                          href={personInCharge.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] hover:border-[var(--vegrin-green-300)] transition-all duration-200 hover:scale-110"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {personInCharge.socials.portfolio && (
                        <a
                          href={personInCharge.socials.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] hover:border-[var(--vegrin-green-300)] transition-all duration-200 hover:scale-110"
                          title="Portfolio / Website"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                      {personInCharge.socials.email && (
                        <a
                          href={personInCharge.socials.email}
                          className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] hover:border-[var(--vegrin-green-300)] transition-all duration-200 hover:scale-110"
                          title="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </Card>
            </div>
          </motion.section>

          {/* Section 2: Product Team */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Layers className="w-7 h-7 text-[var(--vegrin-green-600)]" />
                Product Team
              </h2>
              <div className="h-1 w-20 bg-[var(--vegrin-green-500)] mx-auto mt-3 rounded-full" />
              <p className="text-gray-500 mt-3">Shaping features, analyzing trends, and bringing real value to our farm-users</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            >
              {productTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  className={`flex ${index === 4 && productTeam.length % 3 === 2 ? "sm:col-span-2 lg:col-span-1 lg:max-w-none" : ""}`}
                >
                  <Card className="w-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-[var(--vegrin-green-150)] p-6 shadow-xl hover:shadow-2xl hover:border-[var(--vegrin-green-400)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group">
                    <div className="space-y-5">
                      
                      {/* Avatar initial container */}
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white text-2xl font-bold shadow-md relative group-hover:scale-105 transition-transform duration-300`}>
                          {member.avatarInitials}
                          <div className="absolute -bottom-1 -right-1 bg-white border border-gray-100 p-1.5 rounded-lg text-[var(--vegrin-green-600)] shadow-sm">
                            <member.roleIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900 group-hover:text-[var(--vegrin-green-700)] transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-[var(--vegrin-green-600)]">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Social connections */}
                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.portfolio && (
                        <a
                          href={member.socials.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Section 3: Development Team */}
          <section className="mb-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Code className="w-7 h-7 text-[var(--vegrin-green-600)]" />
                Development Team
              </h2>
              <div className="h-1 w-20 bg-[var(--vegrin-green-500)] mx-auto mt-3 rounded-full" />
              <p className="text-gray-500 mt-3">Writing fast, scalable, and beautifully animated code to build robust tools</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {devTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  className="flex"
                >
                  <Card className="w-full rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border border-[var(--vegrin-green-150)] p-6 shadow-xl hover:shadow-2xl hover:border-[var(--vegrin-green-400)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group">
                    <div className="space-y-5">
                      
                      {/* Avatar initial container */}
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white text-2xl font-bold shadow-md relative group-hover:scale-105 transition-transform duration-300`}>
                          {member.avatarInitials}
                          <div className="absolute -bottom-1 -right-1 bg-white border border-gray-100 p-1.5 rounded-lg text-[var(--vegrin-green-600)] shadow-sm">
                            <member.roleIcon className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900 group-hover:text-[var(--vegrin-green-700)] transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm font-medium text-[var(--vegrin-green-600)]">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Social connections */}
                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.portfolio && (
                        <a
                          href={member.socials.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          className="p-2 rounded-lg bg-gray-50 border border-gray-150 text-gray-600 hover:bg-[var(--vegrin-green-50)] hover:text-[var(--vegrin-green-600)] transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
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
