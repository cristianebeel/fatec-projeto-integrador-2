<template>
<ul class="relative">
    <li class="inline-block">
        <nuxt-link to="#">
            {{$t('allCategories')}}
        </nuxt-link>
        <ul class="hidden">
            <li><nuxt-link to="/categoria/cadernos">{{$t('notebooks')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/escrita">{{$t('writing')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/estojos">{{$t('cases')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/lixeiras">{{$t('bins')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/mochilas">{{$t('backpacks')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/organizacao">{{$t('organization')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/papelaria">{{$t('stationaryStore')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/pintura">{{$t('painting')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/planners-e-agendas">{{$t('plannersAndAppointmentBook')}}</nuxt-link></li>
        </ul>
    </li>
</ul>
</template>

<style scoped>
ul{
    z-index: 999;
}

ul li{
    background-color: #ff3c77;
}

a{
	display:block;
	padding:0 10px;	
	color:#FFF;
	line-height: 1.5rem;
	text-decoration:none;
}

ul ul{
	display: none;
	position: absolute; 
	top: 1.5rem;
}
	
ul li:hover > ul {
	display:inherit;
}
	
ul ul li {
	width: 200%;
	height: 3rem;
	position: relative;
	padding: 1rem 0;
}

ul ul li:hover{
	background-color: #ff5981;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Dropdown',

	computed: {
		...mapState({
			categorias: state => state.categorias.categorias
		})
	}
}
</script>