<template>
 <div class="search container">
  <div style = "text-align:center">
    <br/>
    <el-input v-model="filterInput" placeholder="search" prefix-icon = "el-icon-search" style="width:70%"></el-input>
    <br/>
    <br/>
    <el-button type="info" v-on:click = "exportexcel" size = "mini">Export</el-button>
  </div>
   <el-table
    :data="filterBy(customers,filterInput)"
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
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
        customers:[],
        filterInput:""
    }
  },
  methods:{
    fetchCustomers(){
      this.$http.get("http://localhost:3000/car")
          .then((response) => {
            this.customers = response.data;
            console.log(response);
          })
    },
    filterBy(customers,value){
      return customers.filter(function(customer){
        return customer.number.match(value);
      })
    },
    exportexcel(){
      console.log("hahahah");
      require.ensure([], () => {
                let { exportJsonToExcel } = require('../vendor/Export2Excel');
                let tHeader = ['Id','Type','Number', 'Start', 'End','Date','Time']; //对应表格输出的title
                let filterVal = ['id','type', 'number', 'start','date','end','time']; // 对应表格输出的数据
                let list = this.filterBy(this.customers,this.filterInput);
                const data = this.formatJson(filterVal, list);
                exportJsonToExcel(tHeader, data, 'Transporsition list'); //对应下载文件的名字
                this.$router.push({path:"/admin",query:{alert:"Export sussessfully"}});
                })
    },
    formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]));
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
      this.fetchCustomers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
