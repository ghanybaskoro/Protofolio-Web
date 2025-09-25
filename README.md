# Ghany Widito Baskoro - Personal Portfolio

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS, showcasing professional experience in Industrial Engineering & Technology Management.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Interactive Elements**: Smooth scrolling navigation and hover effects
- **Contact Form**: Ready-to-use contact form (requires backend integration)

## 📋 Sections

- **Hero**: Personal introduction and contact information
- **About**: Professional summary and key highlights
- **Experience**: Detailed work history with responsibilities
- **Education**: Academic background and achievements
- **Skills**: Technical and soft skills with progress indicators
- **Certificates**: Professional certifications and training
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ghany-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience section
│   ├── Education.tsx       # Education and achievements
│   ├── Skills.tsx          # Skills section
│   ├── Certificates.tsx    # Certifications section
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  }
}
```

### Content
- Update personal information in each component
- Modify skills and experience in respective sections
- Add or remove sections as needed

### Styling
- All styles use Tailwind CSS utility classes
- Custom styles are defined in `app/globals.css`
- Components are fully customizable

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📧 Contact Form

The contact form is ready for backend integration. You can:
- Use services like Formspree, Netlify Forms, or EmailJS
- Set up a custom API endpoint
- Integrate with your preferred email service

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, pull requests are welcome!

---

**Built with ❤️ by Ghany Widito Baskoro**
