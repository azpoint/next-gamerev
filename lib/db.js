import { PrismaClient } from "@prisma/client";

export const db = createPrismaClient({
	// log: [{emit: 'stdout', level: 'query'}]
});

/**@return {PrismaClient} */ //Add types to autocompletion
function createPrismaClient() {
	if (!globalThis.prismaClient) {
		globalThis.prismaClient = new PrismaClient({});
	}
	return globalThis.prismaClient;
}
