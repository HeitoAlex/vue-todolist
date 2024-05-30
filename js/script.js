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
            ]

        }
    },
    methods: {
        switchDone : function(itemIndex){
            this.toDoList[itemIndex].done = !this.toDoList[itemIndex].done;
        },

        
    }
    }).mount('#app')