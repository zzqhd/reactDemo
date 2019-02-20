var MyStorage = {

    setStorage(key,value) {
        localStorage.setItem(key,JSON.stringify(value));
    },

    getStorage(key) {
       return JSON.parse(localStorage.getItem(key));
    },

    remove (key) {
        localStorage.removeItem(key);
    },
};

//忘记export
export default MyStorage;