function extend(){
	var divList = document.getElementsByClassName("listhead")[0];
	if(divList.style.display=="none"){
		divList.style.display="block";
	}else{
		divList.style.display="none";
	};
};
var addClass = document.querySelector(".sports");
for(var i = 0,len = addClass.children.length;i<len;i++){
	addClass.children[i].onclick = function addBack(e){
		for(var j = 0,len = addClass.children.length;j<len;j++){
			addClass.children[j].classList.remove("addBack");
		}
		this.classList.add("addBack");
	};
};
var rank = document.querySelectorAll(".banner div");
console.log(rank);
var currentIndex = 0,
	Len = rank.length,
	preIndex;
function autoChange(){
	timer = setInterval(function(){
		currentIndex = currentIndex >= Len - 1? 0 : currentIndex + 1;
		preIndex = currentIndex == 0 ? Len-1 : currentIndex -1;
		rank[currentIndex].classList.remove("previous");
		rank[currentIndex].classList.add("current");
		rank[preIndex].classList.remove("current");
		rank[preIndex].classList.add("previous");
	},2000);
};
autoChange();
