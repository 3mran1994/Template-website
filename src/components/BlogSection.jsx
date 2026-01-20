import CTAButton from './CTAButton';

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
      <h2 className="text-2xl font-serif mb-10">Explore Our Brew Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        {blogGuides.map((guide) => (
          <div key={guide.id} className="flex flex-col md:flex-row items-center md:items-stretch gap-8 h-72">
            <img src={guide.image} alt={guide.title} className="w-full md:w-96 h-72 object-cover" />
            <div className="flex-1 flex flex-col justify-end items-start h-72">
              <h3 className="text-lg font-semibold tracking-wide mb-2 uppercase">{guide.title}</h3>
              <p className="mb-4 text-neutral-700">{guide.description}</p>
              <a href={guide.link} className="text-xs tracking-widest font-medium underline-offset-4 hover:underline hover:text-neutral-900 transition-colors">LEARN MORE</a>
            </div>
          </div>
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
