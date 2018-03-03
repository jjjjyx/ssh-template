define(function () {
    console.log("sock");
    let socket = null;
    const _eventCallbacks = {};
    function connect(host){
        return new Promise((resolve, reject)=>{
            if ('WebSocket' in window) {
                socket = new WebSocket(host);
            } else if ('MozWebSocket' in window) {
                socket = new MozWebSocket(host);
            } else {
                console.error('Error: WebSocket is not supported by this browser.');
                return reject('Error: WebSocket is not supported by this browser.');
            }

            socket.onopen = function () {
                console.log('Info: WebSocket connection opened.');
                resolve("success");
            };
            socket.onerror = function(e) {
                console.log(e);
            };
            socket.onmessage = function(message){
                let [name, data] = JSON.parse(message.data);
                // console.debug(name,data)
                fire(name,data);
            }
            socket.onclose = function () {
                console.log('Info: WebSocket connection close.');
            }
        });
    }

    function close(){
        socket.close();
    }

    function fire(name,data) {
        let callbacks = _eventCallbacks[name.toLowerCase()] || [];

        if (callbacks.length === 0) {
            return;
        }

        for (let i = 0; i < callbacks.length; i++) {
            callbacks[i].call(this, data);
        }
    }

    function listen(type, callback) {
        let callbacks = _eventCallbacks[type] || (_eventCallbacks[type] = []);
        callbacks.push(callback);
    }
    
    return {
        init: ()=>{
            return connect(`ws${window.location.protocol == 'http:'?'':'s'}://${window.location.host}${config.remote.root}/ws`);
        },
        sendMessage:(text)=>{
            socket.send(text);
        },
        close,
        on(name ,callback) {
            let names = name.split(/\s+/);
            names.forEach((n)=>{
                listen(n.toLowerCase(), callback);
            })
            return this;
        },
        off(name, callback){
            let types = name.split(/\s+/);
            let i, j, callbacks, removeIndex;

            for (i = 0; i < types.length; i++) {

                callbacks = _eventCallbacks[types[i].toLowerCase()];
                if (callbacks) {
                    removeIndex = null;
                    for (j = 0; j < callbacks.length; j++) {
                        if (callbacks[j] == callback) {
                            removeIndex = j;
                        }
                    }
                    if (removeIndex !== null) {
                        callbacks.splice(removeIndex, 1);
                    }
                }
            }
        },
        once(name,callback){
            let self = this;
            let listener = function() {
                if (callback) {
                    callback.apply(this, arguments);
                }
                self.off(name,listener);
            };
            return this.on(name, listener);
        }
    }
});