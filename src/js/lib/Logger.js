



module.exports = (function () {
	function Logger (targetname) {
		this.targetname = targetname;
	}

	var p = Logger.prototype;
	p.info = function info(){
		var args = (arguments.length === 1?[arguments[0]]:Array.apply(null, arguments));
		args.unshift(["[", this.getTimeString(), "|", this.targetname, "]"].join(" "));
		console.log.apply(console,args);
	};

	p.getTimeString = function getTimeString () {
		var now = new Date();
		var timeString = "" 
			+ zeroPad( now.getFullYear() ) + "/"
			+ zeroPad( (now.getMonth()+1) )  + "/" 
			+ zeroPad( now.getDate() ) + " "
			+ zeroPad( now.getHours() ) + ":"  
			+ zeroPad( now.getMinutes() ) + ":" 
			+ zeroPad( now.getSeconds() ) + "." 
			+ doubleZeroPad( now.getMilliseconds() )
			+ "";
		return timeString;
	}

	function zeroPad (num) {
		if(num>=10){
			return ""+num;
		}else{
			return "0"+num;
		}
	}

	function doubleZeroPad (num) {
		if(num>=100){
			return ""+num;
		}else if(num>=10){
			return "0"+num;
		}else{
			return "00"+num;
		}
	}

	return Logger;
})();