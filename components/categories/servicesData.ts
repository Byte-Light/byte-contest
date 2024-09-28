export interface Service {
  title: string;
  price: string;
  description: string;
  icon: string;
  category: string;  // Add category property
}

const services: Service[] = [
  {
    title: 'WordPress theme design',
    price: 'from US$599',
    description: 'A custom WordPress theme that does everything you need it to',
    icon: '🖥️',
    category: 'web',  // Web & app design
  },
  {
    title: 'Landing page design',
    price: 'from US$349',
    description: 'Landing page that gets clicks',
    icon: '📄',
    category: 'web',  // Web & app design
  },
  {
    title: 'Logo Design',
    price: 'from US$499',
    description: 'A unique logo to represent your brand',
    icon: '🏷️',
    category: 'logo',  // Logo & identity
  },
  {
    title: 'Brand Identity Design',
    price: 'from US$899',
    description: 'Comprehensive brand identity design including logo, colors, and typography',
    icon: '🖼️',
    category: 'logo',  // Logo & identity
  },
  {
    title: 'Logo Redesign',
    price: 'from US$399',
    description: 'Revamp your existing logo for a modern look',
    icon: '🔄',
    category: 'logo',  // Logo & identity
  },  
  {
    title: 'Icon or button',
    price: 'from US$199',
    description: 'Professionally designed icons, buttons, and favicons for web & app',
    icon: '🔘',
    category: 'web',  // Web & app design
  },
  {
    title: 'App Icon',
    price: 'from US$199',
    description: 'A stunning app icon guaranteed to get you downloads',
    icon: '📱',
    category: 'web',  // Web & app design
  },
  {
    title: 'Website Icon',
    price: 'from US$199',
    description: 'A website icon that users will recognize',
    icon: '🌐',
    category: 'web',  // Web & app design
  },
  {
    title: 'Form',
    price: 'from US$349',
    description: 'Forms customized to collect the data you need',
    icon: '📋',
    category: 'web',  // Web & app design
  },
  {
    title: 'App design',
    price: 'from US$599',
    description: 'A user-friendly app that gets downloads',
    icon: '📱',
    category: 'web',  // Web & app design
  },
  {
    title: 'iOS App',
    price: 'from US$599',
    description: "An iOS app design that'll be the apple of your eye",
    icon: '🍎',
    category: 'web',  // Web & app design
  },
  {
    title: 'Web Development',
    price: 'from US$999',
    description: 'Custom web development tailored to your needs',
    icon: '🌐',
    category: 'web',  // Web & app design
  },
  {
    title: 'E-commerce design',
    price: 'from US$899',
    description: 'An e-commerce design to boost your sales',
    icon: '🛒',
    category: 'web',  // Web & app design
  },
  {
    title: 'SEO Services',
    price: 'from US$499',
    description: 'SEO services to rank your website higher on search engines',
    icon: '🔍',
    category: 'web',  // Web & app design
  },
  {
    title: 'Custom Widget',
    price: 'from US$299',
    description: 'Design and development of custom widgets',
    icon: '🔧',
    category: 'web',  // Web & app design
  },
  {
    title: 'Graphic Design',
    price: 'from US$399',
    description: 'Creative graphic designs for any type of project',
    icon: '🎨',
    category: 'art',  // Art & illustration
  },
  {
    title: 'Logo Animation',
    price: 'from US$599',
    description: 'Animated logos to bring your brand to life',
    icon: '🚀',
    category: 'logo',  // Logo & identity
  },
  {
    title: 'Video Editing',
    price: 'from US$699',
    description: 'Professional video editing services',
    icon: '🎥',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Social Media Design',
    price: 'from US$249',
    description: 'Engaging social media designs to boost your brand',
    icon: '📱',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Business Card Design',
    price: 'from US$149',
    description: 'Custom business card designs for professionals',
    icon: '💼',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Brochure Design',
    price: 'from US$349',
    description: 'Design of brochures that engage your audience',
    icon: '📑',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Flyer Design',
    price: 'from US$199',
    description: 'Creative flyer designs for promotions or events',
    icon: '📄',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Print Ad Design',
    price: 'from US$299',
    description: 'Effective print ads for newspapers and magazines',
    icon: '📰',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Email Template Design',
    price: 'from US$249',
    description: 'Custom email templates for newsletters or campaigns',
    icon: '✉️',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Infographic Design',
    price: 'from US$349',
    description: 'Visually appealing infographics for data storytelling',
    icon: '📊',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Presentation Design',
    price: 'from US$449',
    description: 'Professional presentations that impress your audience',
    icon: '📊',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Book Cover Design',
    price: 'from US$499',
    description: 'Custom book cover designs for authors',
    icon: '📚',
    category: 'book',  // Book & magazine
  },
  {
    title: 'Album Cover Design',
    price: 'from US$349',
    description: 'Custom album cover designs for musicians',
    icon: '🎶',
    category: 'book',  // Book & magazine
  },
  {
    title: 'Resume Design',
    price: 'from US$199',
    description: 'Standout resumes designed to get you hired',
    icon: '📝',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Poster Design',
    price: 'from US$249',
    description: 'Eye-catching posters for promotions or events',
    icon: '🖼️',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Event Invitation Design',
    price: 'from US$199',
    description: 'Beautifully designed event invitations',
    icon: '🎉',
    category: 'business',  // Business & advertising
  },
  {
    title: 'Banner Ad Design',
    price: 'from US$299',
    description: 'Effective banner ad designs for digital marketing',
    icon: '📱',
    category: 'business',  // Business & advertising
  },
  {
    title: 'T-shirt Design',
    price: 'from US$199',
    description: 'Custom t-shirt designs for businesses or events',
    icon: '👕',
    category: 'clothing',  // Clothing & merchandise
  },
  {
    title: 'Mug Design',
    price: 'from US$99',
    description: 'Personalized mug designs for your brand or events',
    icon: '☕',
    category: 'clothing',  // Clothing & merchandise
  },
  {
    title: 'Sticker Design',
    price: 'from US$149',
    description: 'Custom stickers for branding and promotions',
    icon: '🏷️',
    category: 'clothing',  // Clothing & merchandise
  },
    {
      title: 'Packaging Design',
      price: 'from US$399',
      description: 'Creative packaging design that stands out on shelves',
      icon: '📦',
      category: 'packaging',  // Packaging & label
    },
    {
      title: 'Product Label Design',
      price: 'from US$299',
      description: 'Eye-catching product label designs for retail',
      icon: '🏷️',
      category: 'packaging',  // Packaging & label
    },
    {
      title: 'Custom Box Design',
      price: 'from US$499',
      description: 'Custom-designed boxes for products or gifts',
      icon: '📤',
      category: 'packaging',  // Packaging & label
    },
    {
      title: 'Food Packaging Design',
      price: 'from US$599',
      description: 'Unique and safe packaging designs for food products',
      icon: '🍱',
      category: 'packaging',  // Packaging & label
    },
    {
      title: 'Stationery Design',
      price: 'from US$199',
      description: 'Custom stationery design for business or personal use',
      icon: '✏️',
      category: 'business',  // Business & advertising
    },
    {
      title: 'Calendar Design',
      price: 'from US$249',
      description: 'Personalized calendars for marketing or gifts',
      icon: '📅',
      category: 'business',  // Business & advertising
    },
    {
      title: 'Magazine Layout Design',
      price: 'from US$599',
      description: 'Professionally designed magazine layouts',
      icon: '📰',
      category: 'book',  // Book & magazine
    },
    {
      title: 'Newsletter Design',
      price: 'from US$299',
      description: 'Custom-designed newsletters for effective communication',
      icon: '📰',
      category: 'business',  // Business & advertising
    },
    {
      title: 'CD/DVD Cover Design',
      price: 'from US$199',
      description: 'Custom designs for CD or DVD covers',
      icon: '💿',
      category: 'book',  // Book & magazine
    },
    {
      title: 'Poster for Music Event',
      price: 'from US$249',
      description: 'Vibrant posters for music events or concerts',
      icon: '🎶',
      category: 'art',  // Art & illustration
    },
    {
      title: 'Personalized Invitation Design',
      price: 'from US$199',
      description: 'Custom event invitations for weddings, birthdays, etc.',
      icon: '🎁',
      category: 'business',  // Business & advertising
    },
    {
      title: '3D Product Rendering',
      price: 'from US$799',
      description: 'High-quality 3D rendering of your product',
      icon: '🎞️',
      category: 'packaging',  // Packaging & label
    },
    {
      title: 'Retail Signage Design',
      price: 'from US$499',
      description: 'Custom signage designs for retail stores',
      icon: '🛍️',
      category: 'business',  // Business & advertising
    },
    {
      title: 'Vehicle Wrap Design',
      price: 'from US$999',
      description: 'Creative vehicle wrap designs to promote your business',
      icon: '🚗',
      category: 'business',  // Business & advertising
    },
    {
      title: 'Custom Badge Design',
      price: 'from US$149',
      description: 'Personalized badge designs for events or companies',
      icon: '🎖️',
      category: 'clothing',  // Clothing & merchandise
    },
    {
      title: 'Merchandise Packaging Design',
      price: 'from US$599',
      description: 'Packaging designs for promotional merchandise',
      icon: '📦',
      category: 'packaging',  // Packaging & label
    },

  
];

export default services;
