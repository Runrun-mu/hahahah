<template>
<div class = "homepage container">
  <br/>
  <Alert v-if = "alert" v-bind:message = "alert"></Alert>
  <el-table
    :data="customers"
    align = 'center'
    style="width: 100%">
    <el-table-column
      label="Type"
      width="180">
      <template slot-scope="scope">
        <i v-bind:class = "iconclass(scope.row.type)"></i>
        <span style="margin-left: 10px">{{ scope.row.type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="location"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Start: {{ scope.row.start }}</p>
          <p>End: {{ scope.row.end }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.start }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Date"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Time"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Number"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.number}}</span>
      </template>
    </el-table-column>
    <el-table-column label="Function">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handledetail(scope.row.id)">detail</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'homepage',
  data () {
    return {
      customers:[],
      alert:""
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get("http://localhost:3000/car")
          .then((response) => {
            this.customers = response.data;
           // console.log(response);
          })
    },
    handledetail(id){
      this.$router.push({path:"/admin/car/"+id});
    },
    handleDelete(id){
      this.$http.delete("http://localhost:3000/car/"+id)
          .then((response)=>{
            this.$router.push({path:"/admin",query:{alert:"delete sussesfully"}});
          })
    },
    iconclass(type){
      if(type === "Plane"){
        return "el-icon-s-promotion";
      }
      else if(type === "Railway"){
        return "el-icon-truck";
      }
      else if (type === "Ship"){
        return "el-icon-ship";
      }
    }
  },
  created(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
        console.log(this.alert);
        console.log(this.$route.query.alert);
      }
      this.fetchCustomers();
  },
  updated(){
      this.fetchCustomers();
  },
  components:{
    Alert,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
