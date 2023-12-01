let SELECT_MENU = {
   menuData : null,
   fn_select_menu : function() {

      const _this = this;

      const url = '/selectMenu/menu.json?date=' + new Date();
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);
      xhr.onload = function() {
         if (xhr.status >= 200 && xhr.status < 400) {
            const response = JSON.parse(xhr.responseText);

            _this.menuData = response;

            console.log(_this.menuData);
            const menu = _this.extractRandomData(_this.menuData);
            document.getElementById('menu').innerText = menu.menuName;

            if(menu.by !== '') {
               document.getElementById('by').innerText = 'by ' + menu.by;
            } else document.getElementById('by').innerText = '';

         } else {
            console.error('Error:', xhr.status);
         }
      };

      xhr.onerror = function() {
         console.error('Request failed');
      };

      xhr.send();
   },
   // 데이터 로드 및 무작위 추출 함수
   extractRandomData : function (data) {
      let randomIndex = Math.floor(Math.random() * data.length);
      console.log(data[randomIndex]);
      return data[randomIndex];
   }
}