<?php
		$name = $_POST['name'];
		#die("$name");
		$ais_connect = mysqli_connect('172.16.58.62:3306','ccp_ais','2018ais','project_ais_v3');
		if(!$ais_connect) {
			die('connot connet :'.mysqli_connect_error());
		}
		
		#mysqli_select_db($ais_connect,'project_ais_v3');
		$sql = "SELECT * FROM ais_project WHERE project_leader = '$name' AND source_status != 3";
		$tmp_data = mysqli_query($ais_connect,$sql);

		$result=array();
		$result=mysqli_fetch_all($tmp_data,MYSQLI_ASSOC);
		#mysqli_free_result($result);
		
		#$result = mysql_result($tmp_data);
		/*
		$i=0;
		$result=array();
		while ($row = mysql_fetch_array($tmp_data)) {
			$result[$i]=$row;
			$i++;
		}
		#die('test2');
		*/
		return json_encode($result);
		mysqli_close($ais_connect);
?>