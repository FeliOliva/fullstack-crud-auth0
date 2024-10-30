const express = require("express");
const router = express.Router();
const clientControllers = require("../controllers/clientsControllers");
const authenticateToken = require("../middleware/Authorization");

router.get("/", clientControllers.saludo);
router.get("/clientes", authenticateToken, clientControllers.getAllClients);
router.get(
  "/clientes/:ID",
  authenticateToken,
  clientControllers.getClientsByID
);
router.post("/clientes", authenticateToken, clientControllers.addClient);
router.delete("/clientes/:ID", authenticateToken, clientControllers.dropClient);
router.post("/clientes/:ID", authenticateToken, clientControllers.upClient);
router.put("/clientes", authenticateToken, clientControllers.updateClients);

module.exports = router;
