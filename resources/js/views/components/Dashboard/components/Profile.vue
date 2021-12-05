<template>
    <div>
        <div class="rounded-lg mb-4 p-2 shadow-lg bg-white hidden md:grid grid-cols-4">
            <div class="text-xl font-bold text-gray-500">{{ translation.dashboard.about_you }}</div>
            <div>
                <div>{{ translation.dashboard.name }}</div>
                <div>{{ translation.dashboard.email }}</div>
                <div>{{ translation.dashboard.phone }}</div>
            </div>
            <div>
                <div>{{currentUser.name}} {{currentUser.lastname}}</div>
                <div>{{currentUser.email}}</div>
                <div>{{currentUser.phone}}</div>
            </div>
        </div>

        <!-- Mobile version -->
        <div class="md:hidden rounded-lg mb-4 p-2 shadow-lg bg-white">
            <div class="text-xl font-bold text-gray-500">{{ translation.dashboard.about_you }}</div>
            <div class="flex">
                <div>
                    <div>{{ translation.dashboard.name }}</div>
                    <div>{{ translation.dashboard.email }}</div>
                    <div>{{ translation.dashboard.phone }}</div>
                </div>
                <div class="ml-6">
                    <div>{{currentUser.name}} {{currentUser.lastname}}</div>
                    <div>{{currentUser.email}}</div>
                    <div>{{currentUser.phone}}</div>
                </div>
            </div>
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
