"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { CheckCircle, Globe, Leaf, Mail, Package, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Crops", id: "about" },
            { name: "Products", id: "products" },
            { name: "Benefits", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pelemix"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Coconut Coir Substrate for Agriculture & Horticulture"
          description="High-quality coir-based grow bags and substrates for vegetables and plants, designed for optimal growth and sustainability. Perfect for growers worldwide!"
          tag="Premium Growing Medium"
          tagIcon={Leaf}
          buttons={[
            { text: "Explore Products", href: "products" },
            { text: "Contact Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coconut coir substrate"
            },
            {
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coconut fiber grow bags"
            },
            {
              imageSrc: "https://images.pexels.com/photos/7299967/pexels-photo-7299967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coir growing medium"
            },
            {
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "High-quality coconut coir"
            },
            {
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sustainable coir agriculture"
            },
            {
              imageSrc: "https://images.pexels.com/photos/5608056/pexels-photo-5608056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Quality controlled substrates"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Pelemix"
          description={[
            "We're here to assist you on your journey to sustainable and successful cultivation",
            "Our dedicated team is ready to provide you with the support you need for optimal agricultural growth using premium coconut coir substrates"
          ]}
          buttons={[
            { text: "Learn More", href: "features" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Coir Products"
          description="Discover our range of high-quality coconut coir substrates and grow bags designed for optimal plant growth"
          tag="Featured Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "Pelemix",
              name: "Premium Coconut Coir Grow Bags",
              price: "Contact for Quote",
              rating: 5,
              reviewCount: "2.5k",
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coconut coir grow bags"
            },
            {
              id: "2",
              brand: "Pelemix",
              name: "Coir Substrate for Vegetables",
              price: "Contact for Quote",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/17741703/pexels-photo-17741703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coir substrate for vegetables"
            },
            {
              id: "3",
              brand: "Pelemix",
              name: "Sustainable Growing Medium",
              price: "Contact for Quote",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sustainable coconut coir medium"
            }
          ]}
          buttons={[
            { text: "View All Products", href: "products" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose Pelemix Coconut Coir"
          description="Discover the sustainable advantages of our premium coconut coir substrates for agriculture and horticulture"
          tag="Benefits"
          tagIcon={CheckCircle}
          features={[
            {
              title: "Sustainable & Eco-Friendly",
              description: "Made from renewable coconut husks, our coir substrates support environmentally responsible growing practices",
              imageSrc: "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sustainable coconut coir farming"
            },
            {
              title: "Optimal Water Retention",
              description: "Superior water holding capacity ensures consistent moisture levels for healthy plant development",
              imageSrc: "https://images.pexels.com/photos/5608056/pexels-photo-5608056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Water retention testing"
            },
            {
              title: "Premium Quality Control",
              description: "Rigorous quality testing ensures consistent pH levels and optimal growing conditions for all crops",
              imageSrc: "https://images.pexels.com/photos/7299967/pexels-photo-7299967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Quality controlled grow bags"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Growers Say About Pelemix"
          description="Hear from agricultural professionals who trust Pelemix coconut coir substrates for their crops"
          tag="Customer Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Commercial Vegetable Grower",
              testimonial: "Pelemix coir substrates have transformed our greenhouse operations. The consistent quality and excellent water retention have significantly improved our tomato yields.",
              imageSrc: "https://images.pexels.com/photos/7728657/pexels-photo-7728657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Rodriguez, Commercial Grower"
            },
            {
              id: "2",
              name: "James Thompson",
              role: "Hydroponic Specialist",
              testimonial: "The sustainability aspect of Pelemix coconut coir aligns perfectly with our eco-friendly farming goals. Outstanding product quality and reliable supply chain.",
              imageSrc: "https://images.pexels.com/photos/7728657/pexels-photo-7728657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Thompson, Hydroponic Specialist"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Organic Farm Manager",
              testimonial: "We've been using Pelemix grow bags for three seasons now. The root development we see in our cucumber crops is exceptional compared to traditional substrates.",
              imageSrc: "https://images.pexels.com/photos/34596162/pexels-photo-34596162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen, Farm Manager"
            },
            {
              id: "4",
              name: "David Kumar",
              role: "Agricultural Consultant",
              testimonial: "I recommend Pelemix to all my clients seeking sustainable growing solutions. Their technical support team is knowledgeable and always available to help.",
              imageSrc: "https://images.pexels.com/photos/7728657/pexels-photo-7728657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kumar, Agricultural Consultant"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Agricultural Leaders Worldwide"
          description="Join thousands of growers who trust Pelemix coconut coir substrates for sustainable cultivation"
          tag="Global Partners"
          tagIcon={Globe}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Transform Your Growing Operations?"
          description="If you have any questions or inquiries, or require further information, please don't hesitate to reach out to us. Our dedicated team is ready to provide you with the support you need."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to receive information about Pelemix products and services."
          imageSrc="https://images.pexels.com/photos/5865642/pexels-photo-5865642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Agricultural consultation"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Pelemix"
          columns={[
            {
              items: [
                { label: "Tomatoes", href: "crops" },
                { label: "Cucumbers", href: "crops" },
                { label: "Vegetables", href: "crops" }
              ]
            },
            {
              items: [
                { label: "Grow Bags", href: "products" },
                { label: "Substrates", href: "products" },
                { label: "Growing Media", href: "products" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Sustainability", href: "features" },
                { label: "Quality", href: "features" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Support", href: "contact" },
                { label: "Consultation", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}