<template>
    <div class="rounded-lg mb-4 p-2 shadow-lg bg-white grid grid-cols-4">
        <div class="text-xl font-bold text-gray-500">{{ translation.dashboard.about_you }}</div>
        <div class="">
            <div>{{ translation.dashboard.name }}</div>
            <div>{{ translation.dashboard.email }}</div>
            <div>{{ translation.dashboard.phone }}</div>
        </div>
        <div class="">
            <div>{{currentUser.name}} {{currentUser.lastname}}</div>
            <div>{{currentUser.email}}</div>
            <div>{{currentUser.phone}}</div>
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
