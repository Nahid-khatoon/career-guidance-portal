import React from 'react';
import {
  Code,
  BarChart3,
  Palette,
  ShieldCheck,
  Stethoscope,
  Building2,
  GraduationCap,
  Megaphone,
  TrendingUp,
  Landmark,
  Rocket,
  Sparkles,
  Cpu,
  Wrench,
  DollarSign,
  BookOpen,
  Hammer,
  Code2,
  MessagesSquare,
  BrainCircuit,
  Lightbulb,
  Users,
  Laptop,
  Compass,
  Search,
  FolderGit2,
  FileText,
  Send,
  HelpCircle,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

const iconRegistry: Record<string, React.ComponentType<LucideProps>> = {
  Code,
  BarChart3,
  Palette,
  ShieldCheck,
  Stethoscope,
  Building2,
  GraduationCap,
  Megaphone,
  TrendingUp,
  Landmark,
  Rocket,
  Sparkles,
  Cpu,
  Wrench,
  DollarSign,
  BookOpen,
  Hammer,
  Code2,
  MessagesSquare,
  BrainCircuit,
  Lightbulb,
  Users,
  Laptop,
  Compass,
  Search,
  FolderGit2,
  FileText,
  Send
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconRegistry[name] || HelpCircle;
  return <IconComponent {...props} />;
};
