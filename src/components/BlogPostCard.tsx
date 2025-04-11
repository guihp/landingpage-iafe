import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  imgSrc: string;
  category: string;
  title: string;
  description: string;
  linkHref: string;
  buttonLabel?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  imgSrc,
  category,
  title,
  description,
  linkHref,
  buttonLabel = "Ler Mais", // Default button text
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#90368F] bg-gradient-to-br from-cyan-400/15 via-purple-500/15 to-purple-600/15 shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {/* Imagem */}
      <div className="relative h-64 w-full">
        <Image
          src={imgSrc}
          alt={`Imagem para o post ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-grow flex-col p-5">
        <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-gray-400">
          {category}
        </span>
        <h3 className="mb-3 text-xl font-bold text-white">
          {title}
        </h3>
        <p className="mb-6 flex-grow text-gray-300 line-clamp-3">
          {description}
        </p>
        <Link href={linkHref} className="mt-auto self-start">
          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
            {buttonLabel}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard; 