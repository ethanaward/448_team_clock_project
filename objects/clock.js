<script type="text/javascript">
var clock = {
    	getTime:function(){return 1},
    
    
  
    function get_time(){},
   
    function set_time() {
			var h, m, s
		 
			h = document.getElementById("u_hour").value;
			m = document.getElementById("u_min").value;
			s = document.getElementById("u_sec").value;
		 
			this.timer.setSeconds(s*1 +m*60+h*60*60); //Turn time user entered into total seconds
		 
		},

    
    new timer = Timer();,
    
};

</script