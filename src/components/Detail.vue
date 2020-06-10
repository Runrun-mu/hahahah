<template>
  <div  class = "center-in-center">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>{{customer.number}}</span>
    <el-button style="float: right; padding: 3px 5px" type="text" v-on:click = "deletecustomer(customer.id)" size = 'mini' plain>Delete</el-button>
    <el-button style="float: right; padding: 3px 0" type="text" v-on:click = "editMessage(customer.id)" size = 'mini' plain>Edit</el-button>
  </div>
  <div class="text item">
    <i class="el-icon-user"></i>
    Id:{{customer.id}}
    <br/><br/>
    <i class="el-icon-more-outline"></i>
    Number:{{customer.number}}
    <br/><br/>
    <i class="el-icon-s-home"></i>
    Start:{{customer.start}}
    <br/><br/>
    <i class="el-icon-s-flag"></i>
    End:{{customer.end}}
    <br/><br/>
    <i class="el-icon-date"></i>
    Date:{{customer.date}}
    <br/><br/>
    <i class="el-icon-time"></i>
    Time:{{customer.time}}
    <br/><br/>
    <i class="el-icon-s-fold"></i>
    Type:{{customer.type}}
    <br/><br/>
  </div>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
        customer:""
    }
  },
  methods:{
     fetchCustomers(id){
      this.$http.get("http://localhost:3000/car/"+id)
          .then((response) =>{
            this.customer = response.data;
            console.log(response);
          })
    },
    deletcustomer(id){
      this.$http.delete("http://localhost:3000/car/"+id)
          .then((response) =>{
            this.$router.push({path:"/admin",query:{alert:"delete sussesfully"}});
          })
    },
    editMessage(id){
      this.$router.push({path:"/admin/edit/"+id});
    }
  },
  created(){
      this.fetchCustomers(this.$route.params.id);
  }     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
	* {
		margin: 0;
		padding: 0;
	}
	.center-in-center {
		position: absolute;
		top: 15%;
		left: 35%;
	}
</style>
