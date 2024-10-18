const express = require("express");
const router = express.Router();
const clientControllers = require("../controllers/clientsControllers");

router.get("/", clientControllers.saludo);
router.get("/clientes", clientControllers.getAllClients);
router.get("/clientes/:ID", clientControllers.getClientsByID);
router.post("/clientes", clientControllers.addClient);
router.delete("/clientes/:ID", clientControllers.dropClient);
router.post("/clientes/:ID", clientControllers.upClient);
router.put("/clientes", clientControllers.updateClients);

module.exports = router;
