import ActionCable from 'actioncable'
//const WS_HOST = process.env.WS_HOST || 'http://localhost:28080'
const WS_HOST = process.env.WS_HOST || 'http://localhost:3000'

const WebNotifications = {
  create(authToken) {
    if (window.App === undefined) window.App = {}

      window.App.cable = ActionCable.createConsumer(`${WS_HOST}/subscriptions?jwt=${authToken}`) 
  },

  subscribe(received) {
    this.unsubscribe();
    window.App.cable.test = received
    window.App.WebNotificationsSubscription = window.App.cable.subscriptions.create({
      channel: 'MessagesChannel',
    }, {
      received: received
    });
  },

  unsubscribe() {
    if (window.App.WebNotificationsSubscription === undefined) {
      return false;
    }

    window.App.cable.subscriptions.remove(window.App.WebNotificationsSubscription);
    delete window.App.WebNotificationsSubscription
  }
}

export default WebNotifications
