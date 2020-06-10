<template>
  <div class="edit container">
      <div style="font-size:40px;text-align:center">
          <el-header font-size = "">{{customer.number}}</el-header>
      </div>
      <el-form :label-position="labelPosition" label-width="80px" :model="customer">
          <el-form-item label="Id">
            <i class="el-icon-user"></i>
            <el-input v-model="customer.id"></el-input>
          </el-form-item>
          <el-form-item label="Type">
            <i class="el-icon-s-fold"></i>
            <el-input v-model="customer.type"></el-input>
          </el-form-item>
          <el-form-item label="Start">
            <i class="el-icon-s-home"></i>
            <el-input v-model="customer.start"></el-input>
          </el-form-item>
          <el-form-item label="End">
            <i class="el-icon-s-flag"></i>
            <el-input v-model="customer.end"></el-input>
          </el-form-item>
          <el-form-item label="Number">
            <i class="el-icon-more-outline"></i>
            <el-input v-model="customer.number"></el-input>
          </el-form-item>
          <el-form-item label="Date">
            <i class="el-icon-date"></i>
            <el-input v-model="customer.date"></el-input>
          </el-form-item>
          <el-form-item label="Time">
            <i class="el-icon-time"></i>
            <el-input v-model="customer.time"></el-input>
          </el-form-item>
      </el-form>
      <div style="text-align:center">
      <el-button type="info" v-on:click = "updateCustomer" size = 'mini' plain>Submit</el-button>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
        labelposition:'top',
        customer:{}
    }
  },
  methods:{
      newcustomer(id){
          this.$http.get("http://localhost:3000/car/"+id)
                .then((response) => {
                    this.customer = response.data;
                })
      },
      updateCustomer(e){
          if(!this.customer.id || !this.customer.type || !this.customer.time || !this.customer.date||!this.customer.end||!this.customer.number||!this.customer.start){
              alert("please enter your message");
          }else{
              let updateCustomer = {
                  id:this.customer.id,
                  date:this.customer.date,
                  time:this.customer.time,
                  end:this.customer.end,
                  number:this.customer.number,
                  start:this.customer.start,
                  type:this.customer.type
              }
              this.$http.put("http://localhost:3000/car/" + this.$route.params.id,updateCustomer)
                .then((response) => {
                    this.$router.push({path:"/admin",query:{alert:"change sussessfully"}});
              })
            e.preventDefault();
          }
          e.preventDefault();
      }
  },
  created(){
      this.newcustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
