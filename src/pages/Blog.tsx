import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { FadeIn } from '@/components/ui/fade-in';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  tags: string[];
  author: string;
  reading_time: number;
  views: number;
  published_at: string;
  featured: boolean;
}

function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      
      // Fetch all published blogs
      const { data: allBlogs, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;

      if (allBlogs) {
        // Separate featured and regular blogs
        const featured = allBlogs.filter(blog => blog.featured);
        const regular = allBlogs.filter(blog => !blog.featured);
        
        setFeaturedBlogs(featured);
        setBlogs(regular);

        // Extract all unique tags
        const tags = new Set<string>();
        allBlogs.forEach(blog => {
          blog.tags?.forEach((tag: string) => tags.add(tag));
        });
        setAllTags(Array.from(tags).sort());
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs based on search and tag
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const filteredFeaturedBlogs = featuredBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogCard = ({ blog, featured = false }: { blog: Blog; featured?: boolean }) => (
    <FadeIn>
      <Link to={`/blog/${blog.slug}`} className="block group">
        <article className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${featured ? 'md:flex' : ''}`}>
          {blog.featured_image && (
            <div className={`${featured ? 'md:w-1/2' : ''} relative overflow-hidden`}>
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              {blog.featured && (
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>
          )}
          <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <User className="h-4 w-4 mr-1" />
              <span className="mr-4">{blog.author}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{formatDate(blog.published_at)}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{blog.reading_time} min read</span>
            </div>
            
            <h2 className={`font-bold text-black mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
              {blog.title}
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {blog.excerpt}
            </p>
            
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 3 && (
                  <span className="text-gray-500 text-xs">+{blog.tags.length - 3} more</span>
                )}
              </div>
            )}
            
            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Automation Blog | Expert Insights & Industry Trends | ThynkNext</title>
        <meta name="description" content="Stay ahead with expert insights on AI automation, business efficiency, and digital transformation. Discover actionable strategies to grow your business." />
        <meta name="keywords" content="AI automation blog, business automation, digital transformation, AI trends, business efficiency, automation insights" />
        <link rel="canonical" href="https://thynknext.in/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Automation Blog | Expert Insights & Industry Trends | ThynkNext" />
        <meta property="og:description" content="Stay ahead with expert insights on AI automation, business efficiency, and digital transformation. Discover actionable strategies to grow your business." />
        <meta property="og:url" content="https://thynknext.in/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thynknext.in/og-blog.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Blog | Expert Insights & Industry Trends | ThynkNext" />
        <meta name="twitter:description" content="Stay ahead with expert insights on AI automation, business efficiency, and digital transformation." />
        <meta name="twitter:image" content="https://thynknext.in/twitter-blog.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "ThynkNext AI Automation Blog",
            "description": "Expert insights on AI automation, business efficiency, and digital transformation",
            "url": "https://thynknext.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "ThynkNext",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thynknext.in/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-charcoal">
        {/* Hero Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <TypewriterHeading
                text="AI Automation Insights & Industry Expertise"
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              />
              <p className="text-xl text-white/80 mb-8">
                Stay ahead of the curve with expert insights, industry trends, and actionable strategies 
                for AI automation and business transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                {/* Tag Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none bg-white min-w-[200px]"
                  >
                    <option value="">All Topics</option>
                    {allTags.map((tag) => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blogs */}
        {filteredFeaturedBlogs.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl font-bold text-black text-center mb-12">Featured Articles</h2>
              </FadeIn>
              <div className="space-y-8">
                {filteredFeaturedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Blogs */}
        <section className="py-12 bg-accent-dark">
          <div className="container mx-auto px-6">
            {filteredBlogs.length > 0 ? (
              <>
                <FadeIn>
                  <h2 className="text-3xl font-bold text-black text-center mb-12">Latest Articles</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  {searchTerm || selectedTag ? 'No articles found matching your criteria.' : 'No articles available yet.'}
                </p>
                {(searchTerm || selectedTag) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTag('');
                    }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-8">
                Stay Updated with AI Automation Trends
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Get the latest insights, case studies, and automation strategies delivered to your inbox.
              </p>
              <Link
                to="/strategy-call"
                className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Get Expert Insights <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;