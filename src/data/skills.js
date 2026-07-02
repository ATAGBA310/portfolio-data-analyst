import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { BarChart3, Database, FileSpreadsheet } from "lucide-react";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Matplotlib", icon: BarChart3 },
  { name: "Seaborn", icon: BarChart3 },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default skills;