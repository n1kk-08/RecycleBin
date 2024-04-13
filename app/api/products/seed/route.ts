import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/lib/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import ProductModel from "@/lib/models/ProductModel";

export const GET = async (request: NextRequest) => {
    const { users, products } = data
    await dbConnect()
    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)

    return NextResponse.json({ message: 'Seeded successfully',
    users,
    products
})

}