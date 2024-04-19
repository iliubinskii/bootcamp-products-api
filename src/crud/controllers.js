export default function crudControllers(crudService) {
    return {
        getItems: async (req, res, next) => {
            try {
                const items = await crudService.getItems();
                res.json(items);
            } catch (err) {
                next(err);
            }
        },
        getItemById: async (req, res, next) => {
            try {
                const item = await crudService.getItemById(req.params.id);
                if (!item) {
                    return res.status(404).json({ error: "Item not found" });
                }
                res.json(item);
            } catch (err) {
                next(err);
            }
        },
        updateItem: async (req, res, next) => {
            try {
                const item = await crudService.updateItem(req.params.id, req.body);
                if (!item) {
                    return res.status(404).json({ error: "Item not found" });
                }
                res.json(item);
            } catch (err) {
                next(err);
            }
        },
        createItem: async (req, res, next) => {
            try {
                const item = await crudService.createItem(req.body);
                res.status(201).json(item);
            } catch (err) {
                next(err);
            }
        },
        deleteItem: async (req, res, next) => {
            try {
                const item = await crudService.deleteItem(req.params.id);
                if (!item) {
                    return res.status(404).json({ error: "Item not found" });
                }
                res.status(200).json(item);
            } catch (err) {
                next(err);
            }
        },
    };
}