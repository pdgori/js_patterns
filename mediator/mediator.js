const Participant = function(name) {
    this.name = name;
    this.chatroom = null;
}

Participant.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

//Responsible to mediate all messages in the chat.
const Chatroom = function(){
    let participants = {};

    return{
        register: function(participant){
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function(message, from, to) {
            if (to){
                //single message
                to.receive(message, from);
            } else {
                //broadcast message
                for (key in participants){
                    if (participants[key] !== from){
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const phillipe = new Participant('Phillipe');
const jhon = new Participant('Jhon');
const alice = new Participant('Alice');

const chatroom = new Chatroom();
chatroom.register(phillipe);
chatroom.register(jhon);
chatroom.register(alice);

phillipe.send('Hey man!', jhon);
alice.send('Hey guys!');
jhon.send('Hey!');