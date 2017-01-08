import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    headers: {
        Authorization: "token 2f3eff6b4e40a316fb5c8f5ff73b605673cfe189"
    },

    updateRecord(store, type, snapshot) {
        const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
        return this.ajax(url, "PUT", {});
    }

});
