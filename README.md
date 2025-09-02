# Humanbo - AI That Feels Human

Intelligence Reimagined. Crafting AI experiences that enhance human potential with sophistication, empathy, and purpose.

## 🚀 Features

- **Human-Centered AI Products**: Askify, Mocdt, WebSparks, OwnCents, and Time Wallet
- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **Production Ready**: Error boundaries, analytics, and monitoring

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/humanbo/humanbo.git

# Navigate to project directory
cd humanbo

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# API Configuration
VITE_API_URL=https://api.humanbo.com

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── assets/             # Static assets

public/
├── manifest.json       # PWA manifest
├── robots.txt         # Search engine directives
└── sitemap.xml        # Site structure for SEO
```

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 📊 Analytics & Monitoring

- **Google Analytics 4**: User behavior tracking
- **Error Boundaries**: Graceful error handling
- **Performance Monitoring**: Core Web Vitals tracking
- **Form Analytics**: Conversion tracking

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure cookie settings
- Input validation and sanitization

## 📱 PWA Features

- Web App Manifest
- Service Worker ready
- Offline functionality
- App-like experience on mobile

## 🎨 Design System

- **Colors**: Professional palette with humanbo brand colors
- **Typography**: Inter font family with proper hierarchy
- **Components**: Reusable, accessible UI components
- **Animations**: Smooth transitions and micro-interactions

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 3s First Contentful Paint
- **SEO Score**: 100/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: hello@humanbo.com
- **Documentation**: [docs.humanbo.com](https://docs.humanbo.com)
- **Issues**: [GitHub Issues](https://github.com/humanbo/humanbo/issues)

## 🙏 Acknowledgments

- Built with ❤️ by the Humanbo team
- Powered by WebSparks AI
- Special thanks to our amazing community

---

**Humanbo** - Where AI meets human potential. 🚀✨
