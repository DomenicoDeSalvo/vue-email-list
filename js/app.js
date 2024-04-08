const {createApp} = Vue

createApp({
    data(){
        return{
            mails: []
        }
    },

    methods: {
        getEmails(n){
            for(let i = 0; i < n; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.mails.push(response.data.response)
                })
            
            }
        }

    },

    created(){
        this.getEmails(10)
    }

}).mount('#app')