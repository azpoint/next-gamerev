import { searchReviews } from "@/lib/reviews";
import { NextResponse } from "next/server";

export async function GET(request) {
	//Line to get the url params from the browser
	const query = request.nextUrl.searchParams.get('query')
	const reviews = await searchReviews(query)
	return NextResponse.json(reviews)
}