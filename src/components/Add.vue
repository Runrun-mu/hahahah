<template>
  <div class="add container">
      <Alert v-if = "alert" v-bind:message = "alert"></Alert>
      <br/>
      <div style="text-align:center">
      <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">Left</el-radio-button>
          <el-radio-button label="right">Right</el-radio-button>
          <el-radio-button label="top">Center</el-radio-button>
      </el-radio-group>
      </div>
      <div style="margin: 20px;"></div>
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
          <el-form-item label="Date" >
            <i class="el-icon-date"></i>
            <el-input v-model="customer.date" aria-placeholder="xxxx-xx-xx"></el-input>
          </el-form-item>
          <el-form-item label="Time">
            <i class="el-icon-time"></i>
            <el-input v-model="customer.time"></el-input>
          </el-form-item>
      </el-form>
      <div style="text-align:center">
      <el-button type="info" v-on:click = "addCustomer" size = 'mini' plain>Add</el-button>
      </div>
      <br/>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
        labelPosition: 'right',
        customer:{},
        alert:""
    }
  },
  methods:{
      addCustomer(e){
          if(!this.customer.id || !this.customer.type || !this.customer.time || !this.customer.date||!this.customer.end||!this.customer.number||!this.customer.start){
              this.alert = "Please enter right message";
          }else{
              let newCustomer = {
                  id:this.customer.id,
                  date:this.customer.date,
                  time:this.customer.time,
                  end:this.customer.end,
                  number:this.customer.number,
                  start:this.customer.start,
                  type:this.customer.type
              }
              this.$http.post("http://localhost:3000/car",newCustomer)
                .then((response) => {
                    this.$router.push({path:"/admin",query:{alert:"Add sussessfully"}});
              })
            e.preventDefault();
          }
          e.preventDefault();
      }
  },
  components:{
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
