// implement your posts router here
const router = express.Router()
const { restart } = require("nodemon")
const Post = require("./posts-model")

router.get("/", (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err){
            res.status(500).json({
                message: "The posts information could not be retrieved.",
                err: err.message,
                stack: err.stack
            })
        }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    try{
        await Post.findById(id)
        res.status(200).json(id)
        if(!req.params.id){
            res.status(404).json({
                message: "Post with the specified id does not exist",
                err: err.message,
            })
        }
    } catch(err){

    }
})

router.post("/", (req, res) => {
    
})

router.put("/:id", (req, res) => {
    
})

router.delete("/:id", (req, res) => {
    
})

router.get("/:id/comments", (req, res) => {
    
})
