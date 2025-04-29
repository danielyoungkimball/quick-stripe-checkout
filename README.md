# Send My Cat Money 🐱

A fun, interactive web application that allows visitors to donate money to Joji the cat's snack fund. Built with modern web technologies and integrated with Stripe for secure payments.

## 🚀 Features

- **Interactive Video Background**: Autoplaying, looping video with sound controls
- **Secure Payment Processing**: Integrated with Stripe Checkout
- **Responsive Design**: Works seamlessly on both desktop and mobile
- **Modern UI**: Clean, dark theme with smooth animations
- **Custom Fonts**: Using Google Fonts (Inter and Righteous)
- **Type Safety**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment Processing**: Stripe
- **Deployment**: Vercel
- **Fonts**: Google Fonts (Inter, Righteous)

## 🏗️ Architecture

The application follows a modern, serverless architecture:

- **Frontend**: Next.js app with client-side components
- **API Routes**: Serverless functions for Stripe integration
- **Environment Variables**: Secure configuration management
- **Static Assets**: Optimized media delivery through Vercel

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account
- Vercel account (for deployment)

### Environment Variables

Create a `.env.local` file with:

```env
STRIPE_SECRET_KEY=sk_test_your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/send-my-cat-money.git
cd send-my-cat-money
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💳 Payment Flow

1. User clicks "Send $5" button
2. Frontend initializes Stripe Checkout
3. User completes payment on Stripe's hosted checkout page
4. User is redirected to success/cancel page based on payment outcome

## 🎨 Customization

- **Video**: Replace `public/AllMyFellas.mp4` with your own video
- **Thumbnail**: Update `public/joji-thumbnail.jpg` for Stripe checkout
- **Styling**: Modify Tailwind classes in components
- **Amount**: Update the donation amount in `create-checkout-session/route.ts`

## 🔒 Security

- Stripe secret key is only used server-side
- Environment variables are properly configured
- No sensitive data is exposed to the client
- HTTPS enforced in production

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop browsers
- Mobile devices
- Different screen sizes
- Touch interactions

## 🚀 Deployment

The application is deployed on Vercel with:
- Automatic HTTPS
- Edge network delivery
- Automatic builds on git push
- Environment variable management

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Stripe for payment processing
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Joji the cat for inspiration 🐱
