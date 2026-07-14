import { Hero } from "@/components/hero";
import { UploadZone } from "@/features/upload/components/upload-zone";
import { UploadSummary } from "@/features/upload/components/upload-summary";
import { FileReview } from "@/features/upload/components/file-review";
import { ParserPlayground } from "../features/parser/components/parser-playground";
import { ProductsList } from "@/features/products/components/products-list";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6">
        <Hero />
        <UploadZone />
        <UploadSummary />
        <FileReview />
        <ParserPlayground />
        <ProductsList />
      </div>
    </main>
  );
}