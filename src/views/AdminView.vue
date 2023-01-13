<template>
    <h1>Admin Dashboard</h1>

    <!-- Be able to view all blog posts -->
    <!-- Be able to Add/Update/Delete Blog Posts -->
    <h2>Blog Posts</h2>
    <AdminBlogPostTable class="admin-table-container"></AdminBlogPostTable>

    <BaseButton text="Add New Post" class="new-post-button" @click="addPost"></BaseButton>

    <BaseDialog v-if="showAddPostDialog">
        <h2>New Blog Post</h2>

        <div class="wrapper">
            <form class="add-post-form">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" placeholder="Post Title">
            </form>

            <div class="actions">
                <BaseButton text="Cancel" @click="closeDialog"></BaseButton>
                <BaseButton text="Add Post"></BaseButton>
            </div>
        </div>
        

        
    </BaseDialog>

    <BaseDialog v-if="postSuccess">
        <h2>Your Post was Successfully Added!</h2>
        <BaseButton text="close"></BaseButton>
    </BaseDialog>
</template>

<script>
import AdminBlogPostTable from '@/components/admin/AdminBlogPostTable.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';

export default {
    components: { AdminBlogPostTable, BaseButton, BaseDialog },
    data() {
        return {
            addPostClicked: false,
            addPostSuccess: false
        }
    },
    methods: {
        addPost() {
            this.addPostClicked = true;
            console.log("Add Post button clicked");
        },
        // Get ready to update this method to account for the post-success dialog.
        closeDialog() {
            this.addPostClicked = false;
        }
    },
    computed: {
        showAddPostDialog() {
            return this.addPostClicked;
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 48px;
    margin-top: 5rem;
}

h1,
h2 {
    font-family: 'Times New Roman', Times, serif;
}

h2 {
    font-size: 32px;
}

.admin-table-container {
    width: 80%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 2rem;
}

.new-post-button {
    margin-top: 2rem;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.add-post-form {
    padding: 1rem;
    border: 1px solid black;
    text-align: left;
}

input[type='text'] {
    display: block;
}
</style>