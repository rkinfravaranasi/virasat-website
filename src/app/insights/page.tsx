import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export const metadata = {
  title: "Real Estate Market Insights & News | VIRASAT Varanasi",
  description:
    "Authoritative perspectives on Varanasi real estate trends, Ring Road infrastructure developments, land investment guides, and modern luxury architecture.",
};

export default async function InsightsPage() {
  const posts = await prisma.blogPost.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1920&q=80"
            alt="Virasat Market Insights"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Market Intelligence & Perspectives</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Virasat Insights
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Thought leadership on Varanasi's infrastructural renaissance, land investment
            fundamentals, and luxury architectural design.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white border border-virasat-gold/30 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden bg-virasat-green-dark">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-virasat-charcoal-dark/80 backdrop-blur-md border border-virasat-gold/30 text-[10px] text-virasat-gold font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] text-virasat-charcoal/50 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTimeMinutes} min read</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-virasat-green-dark group-hover:text-virasat-gold-dark transition-colors line-clamp-2">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-virasat-charcoal/70 line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-virasat-gold/15 flex items-center justify-between">
                  <span className="text-[11px] text-virasat-charcoal/60 font-medium">
                    By {post.authorName}
                  </span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider font-bold text-virasat-green hover:text-virasat-gold"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
