import Message from "../../models/Message.js";

const Query = {
    //Get All Messages
    messages: async () => {
        const messages = await Message.find();
        return messages;
    },
};

export default Query;