	Vue.component('input-form', {
			template:'#form',
			data(){
				return{
					title:""
				}
			},
			methods: {
				submit(){
					this.$eventHub.$emit('submit', this.title);
				}
			}
		});

		Vue.component('my-list', {
			template:'#list',
			data() {
				return {
					list: [{title: 'Ir a Festa'}]
				}
			},
			//esse created é um hook que ira rodar a rotina de escutar o submite do eventHub e atualista a list colocando o title no array
			created(){
				var self = this;
				console.log(self)
				this.$eventHub.$on('submit', function(title){
					if(title){
						self.list.push({ title:title});
					}
				});
			}
		});

		// cria um prototipo no objeto Vue
		Vue.prototype.$eventHub = new Vue();

		var app =  new Vue({
			el:"#app",
			data:{
				title: "CardBlog - VueJs",
				articles: [
					{
						text: 'Primeiro post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, neque.',
						articleClass: 'colorPrimary'
					},
					{
						text: 'Segundo post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, maxime quo magnam.',
						articleClass: 'colorTerciary'
					},
					{
						text: 'Terceiro post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, labore ab error non!',
						articleClass: 'colorSecondary'
					},
					{
						text: 'Quarto post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dignissimos.',
						articleClass: 'colorPrimary'
					},
					{
						text: 'Quinto post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dignissimos.',
						articleClass: 'colorSecondary'
					},
					{
						text: 'Sexto post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dignissimos.',
						articleClass: 'colorPrimary'
					},
					{
						text: 'Setimo post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dignissimos.',
						articleClass: 'colorTerciary'
					},
					{
						text: 'Oitavo post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorPrimary'
					},
					{
						text: 'Nono post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorTerciary'
					},
					{
						text: 'Decimo post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorSecondary'
					},
					{
						text: 'Nono post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorTerciary'
					},
					{
						text: 'Decimo post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorSecondary'
					},
					{
						text: 'Nono post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorTerciary'
					},
					{
						text: 'Decimo post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorSecondary'
					},
					{
						text: '11 post - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vero autem quisquam!',
						articleClass: 'colorPrimary'
					}
				]
			}
		});


