<template>
    <div>
        <button class=" btn" @click='getAllUsers'> getallusers</button>
    </div>
</template>

<script>
    export default {
        name: 'allUsers',
        methods:{
            getAllUsers(){
                this.$emit('getAllUsers');
            },
            
        }
    }
</script>