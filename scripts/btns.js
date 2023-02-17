function login()
{
	if(document.getElementById("r").value == "مدیر")
		{
			var name = "شیرزاد";
			var family = "اسماعیل زاده";
			if(document.getElementById("txtname").value.length < 2 && document.getElementById("txtfamily").value.length < 2)
				{
					document.getElementById("suberes").value = "اطلاعات ناقص است";
					error();
				}
			else
				{
					if(document.getElementById("txtname").value == name && document.getElementById("txtfamily").value == family)
					{
						document.getElementById("suberes").value = "خوش آمدید مدیر";
						truee();
					}
					else
					{
						document.getElementById("suberes").value = "شما مدیر نیستید";
						error();
					}
				}
		}
	else
		{
			var defname = "محمد";
			var deffamily = "جوادی زاده";
			if(document.getElementById("txtname").value == defname && document.getElementById("txtfamily").value == deffamily)
				{
					document.getElementById("suberes").value = "خوش آمدید";
					truee();
				}
			else
				{
					document.getElementById("suberes").value = "شما هنرجوی این هنرستان نیستید";
					error();
				}
		}
}
function sub(){
	if(document.getElementById("r").value == "مدیر")
		{
			var name = "شیرزاد";
			var family = "اسماعیل زاده";
			if(document.getElementById("txtname").value.length < 2 && document.getElementById("txtfamily").value.length < 2)
				{
					document.getElementById("suberes").value = "اطلاعات خود را کامل وارد کنید";
					error();
				}
			else
				{
					if(document.getElementById("txtname").value == name && document.getElementById("txtfamily").value == family)
					{
						document.getElementById("suberes").value = "شما قبلا ثبت نام کرده اید";
						error();
					}
					else
					{
						document.getElementById("suberes").value = "اطلاعات شما با اطلاعات ثبت شده مدیر در سامانه هماهنگی ندارد";
						error();
					}
				}
		}
	else
		{
			var defname = "محمد";
			var deffamily = "جوادی زاده";
			if(document.getElementById("txtname").value == defname && document.getElementById("txtfamily").value == deffamily)
				{
					document.getElementById("suberes").value = "شما قبلا ثبت نام کرده اید";
					error();
				}
			else
				{
					document.getElementById("suberes").value = "اطلاعات شما با اطلاعات ثبت شده هنرجویان در سامانه هنرستان هماهنگی ندارد در صورتی که هنرجوی تازه ثبت نام هستید، روی تازه ورودها کلیک کنید";
					error();
				}
		}
}
function newstd(){
	var defname = "محمد";
	var deffamily = "جوادی زاده";
	if(document.getElementById("txtname").value.length < 2 && document.getElementById("txtfamily").value.length < 2)
		{
			document.getElementById("suberes").value = "اطلاعات خود را وارد نکرده اید";
			error();
		}
	else if(document.getElementById("txtname").value == defname && document.getElementById("txtfamily").value == deffamily)
		{
			
			if(document.getElementById("r").value == "مدیر")
				{
					document.getElementById("suberes").value = "نقش خود را درست وارد نکرده اید";
					error();
				}
			else
				{
					document.getElementById("suberes").value = "نام شما قبلا در سامانه ثبت شده است";
					error();
				}
			
		}
	else
		{
			if(document.getElementById("r").value == "مدیر")
				{
					document.getElementById("suberes").value = "نقش خود را درست وارد نکرده اید";
					error();
				}
			else
				{
					if(document.getElementById("txtname").value.length > 2 && document.getElementById("txtfamily").value.length > 2)
						{
							document.getElementById("suberes").value = "اطلاعات شما در لیست هنرجویان هنرستان ثبت شد";
							truee();
						}
					else
						{
							document.getElementById("suberes").value = "اطلاعات خود را کامل وارد کنید";
							error();
						}
				}
		}
}
function error(){
	document.getElementById("suberes").style.backgroundColor = "red";
	document.getElementById("suberes").style.color = "#410000";
}function truee(){
	document.getElementById("suberes").style.backgroundColor = "#5AE958";
	document.getElementById("suberes").style.color = "#106300";
}