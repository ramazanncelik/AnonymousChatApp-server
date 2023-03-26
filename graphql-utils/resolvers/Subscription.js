import pubsub from '../pubsub.js'

const Subscription = {
    // Message
    messageCreated: {
        subscribe: () => {
            return pubsub.asyncIterator(['messageCreated']);
        }
    },
};

export default Subscription;