import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const products = await ProductModel.find()
  return Response.json(products)
}) as any

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const product = new ProductModel({
    name: 'Enter the name of Product here',
    slug: 'url' + Math.random()*1000,
    image: '/images/shirt1.jpg',
    price: 0,
    category: 'Enter the Waste category here',
    brand: 'sample brand',
    countInStock: 0,
    description: 'Enter Description of Pruoduct here',
    rating: 0,
    numReviews: 0,
  })
  try {
    await product.save()
    return Response.json(
      { message: 'Product created successfully', product },
      {
        status: 201,
      }
    )
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
