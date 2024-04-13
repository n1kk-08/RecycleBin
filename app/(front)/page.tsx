import { ProductItem } from "@/components/products/ProductItem";
import data from '@/lib/data';
import { Metadata } from 'next';

export const metaData: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Recycle Bin',
  description: process.env.NEXT_PUBLIC_APP_DESC || 'Next.js E-commerce App',
}

export default function Home() {
  return (
    <>
    <h2 className="text-2xl py-2">Latest Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-5">
        {
            data.products.map((product) => (
                <ProductItem key={product.slug} product={product} />
            ))
        }
    </div>
    </>
  );
}
