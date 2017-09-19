class localEvent{
    constructor(item){
        this.item = item
    }
    get(){
        return localStorage.getItem(this.item)?JSON.parse(localStorage.getItem(item)) : ''
    }
    set(obj){
        localStorage.setItem(this.item, JSON.stringify(obj));
    }
    clear(){
        localStorage.removeItem(this.item)
    }
}

export const local = new localEvent('lx_notepad')
export const theme = new localEvent('lx_theme')
export const getDate = () => {
    const date = new Date()
     month = date.getMonth+1
     return date.getFullYear() + '-' + mouth + '-' + date.getDate();
}