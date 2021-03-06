import Ember from 'ember';

export default Ember.Controller.extend({
  message: 'Notification message',
  type: 'success',
  autoClear: true,
  clearDuration: 2400,
  htmlContent: false,

  actions: {
    showNotifcation() {
      if(this.get('clearAll')) {
        this.notifications.clearAll();
      }
      this.notifications.addNotification({
        message: this.get('message'),
        type: this.get('type'),
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration'),
        htmlContent: this.get('htmlContent')
      });
    }
  }
});
