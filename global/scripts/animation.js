const classBlock = document.getElementById('CLASS_DIV');
const backBtn = document.getElementById('back');
backBtn.addEventListener("click", btnClick)
function btnClick() {
	backBtn.removeEventListener("click", btnClick);
	classBlock.innerHTML = '<p class="shclass" id="shclass"><span class="School2014" id="School2014Style"><a href="timetable2014b.html">9Б</a></span><span class="School2016" id="School2016Style"><a href="timetable2016b.html">7Б</a></span></p>';

	const shclass = document.getElementById('shclass');

	const School2014Style = document.getElementById('School2014Style');
	const School2016Style = document.getElementById('School2016Style');


	shclass.addEventListener('mouseenter', function () {
		shclass.removeEventListener('mouseenter', function(){});
	    shclass.style.cssText = 'background-color: #141414;'; 

	    School2014Style.style.cssText = 'border: 3px solid #fff;';
	    School2016Style.style.cssText = 'border: 3px solid #fff;'
	});
}
