<template>
    <table class="blog-post-table">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Date Posted</th>
                <th scope="col">Content</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>

        <tbody>
            <!-- Create a row for every blog post in the database -->
            <tr v-for="post in posts" :key="post.id">
                <AdminTableRow 
                :post="post"
                @button-clicked="handleClick"
                >
                </AdminTableRow>
            </tr>
        </tbody>
    </table>
</template>

<script>
import db from '@/firebaseInit';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import AdminTableRow from '@/components/admin/AdminTableRow.vue';
export default {
    components: { AdminTableRow },
    data() {
        return {
            posts: []
        }
    },

    methods: {
        edit(id) {
            console.log('Edit Button clicked. id = ' + id);
            this.updateTable(id);
        },

        async delete(id) {
            // Delete from database
            await deleteDoc(doc(db, 'posts', id));

            alert('Deleted post with id of:' + id);

            // Delete from posts data property.
            const index = this.posts.map( (element) => {
                return element.id;
            }).indexOf(id);
            this.posts.splice(index, 1);
        },

        // Need to implement edit and delete operations.
        handleClick(buttonType, id) {
            if(buttonType === 'delete')
                this.delete(id);
            else if(buttonType === 'edit')
                this.edit(id);
            else if(buttonType === 'view')
                this.$router.push('/article/' + id);
        },

        updateTable(id) {
            // Need to call on the database again so that the posts data property can be updated.
            // Since the database is updated, I can manipulate the posts data property to reflect the database's change without having to call from the database again.
            console.log("Update Table not yet implemented. id = " + id);
        }
    },

    async created() {
        // Get the information from the datastore
        const querySnapshot = await getDocs(collection(db, 'posts'));
        querySnapshot.docs.map( (doc) => {
            // Ensuring the document id is part of the data being pushed to posts array as well.
            let data = doc.data();
            data.id = doc.id;
            this.posts.push(data);
        });
    }
}
</script>

<style scoped>

</style>