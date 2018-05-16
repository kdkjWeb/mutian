<template>
	<div class="twocode">
		<mt-header title="推广二维码">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		
		<div class="bg">
			
		</div>
		
	</div>
</template>

<script>
	export {default} from './twocodeCtr'
</script>

<style>
	/*mint ui样式覆盖*/
	.mint-header {
		background-color: #FFFFFF;
		color: #000000;
	}
	.mint-header-title {
		font-size: .34rem;
	}
	.bg{
		position: fixed;
		top: 40px;
		bottom: 0;
		width: 100%;
		background-image: url(../../../static/images/twocode.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>