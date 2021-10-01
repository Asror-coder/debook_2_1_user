<template>
    <div class="flex flex-col rounded-lg mb-4 p-2 shadow-lg">
        <div class="grid grid-cols-4 gap-4">
            <div>Name</div>
            <div>{{user.name}} {{user.lastname}}</div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div>Email</div>
            <div>{{user.email}}</div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div>Phone</div>
            <div>{{user.phone}}</div>
            <!-- <button class="hover:text-blue-900 text-blue-600 focus:outline-none">Change</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            user: Object,
            phoneForm: false
        };
    },
    methods: {
        togglePhoneForm() {
            this.phoneForm = !this.phoneForm
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user')).user
    }
}
</script>
