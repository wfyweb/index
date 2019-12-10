		function montharr(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
			this[0] = m0;
			this[1] = m1;
			this[2] = m2;
			this[3] = m3;
			this[4] = m4;
			this[5] = m5;
			this[6] = m6;
			this[7] = m7;
			this[8] = m8;
			this[9] = m9;
			this[10] = m10;
			this[11] = m11;
		}
		function calendar() {
			var today = new Date();
			var weekStr = "";
			var weekArr = ["日", "一", "二", "三", "四", "五", "六"];
			var dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
			var monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
			var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
			var year = today.getFullYear();
			var thisDay = today.getDate();
			// 闰年
			if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monthDays[1] = 29;
			//当月天数
			nDays = monthDays[today.getMonth()];
			firstday = today;
			firstday.setDate(1);
			testMe = firstday.getDate();
			if (testMe == 2) firstday.setDate(0);
			startday = firstday.getDay();

			document.write('<table id="table" border="0" width="100%" cellspacing="1" cellpadding="2" style="background:#ccc;">');
			document.write('<tr><th colspan="7" style="background:#fff">');
			//第一行
			var now = new Date();
			document.write('<span class="today">' + today.getFullYear() + "&nbsp;" + monthNames[now.getMonth()] + now.getDate() + "日&nbsp;" + dayNames[now.getDay()] + "</span>");
			//第二行
			for (var i=0;i<weekArr.length;i++ )
			{
				weekStr += '<th>'+weekArr[i]+'</th>';
			}
			document.write('<tr>'+weekStr+'</tr>');
			//第三行
			var n = 0;
			if (startday > 0) {
				document.write('<td colspan="' + startday + '" style="background:#fff"></td>')
			}
			n = startday;
			for (i = 1; i <= nDays; i++) {
				// 今日
				if (i == thisDay) {
					document.write('<td id="Today"><span>'+i+'</span>')
				}
				else {
					document.write('<td style="background:#fff"><span>'+i+'</span>');
				}
				n++;
				if (n == 7) {
					document.write("<tr>");
					n = 0;
				}
			}
			if (n < 7) {
				document.write('<td colspan="' + (7 - n) + '" style="background:#fff"></td>');
			}
			var table = document.getElementById('table');
			tb.appendChild(table);
		}
