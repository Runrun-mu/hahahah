<template>
  <div class="add container">
      <Alert v-if = "alert" v-bind:message = "alert"></Alert>
      <br/>
      <el-header style="text-align:center;font-size:45px">Email</el-header>
      <div style="margin: 20px;"></div>
      <el-form label-position="top" label-width="80px">
          <el-form-item label="Poster">
            <i class="el-icon-more-outline"></i>
            <el-input v-model="poster"></el-input>
          </el-form-item>
          <el-form-item label="Content">
            <i class="el-icon-date"></i>
            <el-input
              type="textarea"
              autosize
              placeholder="enter your message"
              v-model="content">
            </el-input>
          </el-form-item>
      </el-form>
      <div style="text-align:center">
      <el-button type="info" v-on:click = "postemail" size = 'mini' plain>Send</el-button>
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
        customers:[],
        content:"enter your message",
        receivers:[],
        poster:"asdasdasd",
        alert:""
    }
  },
  methods:{
    getcustomers(){
      this.$http.get("http://localhost:3000/people")
          .then((response) => {
            //console.log(response.data);
            this.customers = response.data;
          })
    },
    postemail(e){
          if(!this.poster||!this.content){
              this.alert = "please enter your message";
          }else{
              var j = 0;
              var len = 0;
              for(j = 0,len = this.customers.length;j<len;j++){
                console.log(this.customers[j].emailnumber);
                this.receivers[j] = this.customers[j].emailnumber;
              }
                //console.log(this.receivers);
              let newmessage = {
                  message:this.content,
                  poster:this.poster,
                  receiver:this.receivers,
                  id:"1"
              }
              this.$http.put("http://localhost:3000/email/1",newmessage)
                .then((response) => {
                    this.$router.push({path:"/admin",query:{alert:"Post sussessfully"}});
              })
            e.preventDefault();
          }
          e.preventDefault();
      }
  },
  created(){
    this.getcustomers();
  },
  components:{
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
