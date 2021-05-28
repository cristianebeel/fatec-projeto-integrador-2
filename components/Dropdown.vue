<template>
<ul class="relative">
    <li class="inline-block">
        <nuxt-link to="#">
            {{$t('allCategories')}}
        </nuxt-link>
        <ul class="hidden">
            <li><nuxt-link to="/categoria/agendas?page=1">Agendas</nuxt-link></li>
            <li><nuxt-link to="/categoria/cadernos?page=1">{{$t('notebooks')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/escrita?page=1">{{$t('writing')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/estojos?page=1">{{$t('cases')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/lixeiras?page=1">{{$t('bins')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/mochilas?page=1">{{$t('backpacks')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/organizacao?page=1">{{$t('organization')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/papelaria?page=1">{{$t('stationaryStore')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/pintura?page=1">{{$t('painting')}}</nuxt-link></li>
            <li><nuxt-link to="/categoria/planners?page=1">{{$t('plannersAndAppointmentBook')}}</nuxt-link></li>
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