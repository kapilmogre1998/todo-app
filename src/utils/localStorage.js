

export const loadData = (key)=>{
        let value = localStorage.getItem(key);
        value = JSON.parse(value);
        return value
}

export const saveData = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}