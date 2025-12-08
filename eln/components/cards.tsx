'use client';
import { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { client } from '../lib/sanity';
import { urlFor } from '../lib/imageUrlBuilder'; 
import { Post } from '../types';

function Cards() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const query = `*[_type == "mostpopular"] | order(publishedAt desc)[0...3]{
        title, 
        subtitle, 
        mainImage, 
        body, 
        publishedAt,
        readTime
      }`;
      try {
        const fetchedPosts = await client.fetch(query);
        console.log('Fetched Posts:', fetchedPosts); // Check the fetched data
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  const extractAndTruncateText = (body: { children: { text: string }[] }[], wordLimit: number = 13) => {
    let fullText = "";
  
    body.forEach(block => {
      block.children.forEach(child => {
        if (child.text) {
          fullText += child.text + " ";
        }
      });
    });
  
    const words = fullText.trim().split(/\s+/);
  
    if (words.length <= wordLimit) return fullText;
  
    const truncatedText = words.slice(0, wordLimit).join(' ');
    return `${truncatedText}...`;
  };

  return (
    <div>
      {posts.map((post) => {
        const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : ''; // Dynamic URL
        const publishedDate = post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            }).replace(/ /g, '/')
          : 'mm/yr';
        return (
          <div className='card mt-4 blog-slide-container' key={post.slug?.current ?? post.title}>
            <div className="row">
              <div className="col-md-4">
                <div>
                  {imageUrl ? (
                    <img src={imageUrl} className="card-img-top card-img-bottom eln-image mx-3" alt={post.title} />
                  ) : (
                    <div className="placeholder-image">No Image Available</div> // Placeholder if no image
                  )}
                </div>
                <p className="date-year mx-3 mt-4">{publishedDate}</p>
              </div>
              <div className="col-md-8">
                <div className="card-body mx-2">
                  <div className="border-start mt-1 px-3">
                    <h5 className="card-title blog-slide-title">{post.title}</h5>
                    <p className="card-text blog-slide-para">
                      {extractAndTruncateText(post.body)}
                    </p>
                    <div className="d-flex justify-content-between blog-date-section">
                      <div className="d-flex">
                        <LuClock className="mt-1 clock" />
                        <p className="mx-1 read-time">
                          {post.readTime ? `${post.readTime} min read` : 'Max 3 min read'}
                        </p>
                      </div>
                      <div className="d-flex">
                        <a className="read">Read More<FaArrowRight/></a>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
