import { post, get } from '../axios'

export default {
    list: function(params) {
        return post(params, '/tweet/list')
    }
}