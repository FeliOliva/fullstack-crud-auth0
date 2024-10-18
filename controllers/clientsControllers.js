const clientService = require("../services/clientService");


const saludo = (req, res) => {
  res.send("Welcome to fullstack-crud-auth0-back!");
}

const getAllClients = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    if (isNaN(pageNumber) || pageNumber < 1 || isNaN(limitNumber) || limitNumber < 1) {
      return res.status(400).json({ error: "Los parámetros de paginación no son válidos" });
    }

    const result = await clientService.getAllClientsPaginated(pageNumber, limitNumber);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClientsByID = async (req, res) => {
  try {
    const { ID } = req.params;
    const client = await clientService.getClientById(ID);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

const addClient = async (req, res) => {
  try {
    const { nombre, apellido, direccion, email, telefono, cuil } = req.body;
    if (!nombre || !apellido || !direccion || !email || !telefono || !cuil) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    const client = await clientService.createClient({
      nombre, apellido, direccion, email, telefono, cuil,
    });
    res.status(201).json({ message: "Cliente agregado con éxito", client });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el cliente" });
  }
};

const updateClients = async (req, res) => {
  try {
    const { id, nombre, apellido, direccion, email, telefono, cuil } = req.body;
    if (!id) return res.status(400).json({ error: "ID es requerido" });

    const client = await clientService.getClientById(id);
    if (!client) return res.status(404).json({ error: "Cliente no encontrado" });

    await clientService.updateClient(id, { nombre, apellido, direccion, email, telefono, cuil });
    res.status(200).json({ message: "Cliente actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
};

const dropClient = async (req, res) => {
  try {
    const { ID } = req.params;
    const client = await clientService.getClientById(ID);
    if (!client) return res.status(404).json({ error: "Cliente no encontrado" });

    await clientService.updateClientStatus(ID, 0); // Cambia el estado a 0
    res.status(200).json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
};

const upClient = async (req, res) => {
  try {
    const { ID } = req.params;
    const client = await clientService.getClientById(ID);
    if (!client) return res.status(404).json({ error: "Cliente no encontrado" });

    await clientService.updateClientStatus(ID, 1); // Cambia el estado a 1
    res.status(200).json({ message: "Cliente activado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al activar el cliente" });
  }
};

module.exports = {
  saludo,
  getAllClients,
  addClient,
  dropClient,
  upClient,
  updateClients,
  getClientsByID,
};
