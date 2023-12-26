import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient({
	// log: [{emit: 'stdout', level: 'query'}]
});


/**@return {PrismaClient} */ //Add types to autocompletion
function createPrismaClient() {
	if (!globalThis.prismaClient)
		globalThis.prismaClient = new PrismaClient({
			// log: [{emit: 'stdout', level: 'query'}]
		});

	return globalThis.prismaClient;
}
