# vue-count-to-array
vue-count-to-array is a modification of vue-count-to that is fully compatible with all the functionalities of vue-count-to. In most cases, you only need to replace the dependency package to use it. For example, instead of importing countTo from “vue-count-to”, you can import it from “vue-count-to-array” to replace it completely.

A new property called showByArray has been added, which allows you to display the numbers as an array instead of a single value. This enables you to apply different styles to each number to meet the UI requirements.

## How to use?

```javascript
npm install vue-count-to-array
```

## Example
```
<template>
  <countTo :startVal='startVal' :endVal='endVal' :duration='3000' :showByArray='true'></countTo>
</template>
 
<script>
  import countTo from 'vue-count-to-array';
  export default {
    components: { countTo },
    data () {
      return {
        startVal: 0,
        endVal: 2017
      }
    }
  }
</script>
```

## Options
|Property | Description | type |default|
|---------|-------------|:------:|:------:|
|startVal | the value you want to begin at | Number |0|
|endVal | the value you want to arrive at | Number |2017|
|duration	|duration in millisecond	|Number|	3000|
|autoplay	|when mounted autoplay	|Boolean|	true|
|decimals	|the number of decimal places to show	|Number	|0|
|decimal	|the split decimal	|String	|.|
|separator	|the separator	|String	|,|
|showByArray	|The flag indicating whether to display as an array mode.	|Boolean|	false|
|prefix	|the prefix	|String	|''|
|suffix	|the suffix	|String	|''|
|useEasing	|is use easing function	|Boolean	true|
|easingFn	|the easing function	|Function|	—|

**notes: when autoplay:true , it will auto start when startVal or endVal change**

## Functions
|Function Name|	Description|
|---------|-------------|
|mountedCallback|	when mounted will emit mountedCallback|
|start	|start the countTo|
|pause	|pause the countTo|
|reset	|reset the countTo|


