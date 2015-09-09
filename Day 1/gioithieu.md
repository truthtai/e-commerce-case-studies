#Giới thiệu về ứng dụng web TMDT

Để xây dựng ứng dụng web về THƯƠNG MẠI ĐIỆN TỬ lĩnh vực kinh doanh bán sản phẩm gồm có
1. Font-end
- HTML5
 ```
 <html>
	<head> 
	<title>Tiêu đê trang web</title>
	</head>
	<body> 
	   <header></header>
	   <main></main>
	   <footer></footer>
	</body>
 </html> 
 ```
 - Tags
  ```
  <html></html>
  ```
 - Attributes
  ```
  <tag attribute="value">Margarine</tag>
  ```
 - Elements
  ```
	<title></title>
  ```
 > [http://fsd14.com/post/151-thiet-ke-website-cho-nguoi-moi-bat-dau-cau-truc-html](xem thêm)
- CSS3 ( Bootstrap 3)
 > .class, #id, element
 - Các Style cơ bản:
  ```
   .main {
   	  color: #fff;
   	  background: #000;
   	  font-size: 12px;
   	  font-family: 'Open Sans', sans-serif;
   	  font-weight: 300;
   	  width: 10em;
   	  height: 10em;
   	  margin: 0; // margin-top, margin-right, margin-bottom, margin-left
      padding: 0; // padding-top, padding-right, padding-bottom, padding-left
      border: 1px solid #fff // 0

   }
  ```
- Javascript ( Jquery -  AngularJS)
  > Jquery là một thư viện của javascript
  > AngularJS là một Framwork phát triển dựa trên Javascript để tạo các ứng dụng web . AngularJS thường dùng để phát triển frontend (giao diện khách hàng) thông qua các API để gọi data, sử dụng mô hình MVC rất mạnh mẽ
2. Back-end
- Nodejs
  > Node.js là một nền tảng chạy trên môi trường V8 JavaScript runtime - một trình thông dịch JavaScript cực nhanh chạy trên trình duyệt Chrome. JavaScript là một ngôn ngữ dựa trên sự kiện, vì vậy bất cứ thứ gì xảy ra trên server đều tạo ra một sự kiện non-blocking. Mỗi kết nối mới sinh ra một sự kiện; dữ liệu nhận được từ một upload form sinh ra một sự kiện data-received; việc truy vấn dữ liệu từ database cũng sinh ra một sự kiện. Trong thực tế, điều này có nghĩa là một trang web Node.js sẽ chẳng bao giờ bị khóa (lock up) và có thể hỗ trợ cho hàng chục nghìn user truy cập cùng lúc. Node.js đóng vai trò của server - Apache - và thông dịch mã ứng dụng chạy trên nó. Giống như Apache, có rất nhiều module (thư viện) có thể được cài đặt để bổ sung thêm các đặc trưng và chức năng - như lưu trữ dữ liệu, hỗ trợ file Zip, đăng nhập bằng Facebook, hoặc các cổng thanh toán. Dĩ nhiên, nó không có nhiều thư viện như PHP, nhưng Node.js vẫn đang ở trong giai đoạn ban đầu và có một cộng đồng rất mạnh mẽ ở đằng sau nó. 
- MongoDB
  > - MongoDB là 1 hệ thống CSDL mã nguồn mở được phát triển và hỗ trợ bởi 10gen, là CSDL NoSQL hàng đầu được hàng triệu người sử dụng. Hiểu một cách nôm na thì MongoDB là một mã nguồn mở và là một tập tài liệu dùng cơ chế NoSQL để truy vấn, nó được viết bởi ngôn ngữ C++. Chính vì được viết bởi C++ nên nó có khả năng tính toán với tốc độ cao chứ không giống như các hệ quản trị CSDL hiện nay.
 - Database
 - Collection
 - Database
  > [http://www.mongodb.com](MongoDB)
  > [http://www.mongolab.com](MongoLab)

- Loopback
  > LoopBack is a highly-extensible, open-source Node.js framework

3. Tools
- [http://www.sublimetext.com/3](Sublime Text)
- [https://github.com](Github)
- [https://bitbucket.org](Bitbucket)
