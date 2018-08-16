const root2 = document.documentElement 
const acessibilityBtns = document.querySelectorAll('.acessibility > button')

acessibilityBtns.forEach((btn) => {
	btn.addEventListener('click', handleAcessibilityUpdate)
})

function handleAcessibilityUpdate(e) {
	switch(e.target.value) {
		case 'bemGrande': 
		root2.style.setProperty('--def-font-size', '15px')
		break
		case 'Grande': 
		root2.style.setProperty('--def-font-size', '13px')
		break
		case 'Normal':
		root2.style.setProperty('--def-font-size', '10px')
		break
	}
}