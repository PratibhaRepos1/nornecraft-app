import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Viking Drinking Horns',
    excerpt:
      'Discover the rich history behind Viking drinking horns and how they were crafted by Norse artisans centuries ago.',
    date: 'Coming Soon',
    category: 'History',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Norse Runes: Symbols of Power',
    excerpt:
      'Learn about the Elder Futhark runes, their meanings, and how they were used in ancient Norse culture.',
    date: 'Coming Soon',
    category: 'Culture',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'How to Care for Your Horn Mug',
    excerpt:
      'Essential tips and tricks for maintaining your drinking horn to ensure it lasts for generations.',
    date: 'Coming Soon',
    category: 'Guide',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'The Norns: Weavers of Fate',
    excerpt:
      'Explore the mythology of the Norns, the three beings who shape the destiny of gods and men in Norse legend.',
    date: 'Coming Soon',
    category: 'Mythology',
    readTime: '6 min read',
  },
  {
    id: 5,
    title: 'Traditional Norse Woodworking',
    excerpt:
      'A deep dive into the woodworking techniques used by Viking craftsmen to create stunning works of art.',
    date: 'Coming Soon',
    category: 'Craft',
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Viking Feasts: Food & Drink',
    excerpt:
      'What did the Vikings eat and drink? Explore the culinary traditions of the Norse people.',
    date: 'Coming Soon',
    category: 'History',
    readTime: '5 min read',
  },
];

function Blog() {
  return (
    <div className="blog">
      <div className="page-hero">
        <h1>Blog</h1>
      </div>

      <section className="blog-section">
        <div className="container">
          <div className="section-title">
            <h2>Norse Knowledge & Stories</h2>
            <p>Explore the world of Norse craftsmanship and mythology</p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to="#" className="read-more">
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
