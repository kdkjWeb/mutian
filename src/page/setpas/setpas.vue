<template>
  <div class="setpas">
      <div class="phone">
            <span>设置密码</span>
            <input type="number" placeholder="请输入新密码">
      </div>

      <div class="next_btn">下一步</div>
  </div>
</template>


<script>
export {default} from './setpasCtr'
</script>


<style>
.setpas{
    padding-top: 1.1rem;
}


.phone{
    position: relative;
    width: 100%;
    height: 1rem;
    background-color: #fff;
    margin: .3rem 0 .3rem;
    line-height: 1.05rem;
}
.phone span{
    position: absolute;
    left: .25rem;
    top: .1rem;
    font-size: .32rem;
}
.phone input{
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 100%;
    padding-left: 1.8rem;
    outline: none;
    border: none;
    box-sizing: border-box;
}

.next_btn{
    font-size: .36rem;
    text-align: center;
    line-height: .85rem;
    width: 7.2rem;
    height: .85rem;
    background: #bcbcbc;
    margin: .55rem auto 0;
    border-radius: .12rem;
    color: #fff;
}


</style>

