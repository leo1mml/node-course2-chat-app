var socket = io();

socket.on('connect', function() {
   console.log('Connected to server');
    
   socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Yeap, that works for me'
    })
   
})
socket.on('disconnect', function() {
    console.log('disconnected to server');
})

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
})