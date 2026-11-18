import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#131209] text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#181818] border border-[#272727] flex items-center justify-center mb-6">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#9B9B9B]"
        >
          <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
          <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
          <path d="M4 19v2" />
          <path d="M20 19v2" />
        </svg>
      </div>

      <span className="caption-3 px-2.5 py-1 rounded-md bg-[#1F1F1F] text-[#9B9B9B] border border-[#272727] mb-3">
        404 • Page Not Found
      </span>

      <h1 className="heading-3 text-white mb-3">
        This sofa has moved to another room
      </h1>

      <p className="body-3 text-[#9B9B9B] max-w-md mb-8">
        The link you followed doesn’t exist or has been relocated. Head back to the ChillSofa
        home showroom to explore the collection.
      </p>

      <Link
        href="/"
        className="button-md bg-white text-[#181818] py-2 px-4 rounded-xl hover:bg-neutral-200 transition-colors"
      >
        Return to ChillSofa Home
      </Link>
    </main>
  );
}
