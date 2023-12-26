import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
	log: [{emit: 'stdout', level: 'query'}]
});


// const comment = await db.comment.create({
	
// 	data: {
// 		slug: "gran-turismo",
// 		user: "Dymanic",
// 		message: "Looking forward to it",
// 	},
// });


console.log('created:', comment)

const comments = await db.comment.findMany({
	where: {slug: 'fall-guys'}
});
console.log('Comments: ', comments)