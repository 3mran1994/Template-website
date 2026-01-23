import CTAButton from './CTAButton';
import BlogCard from './BlogCard';

const blogGuides = [
  {
    id: 1,
    title: 'Chemex Brew Guide',
    description: 'For bright, clean, and expressive cups.',
    image: 'https://placehold.co/600x400/f5f3ed/aaa?text=Chemex+Brew',
    link: '#',
  },
  {
    id: 2,
    title: 'Pour Over Recipe',
    description: 'Our pour over coffee brew guide.',
    image: 'https://placehold.co/600x400/f5f3ed/aaa?text=Pour+Over',
    link: '#',
  },
];

const BlogSection = () => (
  <section className="bg-white pt-[60px] pb-16 w-full">
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
      <h2 className="text-2xl font-serif mb-10 text-black">Explore Our Brew Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        {blogGuides.map((guide) => (
          <BlogCard
            key={guide.id}
            title={guide.title}
            description={guide.description}
            image={guide.image}
            link={guide.link}
          />
        ))}
      </div>
      <div className="text-center">
        <CTAButton className="border-neutral-800 text-neutral-900 bg-transparent hover:bg-black hover:text-white hover:scale-110">
          EXPLORE BREW GUIDES
        </CTAButton>
      </div>
    </div>
  </section>
);

export default BlogSection;
