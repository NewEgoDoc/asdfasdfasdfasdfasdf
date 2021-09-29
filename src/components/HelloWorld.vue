<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      sensor : {
        "co2":0,
        "hcho":0,
        "humidity":0,
        "pm100":0,
        "pm25":0,
        "temperature":0
      }
    }
  },
  methods: {
    
  },
  created() {
    //this.setSensorData();
    axios.get("/msg/recent/100000006a1aa27d",{
      headers: {
          'serviceKey':'d495777b-b67e-4198-8881-fa5207b13136',
        },
        rejectUnauthorized : false
    }).then(res=>{
      console.log(res)
    }).catch(err => {
      console.log(err);
    });
  },
  name: 'SensorData',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
