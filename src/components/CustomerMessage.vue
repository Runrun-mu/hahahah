<template>
  <div  class = "center-in-center">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span><strong>{{customer.name}}</strong></span>
  </div>
  <div class="text item">
    <i class="el-icon-user"></i>
    <strong>Id : </strong>{{customer.id}}
    <br/><br/>
    <i class="el-icon-more-outline"></i>
    <strong>Name : </strong>{{customer.name}}
    <br/><br/>
    <i class="el-icon-s-home"></i>
    <strong>telephone : </strong>{{customer.telephone}}
    <br/><br/>
    <i class="el-icon-s-flag"></i>
    <strong>Address : </strong>{{customer.address}}
    <br/><br/>
    <i class="el-icon-date"></i>
    <strong>CardId : </strong>{{customer.cardId}}
    <br/><br/>
    <i class="el-icon-time"></i>
    <strong>Age : </strong>{{customer.age}}
    <br/><br/>
    <i class="el-icon-s-fold"></i>
    <strong>Emailnumber : </strong>{{customer.emailnumber}}
    <br/><br/>
  </div>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'customermessage',
  data () {
    return {
        customer:{}
    }
  },
  methods:{
     fetchCustomers(id){
      this.$http.get("http://localhost:3000/people/"+id)
          .then((response) =>{
              console.log("hahaha");
            this.customer = response.data;
            console.log(response);
          })
    }
},
  created(){
      console.log("1111");
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
