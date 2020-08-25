const router = require("express").Router();
const Item = require("../model/item.model");

/* 
    @route GET  api/items/:id
    @desc GETs one item
    @access public
*/
router.get("/:id", async (req, res) => {
    try {
        let item = await Item.findById(req.params.id);

        res.status(200).json({
            message: "item found",
            item,
        });
    } catch (err) {
        res.status(500).json({
            message: "oh no! je ne sais pas ce qui s’est passé",
            statuscode: "EB500",
        });
    }
});

/* 
    @route PUT  api/items/:id
    @desc updates one item
    @access public
*/
router.put("/:id", async (req, res) => {});

/* 
    @route GET  api/items/:id
    @desc deletes one item
    @access public
*/
router.delete("/:id", async (req, res) => {
    try {
        let itemDelete = await Item.findByIdAndDelete(req.params.id);
        if(itemDelete){
            res.status(200).json({
                message: "deleted",
            });
        }
    } catch (error) {
        res.status(500).json({
          message: "Something went wrong",
          statuscode: "EB500",
        });
      }
});

/* 
    @route POST api/items
    @desc Gets all items
    @access public
*/
router.post("/", async (req, res) => {
    try {
      let item = new Item(req.body);
  
      let savedItem = await item.save();
  
      res.status(201).json({
        message: "Item has been created",
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        statuscode: "EB500",
      });
    }
  });

/* 
    @route GET api/items
    @desc Gets all items
    @access public
*/
router.get("/", async (req, res) => {
    try {
        let items = await Item.find()

        res.status(200).json({
            count: items.length,
            items,
        });
    } catch (err) {
        res.status(500).json({
            message: "something went wrong",
            statuscode: "EB500",
        });
    }
});

module.exports = router;
