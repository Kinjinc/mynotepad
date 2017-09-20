import * as type from './mutations_types.js'
import func from '../function.js'

export default {
    [type.ADDEVENT](states,item) {
        states.id++
        item.id = states.id
        states.event.unshift(item)
        func.local.set(states)
    },

    [type.EVENTDONE](states,item) {
        for(let i = 0, len = states.event.length; i<len; i++) {
            if(states.event[i].id == item.id){
                states.event[i].type = 2
                states.event[i].time = func.getDate()
                item = states.event[i]
                states.event.splice(i,1)
                break
            }
        }
        states.event.unshift(item)
        func.local.set(states)
    },
    [type.EVENTTODO](states,item) {
        for(let i = 0, len = states.event.length; i < len; i++){
            if(states.event[i].id == item.id){
                states.event[i].type = 1
                states.event[i].time = func.getDate()
                item = states.event[i]
                states.event.splice(i,1)
                break
            }
        }
        states.event.unshift(item)
        func.local.set(states)
    },
    [type.EVENTCANCEL](states,item) {
        for(let i = 0, len = states.event.length; i < len; i++){
            if(states.event[i].id == item.id){
                states.event[i].type = 3
                states.event[i].time = func.getDate()
                item = states.event[i]
                states.event.splice(i,1)
                break
            }
        }
        states.event.unshift(item)
        func.local.set(states)
    },
    [type.CLEAREVENT](states){
        states.event = [];
        func.local.clear();
    },
}