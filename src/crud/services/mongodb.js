export default function createMongodbService(mongooseModel, logger) {
    return {
        getItems: async () => {
            try {
                return await mongooseModel.find({});
            } catch (err) {
                logger.error(err);
                throw err;
            }
        },
        getItemById: async (id) => {
            try {
                const data = await mongooseModel.findById(id);
                if (!data) {
                    throw new Error("Data not found");
                }
                return data;
            } catch (err) {
                logger.error(err);
                throw err;
            }
        },
        createItem: async (body) => {
            try {
                const data = new mongooseModel(body);
                await data.save();
                return data;
            } catch (err) {
                logger.error(err);
                throw err;
            }
        },
        updateItem: async (id, body) => {
          try {
              const data = await mongooseModel.findByIdAndUpdate(id, body, { new: true });
              if (!data) {
                  throw new Error("Data not found");
              }
              return data;
          } catch (err) {
              logger.error(err);
              throw err;
          }
      },
        deleteItem: async (id) => {
            try {
                return await mongooseModel.findByIdAndDelete(id);
            } catch (err) {
                logger.error(err);
                throw err;
            }
        },
    };
}