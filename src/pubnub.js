import PubNub from 'pubnub';
import pubnubconfig from './pubnub.config.json'

const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

function PubSub() {
    const pubNub = new PubNub(pubnubconfig);

    pubNub.subscribe({channels: [MESSAGE_CHANNEL]});

    this.addListener = config => {
        pubNub.addListener(config)
    };

    this.publish = message => {
        console.log('message', message)
        pubNub.publish({
            message: message,
            channel: MESSAGE_CHANNEL,
        })
    }
}
export default PubSub;

