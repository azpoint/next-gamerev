import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { CACHE_TAG_REVIEWS } from "@/lib/reviews";

//API event triggered revalidation(data refreshing) using webhooks
//Check lib/reviews.js
export async function POST(request) {
	const payload = await request.json();
	if(payload.model === 'review') {
		//Notification tag to invalidate cache in next server
		revalidateTag(CACHE_TAG_REVIEWS)
		console.log('revalidated: ', CACHE_TAG_REVIEWS)
	}
	return new Response(null, { status: 204 });
}
