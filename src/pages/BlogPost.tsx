import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Eye, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { FadeIn } from '@/components/ui/fade-in';
import { RainbowButton } from '@/components/ui/rainbow-button';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
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

interface RelatedBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  reading_time: number;
  published_at: string;
}

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<RelatedBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog(slug);
    }
  }, [slug]);

  const fetchBlog = async (blogSlug: string) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch the blog post
      const { data: blogData, error: blogError } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', blogSlug)
        .eq('published', true)
        .single();

      if (blogError) {
        if (blogError.code === 'PGRST116') {
          setError('Blog post not found');
        } else {
          throw blogError;
        }
        return;
      }

      setBlog(blogData);

      // Increment view count
      await supabase
        .from('blogs')
        .update({ views: (blogData.views || 0) + 1 })
        .eq('id', blogData.id);

      // Fetch related blogs (same tags, excluding current blog)
      if (blogData.tags && blogData.tags.length > 0) {
        const { data: relatedData } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, featured_image, reading_time, published_at')
          .eq('published', true)
          .neq('id', blogData.id)
          .overlaps('tags', blogData.tags)
          .order('published_at', { ascending: false })
          .limit(3);

        if (relatedData) {
          setRelatedBlogs(relatedData);
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog?.title || '';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
      } catch (error) {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  // Convert markdown-like content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold text-black mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-black mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-black mb-4 mt-6">$1</h3>')
      .replace(/^\*\*(.+)\*\*$/gm, '<p class="font-bold text-black mb-4">$1</p>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2 text-gray-700">$1</ul>')
      .replace(/^(?!<[h|u|l])(.*$)/gm, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>')
      .replace(/\n\n/g, '\n');
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.meta_title || `${blog.title} | ThynkNext Blog`}</title>
        <meta name="description" content={blog.meta_description || blog.excerpt} />
        <meta name="keywords" content={blog.tags?.join(', ')} />
        <link rel="canonical" href={`https://thynknext.in/blog/${blog.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={blog.meta_title || blog.title} />
        <meta property="og:description" content={blog.meta_description || blog.excerpt} />
        <meta property="og:url" content={`https://thynknext.in/blog/${blog.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blog.featured_image || 'https://thynknext.in/og-blog.jpg'} />
        <meta property="article:author" content={blog.author} />
        <meta property="article:published_time" content={blog.published_at} />
        <meta property="article:tag" content={blog.tags?.join(', ')} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.meta_title || blog.title} />
        <meta name="twitter:description" content={blog.meta_description || blog.excerpt} />
        <meta name="twitter:image" content={blog.featured_image || 'https://thynknext.in/twitter-blog.jpg'} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "image": blog.featured_image,
            "author": {
              "@type": "Organization",
              "name": blog.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "ThynkNext",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thynknext.in/logo.png"
              }
            },
            "datePublished": blog.published_at,
            "dateModified": blog.published_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://thynknext.in/blog/${blog.slug}`
            },
            "keywords": blog.tags?.join(', '),
            "wordCount": blog.content.split(' ').length,
            "timeRequired": `PT${blog.reading_time}M`
          })}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-white">
        {/* Back to Blog */}
        <div className="container mx-auto px-6 py-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-6 pb-12">
          <header className="max-w-4xl mx-auto mb-12">
            <FadeIn>
              {blog.featured_image && (
                <div className="mb-8 rounded-2xl overflow-hidden">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{blog.author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{formatDate(blog.published_at)}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span className="mr-4">{blog.reading_time} min read</span>
                <Eye className="h-4 w-4 mr-1" />
                <span>{blog.views} views</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
              
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
                <div className="text-sm text-gray-500">
                  Share this article
                </div>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </FadeIn>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
              />
            </FadeIn>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-primary rounded-2xl text-center">
            <FadeIn>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80 mb-6">
                Get expert guidance on implementing AI automation in your business.
              </p>
              <Link to="/strategy-call">
                <RainbowButton className="inline-flex items-center">
                  Book Your Strategy Call <ChevronRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </Link>
            </FadeIn>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 bg-accent-dark">
            <div className="container mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl font-bold text-black text-center mb-12">Related Articles</h2>
              </FadeIn>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedBlogs.map((relatedBlog) => (
                  <FadeIn key={relatedBlog.id}>
                    <Link to={`/blog/${relatedBlog.slug}`} className="block group">
                      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {relatedBlog.featured_image && (
                          <div className="relative overflow-hidden">
                            <img
                              src={relatedBlog.featured_image}
                              alt={relatedBlog.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-4">{formatDate(relatedBlog.published_at)}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{relatedBlog.reading_time} min read</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                            {relatedBlog.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {relatedBlog.excerpt}
                          </p>
                          
                          <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                            Read More <ChevronRight className="ml-2 h-4 w-4" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default BlogPost;