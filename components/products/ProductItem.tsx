import React from 'react'
import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'

export const ProductItem = ({ product }: { product: Product }) => {

    return (
        <div className="card bg-base-300 shadow-xl mb-4 h-10" style={{ height: '40vh' }}>
            <figure>
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="object-cover h-64 w-full"
                    />
                </Link>
            </figure>
            <div className="card-body">
                <Link href={`/product/${product.slug}`}>
                    <h2 className="card-title font-normal">{product.name}</h2>
                </Link>

                <div className="card-actions flex items-center justify-between">
                    <span className="text-2xl">₹{product.price}/Kg</span>
                </div>
            </div>
        </div>
    )
}
