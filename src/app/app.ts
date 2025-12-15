import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  images: string[];           
  currentImageIndex: number;  
  repoLink: string;
  demoLink: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class AppComponent {
  profile = {
    name: 'Mateo Catalogna',
    role: 'Full Stack Developer',
    photo: 'assets/yo.jpeg', 
    email: 'catalognamateo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mateo-catalogna-1b406b269/',
    github: 'https://github.com/MateoCatalogna',
    location: 'Buenos Aires, Argentina'
  };

  skills: Skill[] = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  projects: Project[] = [
    {
      title: 'Basic SocialMedia | MJC',
      category: 'Full Stack App',
      description: 'Plataforma social completa con autenticación y base de datos.',
      tags: ['Angular', 'NestJS', 'MongoDB'],
      
      images: [
        'assets/mjc/dashboard.png',
        'assets/mjc/home.png',
        'assets/mjc/login.png',
        'assets/mjc/profile.png',
        'assets/mjc/responsive.png'
      ],
      currentImageIndex: 0, 
      repoLink: 'https://github.com/MateoCatalogna/TP2Progra4CatalognaMateoBackend.git',
      demoLink: 'https://tp-2-progra4-catalogna-mateo.vercel.app/home'
    },
     {
      title: 'Url Shorner | Snaplink',
      category: 'Full Stack App',
      description: 'Aplicación web para acortar enlaces y generar códigos QR dinámicos.',
      tags: ['Angular', 'NestJS', 'MongoDB', 'Tailwind'],
      
      images: [
        'assets/snapLink/Snaplink1.png',
        'assets/snapLink/Snaplink2.png',
      ],
      currentImageIndex: 0, 
      repoLink: 'https://github.com/MateoCatalogna/SnapLink-Backend.git',
      demoLink: 'https://snap-link-frontend-nine.vercel.app/'
    },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  nextImage(project: Project, event: Event) {
    event.stopPropagation(); 
    if (project.currentImageIndex < project.images.length - 1) {
      project.currentImageIndex++;
    } else {
      project.currentImageIndex = 0; 
    }
  }

  prevImage(project: Project, event: Event) {
    event.stopPropagation(); 
    if (project.currentImageIndex > 0) {
      project.currentImageIndex--;
    } else {
      project.currentImageIndex = project.images.length - 1;
    }
  }
}