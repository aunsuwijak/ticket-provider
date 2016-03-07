import Backbone from '../backbone.jsx';
import Store from './store.jsx'
import emitter from '../emitter.jsx'
import constant from '../constants/organizer-constants.jsx';
import $ from 'jquery'

class Organizer extends Store.Model {
  url() {
    return '/api/v1/organizers/me';
  }

  parse(resp, xhr) {
    return resp.organizer;
  }

  getModel() {
    let jqXHR = this.fetch();
    return this;
  }

  handleDispatch(payload) {
    let jqXHR = this
      .fetch({
        url: `/api/v1/organizers/${payload.organizer.id}`,
        data: $.param({ organizer: payload.organizer }),
        type: 'PUT'
      });

    jqXHR.done(() => {
      emitter.emit('success', I18n.t('backend.organizers.success_update'));
    });

    jqXHR.fail((jqXHR, textStatus, errorThrown) => {
      emitter.emit('error', jqXHR.responseJSON.errors[0]);
    });
  }
};

export default new Organizer();