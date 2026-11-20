import { Contact } from '../presentation/sections/Contact';
import { FinalCta } from '../presentation/sections/FinalCta';
import { Footer } from '../presentation/sections/Footer';
import { contact } from '../infrastructure/local/contact';
import { finalCta } from '../infrastructure/local/final-cta';
import { footer } from '../infrastructure/local/footer';
import { Header } from '../presentation/sections/Header';
import { Hero } from '../presentation/sections/Hero';
import { Categories } from '../presentation/sections/Categories';
import { Featured } from '../presentation/sections/Featured';
import { HowItWorks } from '../presentation/sections/HowItWorks';
import { Testimonial } from '../presentation/sections/Testimonial';
import { Community } from '../presentation/sections/Community';
import { buildCategoryCards } from '../application/catalog/category-cards';
import { categories, categoriesContent, course } from '../infrastructure/local/catalog';
import { community } from '../infrastructure/local/community';
import { hero } from '../infrastructure/local/hero';
import { steps, learning } from '../infrastructure/local/learning';
import { login, navigation, startLearning } from '../infrastructure/local/navigation';
import { metrics, testimonial } from '../infrastructure/local/testimonial';

const categoryCards = buildCategoryCards(categories, course);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header links={navigation} startLearning={startLearning} login={login} />
      <main id="main">
        <Hero content={hero} />
        <Categories cards={categoryCards} content={categoriesContent} />
        <Featured course={course} />
        <HowItWorks steps={steps} content={learning} />
        <Testimonial content={testimonial} metrics={metrics} />
        <Community content={community} />
        <Contact content={contact} />
        <FinalCta content={finalCta} />
      </main>
      <Footer content={footer} />
    </>
  );
}
