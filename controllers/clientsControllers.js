const Client = require("../models/clientModel");

// Obtener todos los clientes
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar un nuevo cliente
const addClient = async (req, res) => {
  try {
    const { nombre, apellido, direccion, email, telefono, cuil } = req.body;
    const client = await Client.create({
      nombre,
      apellido,
      direccion,
      email,
      telefono,
      cuil,
    });
    res.status(201).json({ message: "Cliente agregado con éxito", client });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el cliente" });
  }
};

// Eliminar un cliente (cambia estado a 0)
const dropClient = async (req, res) => {
  try {
    const { ID } = req.params;
    await Client.update({ estado: 0 }, { where: { id: ID } });
    res.status(200).json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
};

// Activar un cliente (cambia estado a 1)
const upClient = async (req, res) => {
  try {
    const { ID } = req.params;
    await Client.update({ estado: 1 }, { where: { id: ID } });
    res.status(200).json({ message: "Cliente activado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al activar el cliente" });
  }
};

// Actualizar un cliente
const updateClients = async (req, res) => {
  try {
    const { ID, nombre, apellido, direccion, email, telefono, cuil } = req.body;
    await Client.update(
      { nombre, apellido, direccion, email, telefono, cuil },
      { where: { id: ID } }
    );
    res.status(200).json({ message: "Cliente actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener cliente por ID
const getClientsByID = async (req, res) => {
  try {
    const { ID } = req.params;
    const client = await Client.findByPk(ID);
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllClients,
  addClient,
  dropClient,
  upClient,
  updateClients,
  getClientsByID,
};
