import { _testimonials } from 'src/_mock';

import EcommerceLandingHero from 'src/sections/_ecommerce/landing/ecommerce-landing-hero';
import EcommerceTestimonial from 'src/sections/_ecommerce/testimonial/ecommerce-testimonial';
import EcommerceLandingCategories from 'src/sections/_ecommerce/landing/ecommerce-landing-categories';
import EcommerceLandingTopProducts from 'src/sections/_ecommerce/landing/ecommerce-landing-top-products';
import EcommerceLandingSpecialOffer from 'src/sections/_ecommerce/landing/ecommerce-landing-special-offer';
import EcommerceLandingHotDealToday from 'src/sections/_ecommerce/landing/ecommerce-landing-hot-deal-today';
import EcommerceLandingFeaturedBrands from 'src/sections/_ecommerce/landing/ecommerce-landing-featured-brands';
import EcommerceLandingPopularProducts from 'src/sections/_ecommerce/landing/ecommerce-landing-popular-products';
import EcommerceLandingFeaturedProducts from 'src/sections/_ecommerce/landing/ecommerce-landing-featured-products';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Cobulles',
};

export default function EcommerceLandingPage() {
  return (
    <>
      <EcommerceLandingHero />

      <EcommerceLandingCategories />

      <EcommerceLandingHotDealToday />

      <EcommerceLandingFeaturedProducts />

      <EcommerceLandingSpecialOffer />

      <EcommerceLandingFeaturedBrands />

      <EcommerceLandingPopularProducts />

      <EcommerceLandingTopProducts />

      <EcommerceTestimonial testimonials={_testimonials} />
    </>
  );
}
