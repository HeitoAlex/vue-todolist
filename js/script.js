const { createApp } = Vue

    createApp({
        data() {
        return {
            toDoList:[
                {
                    text: 'Cavalcare un drago vestito da indiano',
                    done: false
                },{
                    text: 'Conquistare Kepler-22b',
                    done: false
                },{
                    text: 'Entrare nella ciurma di One Piece',
                    done: false
                },{
                    text: 'Discutere di filosofia con Satana',
                    done: false
                }
            ],
            newTaskText: '',
        }
    },
    methods: {
        switchDone: function(itemIndex){
            this.toDoList[itemIndex].done = !this.toDoList[itemIndex].done;
        },

        addTask : function(newText){
            const newTask = {
                text: newText,
                done: false
            };

            this.toDoList.push(newTask);
            this.clearTaskInput();
        },

        clearTaskInput(){
            this.newTaskText = '';
        },

        deleteTask: function(taskIndex){
            this.toDoList.splice(taskIndex, 1);
        }
    }
    }).mount('#app')