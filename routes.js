let express = require("express"),
router = express.Router();

router.get("/status", (request, response) => {
    const status = {
        status: "status all good",
    };
    response.send(status);
});

router.get("/products", async (request, response) => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json()
    response.send(data)
});

router.get("/users", async (request, response) => {
    const res = await fetch('https://randomuser.me/api/?results=20');
    const data = await res.json()
    response.send(data)
});




module.exports = router
