import { useParams } from 'react-router-dom';
import { posts } from '../data/fakeDb';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Post topilmadi</p>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-gray-50 py-12">
      <article className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-medium">
                {post.author.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorTitle}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default PostDetail;