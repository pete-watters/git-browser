import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    headers: {
        Authorization: "token d9849c6a97a55b5796a4f62eebf71311a43498fc"
    },

    updateRecord(store, type, snapshot) {
        const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
        return this.ajax(url, "PUT", {});
    }

});
