import Link from 'next/link';

const links = [{ href: '/single-modal', title: 'single-modal' }];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">
        Best practices for modal implementation
      </h1>
      <p className="text-lg"></p>
      {links.map((link) => (
        <Link
          href={link.href}
          className="bg-zinc-50 border border-black/10 px-10 py-2 rounded-md hover:bg-white cursor-pointer group"
        >
          <span className="text-muted-foreground group-hover:text-black">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
