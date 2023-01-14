<template>
    <h1>Admin Dashboard</h1>

    <!-- Be able to view all blog posts -->
    <!-- Be able to Add/Update/Delete Blog Posts -->
    <h2>Blog Posts</h2>
    <AdminBlogPostTable class="admin-table-container"></AdminBlogPostTable>

    <BaseButton text="Add New Post" class="new-post-button" @click="addPostForm"></BaseButton>

    <BaseDialog v-if="showAddPostDialog" data-aos="fade-in">
        <h2>New Blog Post</h2>

        <div class="wrapper">
            <form class="add-post-form">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Post Title" v-model="newPostTitle" required>
                </div>

                <div class="form-control">
                    <label for="content">Content</label>
                    
                    <editor
                        api-key="qqp7tw1f6mpzzd58de4yvwi6iyin9fcwysfspsn7e547xb0a"
                        v-model="newPostContent"
                        required
                        :init="{
                            height: 500,
                            menubar: false,
                            plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                        }"
                    >

                    </editor>
                </div>
            </form>

            <div class="actions">
                <BaseButton text="Add Post" @click="addPost"></BaseButton>
                <BaseButton text="Cancel" @click="closeDialog"></BaseButton>
            </div>
        </div>
    </BaseDialog>

    <BaseDialog v-if="postSuccess">
        <h2>Your Post was Successfully Added!</h2>
        <BaseButton text="close" @click="confirmAddedPost"></BaseButton>
    </BaseDialog>
</template>

<script>
import AdminBlogPostTable from '@/components/admin/AdminBlogPostTable.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import Editor from '@tinymce/tinymce-vue';
import { collection, addDoc } from 'firebase/firestore';
import db from '@/firebaseInit';

export default {
    components: { AdminBlogPostTable, BaseButton, BaseDialog, Editor },
    data() {
        return {
            addPostClicked: false,
            addPostSuccess: false,
            newPostTitle: '',
            newPostContent: ''
        }
    },
    methods: {
        addPostForm() {
            this.addPostClicked = true;
        },
        // This method actually adds the post to the collection.
        async addPost() {
            try {
                // Create data to push to database
                let data = {
                    title: this.newPostTitle,
                    content: this.newPostContent,
                    date: new Date().toDateString()
                }

                //Push to database
                const docRef = await addDoc(collection(db, 'posts'), data);
                console.log("Post added with id of: " + docRef);

                // Reset the form
                this.newPostTitle = this.newPostContent = '';
                this.addPostSuccess = true;
            }
            catch(error) {
                console.error(error);
            }
            
        },
        // Get ready to update this method to account for the post-success dialog.
        closeDialog() {
            this.addPostClicked = false;
        },
        confirmAddedPost() {
            this.addPostSuccess = false;
        }
    },
    computed: {
        showAddPostDialog() {
            return this.addPostClicked;
        },
        postSuccess() {
            return this.addPostSuccess;
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
    display: flex;
    flex-direction: column;
}

.add-post-form {
    padding: 1rem;
    border: 1px solid black;
    text-align: left;
    width: 100%;
}

.actions {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
}

input[type='text'],
textarea {
    display: block;
    width: 100%;
}

.form-control {
    width: 80%;
    margin: 1rem auto;
}
</style>