import homeCreditImage from "../assets/images/home-credit-boxplot.png";
import ecommerceImage from "../assets/images/ecommerce-funnel.png";
import retailPipelineImage from "../assets/images/retail-data-engineering-dashboard.png";

const projects = [
  {
    id: 1,
    category: "BANKING",
    title: "Home Credit Default Risk Analysis",
    description:
      "Analyse exploratoire du risque de défaut de paiement à partir d'un dataset bancaire de plus de 307 000 demandes de crédit.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github:
      "https://github.com/ATAGBA310/home-credit-default-risk-analysis",
    presentation: "/documents/home-credit-presentation.pdf",
    image: homeCreditImage,
  },
  {
    id: 2,
    category: "E-COMMERCE",
    title: "E-commerce User Behavior Analysis",
    description:
      "Analyse du comportement utilisateur, du tunnel de conversion et des catégories performantes à partir de données e-commerce.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github:
      "https://github.com/ATAGBA310/ecommerce-user-behavior-analysis",
    presentation: "/documents/ecommerce-presentation.pdf",
    image: ecommerceImage,
  },
  {
    id: 3,
    category: "DATA ENGINEERING",
    title: "Retail Data Engineering Pipeline",
    description:
      "Conception d'un pipeline ETL automatisé pour intégrer des données CSV/XML, appliquer des contrôles qualité, alimenter une base SQLite, créer un dashboard Power BI et automatiser l'exécution sur AWS EC2 avec cron.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "SQLite",
      "Power BI",
      "AWS EC2",
      "Git",
      "GitHub",
      "Cron",
    ],
    github:
      "https://github.com/ATAGBA310/retail-data-engineering-pipeline",
    presentation: "/documents/Presentation_Lerouge_Moulin.pdf",
    image: retailPipelineImage,
  },
];

export default projects;