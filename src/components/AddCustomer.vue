<template>
  <div  class = "center-in-center">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>{{customer.number}}</span>
    <el-button style="float: right; padding: 3px 5px" type="text" v-on:click = "addCustomer" size = 'mini' plain>Submit</el-button>
  </div>
  <div class="text item">
    <el-form label-width="80px" :model="customer">
    <el-form-item label="Id">
            <i class="el-icon-user"></i>
            <el-input v-model="customer.id"></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <i class="el-icon-s-fold"></i>
            <el-input v-model="customer.name"></el-input>
          </el-form-item>
          <el-form-item label="Telephone">
            <i class="el-icon-s-home"></i>
            <el-input v-model="customer.telephone"></el-input>
          </el-form-item>
          <el-form-item label="Address">
            <i class="el-icon-s-flag"></i>
            <el-input v-model="customer.address"></el-input>
          </el-form-item>
          <el-form-item label="CardId">
            <i class="el-icon-more-outline"></i>
            <el-input v-model="customer.cardId"></el-input>
          </el-form-item>
          <el-form-item label="Age" >
            <i class="el-icon-date"></i>
            <el-input v-model="customer.age" aria-placeholder="xxxx-xx-xx"></el-input>
          </el-form-item>
          <el-form-item label="Emailnumber">
            <i class="el-icon-time"></i>
            <el-input v-model="customer.emailnumber"></el-input>
          </el-form-item>
    </el-form>
  </div>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'addcustomer',
  data () {
    return {
        customer:{},
        alert:""
    }
  },
  methods:{
      addCustomer(e){
          if(!this.customer.id || !this.customer.name || !this.customer.telephone || !this.customer.address||!this.customer.cardId||!this.customer.age||!this.customer.emailnumber){
              this.alert = "Please enter right message";
          }else{
              let newCustomer = {
                  id:this.customer.id,
                  name:this.customer.name,
                  telephone:this.customer.telephone,
                  address:this.customer.address,
                  cardId:this.customer.cardId,
                  age:this.customer.age,
                  emailnumber:this.customer.emailnumber
              }
              this.$http.post("http://localhost:3000/people",newCustomer)
                .then((response) => {
                    this.$router.push({path:"/customer/detail/"+this.customer.id});
              })
            e.preventDefault();
          }
          e.preventDefault();
      }
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
