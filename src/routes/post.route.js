module.exports = function (app) {
    const posts = require("../controllers/post.controller.js");
    const router = require("express").Router();
    const multer = require('multer')
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage })

    router.get("/", posts.findAll);
    router.post("/", upload.array('images', 5), posts.createHotel);
    router.get("/:id", posts.findOne);
    router.put("/:id", posts.update);
    router.delete("/:id", posts.delete);
    router.get("/search", posts.findByLocation);

    app.use("/api/posts", router);
}