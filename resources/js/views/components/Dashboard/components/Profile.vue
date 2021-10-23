<template>
    <div class="flex flex-col rounded-lg mb-4 p-2 shadow-lg bg-white">
        <div class="grid grid-cols-4 gap-4">
            <div>Name</div>
            <div>{{currentUser.name}} {{currentUser.lastname}}</div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div>Email</div>
            <div>{{currentUser.email}}</div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div>Phone</div>
            <div>{{currentUser.phone}}</div>
            <!-- <button class="hover:text-blue-900 text-blue-600 focus:outline-none">Change</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            phoneForm: false
        };
    },
    methods: {
        togglePhoneForm() {
            this.phoneForm = !this.phoneForm
        }
    }
}
</script>
