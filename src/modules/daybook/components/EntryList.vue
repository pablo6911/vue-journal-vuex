<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text" class="form-control" placeholder="Buscar entrada" v-model="term">
    </div>
    <div class="entry-scrollarea">
        <Entry
            v-for="entry in entriesByterm"
            :key="entry.id"
            :entry="entry"
        />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';

export default{
    name: 'EntryList',
    data() {
        return {
            term:''
        }
    },
    components: {
        Entry: defineAsyncComponent(()=> import('./Entry.vue'))
    },
    computed: {
        ...mapGetters('journal',['getEntriesByterm']),
        entriesByterm(){
           return this.getEntriesByterm(this.term)
        }
    }

}
</script>

<style lang="scss" scoped>
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 57px );
    // background: red;
}
.entry-scrollarea{
    height: calc(100vh - 102px );
    // background: blue($color: #000000);
    overflow: scroll;
}
</style>