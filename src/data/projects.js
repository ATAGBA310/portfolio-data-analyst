import homeCreditImage from "../assets/images/home-credit-boxplot.png";
import ecommerceImage from "../assets/images/ecommerce-funnel.png";

const projects = [
  {
    id: 1,
    category: "BANKING",
    title: "Home Credit Default Risk Analysis",
    description:
      "Analyse exploratoire du risque de défaut de paiement à partir d'un dataset bancaire de plus de 307 000 demandes de crédit.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/ATAGBA310/home-credit-default-risk-analysis",
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
    github: "https://github.com/ATAGBA310/ecommerce-user-behavior-analysis",
    presentation: "/documents/ecommerce-presentation.pdf",
    image: ecommerceImage,
  },
];

export default projects;