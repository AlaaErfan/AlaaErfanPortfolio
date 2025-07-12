import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, Brain, Heart, Shield, Code } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Rosheta - Medical OCR',
      description: 'Advanced OCR system for Egyptian medical prescriptions with drug alternative suggestions. Features multiple AI pipelines for preprocessing, English and Arabic handwritten text recognition, and NLP-based autocorrection.',
      category: 'Graduation Project',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Hugging Face', 'NLP', 'OCR'],
      features: [
        'Multi-pipeline architecture (preprocessing, English, Arabic)',
        '8+ specialized models for different tasks',
        'Handwritten OCR for both English and Arabic',
        'Autocorrection and spelling correction algorithms'
      ],
      icon: Brain,
      status: 'Completed'
    },
    {
      title: 'Face Mask Detection',
      description: 'Real-time computer vision system for detecting face mask compliance. Automatically identifies whether individuals are wearing masks to facilitate safety protocol enforcement.',
      category: 'Computer Vision',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
      features: [
        'Real-time face mask detection',
        'High accuracy classification',
        'Safety protocol enforcement',
        'Optimized for various lighting conditions'
      ],
      icon: Shield,
      status: 'Completed',
      github: 'https://github.com/AlaaErfan/Face_Mask_detection'
    },
    {
      title: 'Telecom Customer Churn Analysis',
      description: 'Comprehensive data science project analyzing customer churn patterns in telecommunications. Utilizes machine learning techniques to predict customer retention and identify key factors.',
      category: 'Data Science',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
      features: [
        'Customer behavior analysis',
        'Churn prediction models',
        'Feature importance identification',
        'Interactive data visualizations'
      ],
      icon: Code,
      status: 'Completed',
      github: 'https://github.com/AlaaErfan/CodeClause-DataScience/blob/main/Telcom-Customer-Chrun/Telcom-Customer-Chrun.ipynb'
    },
    {
      title: 'Mental Health Chatbot',
      description: 'AI-powered chatbot designed to provide mental health support and resources. Uses natural language processing to understand user concerns and provide appropriate responses and guidance.',
      category: 'NLP & AI',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Chatbot Development'],
      features: [
        'Natural language understanding',
        'Mental health resource provision',
        'Empathetic response generation',
        'Non-judgmental environment'
      ],
      icon: Heart,
      status: 'Completed',
      github: 'https://github.com/AlaaErfan/ChatBotMentalHealth'
    },
    {
      title: 'Sign Language Translator',
      description: 'Real-time sign language recognition system using LSTM and webcam, with speech output. Converts sign gestures to text and voice for accessibility support.',
      category: 'Computer Vision & Accessibility',
      technologies: ['Python', 'OpenCV', 'LSTM', 'gTTS', 'Tkinter'],
      features: [
        'Real-time gesture recognition from webcam',
        'Sign-to-text and speech conversion',
        'Text-to-speech integration using gTTS',
        'GUI-based user interaction with live feed'
      ],
      icon: Code,
      status: 'Completed',
      github: '#'
    },
    {
      title: 'Digital Meter Reading System',
      description: 'OCR-based system to extract readings from industrial digital meters. Includes QR detection, Streamlit frontend, FastAPI backend, and Azure AI Vision integration.',
      category: 'AI & Industry Automation',
      technologies: ['Python', 'Streamlit', 'FastAPI', 'Azure AI Vision', 'OCR'],
      features: [
        'OCR for digital display reading',
        'QR code detection for meter ID',
        'FastAPI backend and Streamlit UI',
        'Azure Form Recognizer integration'
      ],
      icon: Brain,
      status: 'Completed',
      github: '#'
    },
    {
      title: 'PDF to Word Converter',
      description: 'Automates conversion of structured PDFs (e.g., contracts, licenses) into editable Word documents using Azure Form Recognizer.',
      category: 'Document AI',
      technologies: ['Python', 'FastAPI', 'Azure Document Intelligence', 'Streamlit'],
      features: [
        'PDF parsing and structured extraction',
        'Word document auto-generation',
        'Streamlit-based upload interface',
        'Supports Arabic and English documents'
      ],
      icon: Code,
      status: 'Completed',
      github: '#'
    },
    {
      title: 'RAG-Based Customer Service Chatbot',
      description: 'Retrieval-Augmented Generation chatbot built for product support and guidance using LangChain, vector databases, and FastAPI backend.',
      category: 'LLM & Chatbots',
      technologies: ['LangChain', 'FastAPI', 'Vector DB', 'Python'],
      features: [
        'Hybrid retrieval + generation pipeline',
        'Custom document search and response',
        'Vector-based memory of past chats',
        'Supports long conversations and reranking'
      ],
      icon: Brain,
      status: 'In Progress',
      github: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Featured Projects</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovative AI and data science projects showcasing technical expertise and problem-solving skills
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden"
                >
                  <div className="p-6 border-b border-zinc-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-500 p-2 rounded-lg">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">{project.category}</span>
                          <h2 className="text-xl font-bold text-white">{project.title}</h2>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="font-semibold text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-white mb-3">Key Features</h3>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                These projects represent just a glimpse of what's possible with AI and modern technology. 
                Let's collaborate to build something extraordinary together.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Let's Build Together
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;