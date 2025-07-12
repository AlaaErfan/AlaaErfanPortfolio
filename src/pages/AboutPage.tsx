import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const AboutPage: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI Engineering',
      description: 'Expert in computer vision, OCR, LLMs, and deploying intelligent systems to solve real-world problems'
    },
    {
      icon: Code2,
      title: 'Backend & APIs',
      description: 'Specialized in FastAPI, Flask, and scalable backend architecture integrated with AI'
    },
    {
      icon: Database,
      title: 'Data & Analysis',
      description: 'From Excel and Power BI to AI-based analytics, transforming raw data into insights and dashboards'
    }
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'El Sheikh Zayed, Giza, Egypt',
      description: 'Open to remote opportunities and global collaborations'
    },
    {
      icon: Calendar,
      label: 'Age',
      value: '23 Years Old',
      description: 'Driven and energetic professional focused on innovation'
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Sc. in Computer Science',
      description: 'Graduated from Helwan University (2020–2024)'
    },
    {
      icon: Briefcase,
      label: 'Current Role',
      value: 'AI Engineer at Dorra Group',
      description: 'Developing AI solutions for identity, access, and chatbot automation'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AI Engineer | Backend Developer | Problem Solver | Lifelong Learner
            </p>
          </motion.div>

          {/* Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {personalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 text-center">
                  <Icon size={32} className="text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                  <p className="text-blue-400 font-medium mb-2">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Full Stack AI Engineer
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate 23-year-old AI Engineer based in Giza, Egypt, working at Dorra Group. 
                    My focus is on building AI-powered systems for OCR, identity extraction, chatbot automation, and smart access control.
                  </p>

                  <p>
                    My tech journey started at Helwan University, where I studied Computer Science and led several academic and extracurricular projects in AI and data science. 
                    I’ve also earned certifications from IBM, Google, and DeepLearning.AI in AI engineering, analytics, and digital business.
                  </p>

                  <p>
                    I bridge backend engineering and AI, using tools like FastAPI, Flask, and Azure AI. My goal is to create seamless AI services that solve business problems at scale.
                  </p>

                  <p>
                    Whether it's reading handwritten prescriptions, analyzing ID cards, or deploying LLM-based agents, I love taking on challenges that push AI beyond the lab into real life.
                  </p>

                  <p>
                    I stay updated by reading papers, contributing to open-source, and sharing my knowledge. I'm especially interested in GenAI, computer vision, and learning systems that adapt over time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 p-3 rounded-lg">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* What Drives Me */}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-4">What Drives Me</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pushing AI to production and solving real-world problems</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Designing fast, reliable, and scalable backend services</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Learning cutting-edge AI and sharing it with others</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Creating tools that blend intelligence and usability</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
