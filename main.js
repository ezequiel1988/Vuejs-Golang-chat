const socket = io();


new Vue({

el: "#chat-app",
created(){
socket.on("chat message", (msg) => {
  console.log(msg)
  this.messages.push({
    text: msg,
    date: new Date().toLocaleString()
  })
});
},
data: {
  message:  '',
  messages: []
},
methods: {
sendMessage(){
socket.emit('chat message', this.message);
this.message = "";
}
}

})
