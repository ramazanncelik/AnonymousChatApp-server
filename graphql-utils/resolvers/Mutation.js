import pubsub from '../pubsub.js'
import Message from "../../models/Message.js";

const Mutation = {
    // Message
    createMessage: async (_, { data }) => {
        try {
            const message = new Message(data);
            await message.save();
            pubsub.publish("messageCreated", { messageCreated: message });
            return true;
        } catch (error) {
            return error;
        }
    },
};

export default Mutation;