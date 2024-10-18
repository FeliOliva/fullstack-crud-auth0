const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllClientsPaginated = async (page, limit) => {
    try {
        const offset = (page - 1) * limit;

        const clients = await prisma.clients.findMany({
            skip: offset,
            take: limit,
        });
        const totalClients = await prisma.clients.count();
        return {
            clients,
            total: totalClients,
            totalPages: Math.ceil(totalClients / limit),
            currentPage: page,
        };
    } catch (error) {
        throw new Error("Error al obtener los clientes paginados");
    }
};


const getClientById = async (id) => {
    return await prisma.clients.findUnique({
        where: { id: parseInt(id) },
    });
};

const createClient = async (data) => {
    return await prisma.clients.create({ data });
};

const updateClient = async (id, data) => {
    return await prisma.clients.update({
        where: { id: parseInt(id) },
        data,
    });
};

const updateClientStatus = async (id, estado) => {
    return await prisma.clients.update({
        where: { id: parseInt(id) },
        data: { estado },
    });
};

module.exports = {
    getAllClientsPaginated,
    getClientById,
    createClient,
    updateClient,
    updateClientStatus,
};
