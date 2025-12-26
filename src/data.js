import HeroImage from "/assets/photo_profile.png";

const Image = {
  HeroImage,
};

export default Image;

import Proyek1 from "/assets/proyek/1.png";
import Proyek2 from "/assets/proyek/2.png";
import Proyek3 from "/assets/proyek/3.png";
import Proyek4 from "/assets/proyek/4.png";
import Proyek5 from "/assets/proyek/5.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "User Segmentation",
    desk: "Cleaned the data and performed RFM segmentation in Google Colab using Python, summarized the results with a pivot table, and visualized unique customers per segment with a bar chart to support targeted retention and marketing.",
    date: "November 2025",
    tools: ["Python", "Google Colab", "Google Drive", "CSV"],
    link: "https://github.com/panicia16/Data-Analysis/blob/main/User_Segmentation.ipynb",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "User Retention Analysis",
    desk: "Performed RFM segmentation using Python (Pandas, NumPy, DateTime, Seaborn) in Google Colab to classify users by recency, frequency, and monetary value for more targeted retention and marketing strategies.",
    date: "October 2025",
    tools: ["Python", "Google Colab", "Google Drive", "CSV"],
    link: "https://github.com/panicia16/Data-Analysis/blob/main/User_Retention_Analysis.ipynb",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "E-Commerce Website “Etreese”",
    desk: "A web-based e-commerce platform developed using the SDLC methodology for UMKM Etreese. The project was carried out as a team. Before development, I designed the UI using Figma as the blueprint. I was responsible for developing the frontend and backend of the admin dashboard, which includes the orders, products, sales, and stock modules. After development, I also performed functional testing to ensure that all features worked properly and met user requirements.",
    date: "February 2025 - June 2025",
    tools: ["HTML5", "CSS3", "Bootstrap5", "Laravel", "Laragon", "Supabase (Database)", "Hostinger (Domain)", "Nusa.id (Hosting)", "Visual Studio Code", "Figma", "PostgreSQL"],
    link: "https://github.com/melfanny/Etreese2",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Fashion “Pomefiore”",
    desk: "Pomefiore is a fashion e-commerce website designed to help customers explore and purchase a variety of the latest women's fashion products. This project was developed collaboratively within a team, where each member contributed to different parts of the system. I was responsible for both frontend and backend development, particularly for the All Product, Product Detail, Contact Us, Cart, and Checkout pages. The development focused on creating a smooth shopping experience with a responsive and user-friendly design.",
    date: "November 2024 - December 2024",
    tools: ["HTML", "CSS", "AngularJS", "Bootstrap5", "MongoDB", "Visual Studio Code"],
    link: "https://github.com/IreneCarlLewis/Simple-Fashion-Shop",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Life Style “Clean Bites”",
    desk: "This project was developed collaboratively within a team. Each member had their own responsibilities to ensure the website was completed efficiently and with high quality. I contributed as the frontend developer for the News, Article, About Us, and Footer sections. Through this collaboration, we successfully built a responsive and well-structured lifestyle website.",
    date: "September 2024 - October 2024",
    tools: ["HTML", "CSS", "Javascript", "Visual Studioi Code"],
    link: "https://github.com/melfanny/CleanBites",
    dad: "600",
  },
];
