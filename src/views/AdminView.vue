<template>
    <h1>Admin Dashboard</h1>

    <!-- Be able to view all blog posts -->
    <!-- Be able to Add/Update/Delete Blog Posts -->
    <h2>Blog Posts</h2>
    <AdminBlogPostTable class="admin-table-container"></AdminBlogPostTable>


</template>

<script>
import AdminBlogPostTable from '@/components/admin/AdminBlogPostTable.vue';
export default {
    components: { AdminBlogPostTable }
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
</style>