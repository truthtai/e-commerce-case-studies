####Angular thì miễn phí và open-source do đó bạn có thể thoải mái sử dụng và tuỳ biến theo ý thích của mình.

###Dưới đây là một sơ đồ mà tôi vẫn hay sử dụng khi làm việc với AngularJS:
![sơ đồ angular](http://2.bp.blogspot.com/-0mMTSxfz2Nc/VNnZO3VEE3I/AAAAAAAAAE4/52i9wd2lE74/s640/angular_rr.jpg)

Angular thích hợp sử dụng nhất cho những ứng dụng có 1 trang SPA - Single Page Application.

**Điều kiện để học Angular JS**

Để làm quen và sử dụng Angular, bạn phải có những kiến thức, hiểu biết cơ bản về những môn sau:

>
- HTML
>
- CSS
>
- Javascript
>
- Ngoài ra, bạn có thêm được các kiến thức công nghệ về JQuery, HTML5, AJAX, JSON, Restful Webservices,... thì lại càng lợi thế hơn khi học Angular.


**Các tính năng Cơ bản của Angular JS**

![tinh nang](http://1.bp.blogspot.com/-NBWJQcJD-8k/VNnZZCsveiI/AAAAAAAAAFA/rLasTu4FQQ0/s640/diag.png)

Nhìn tổng quát ở sơ đồ trên, ta có thể thấy được những tính năng chính do Angular JS cung cấp gồm có:
> **DATA-BINDING SỰ GẮN KẾT DATA LƯU TRONG MODEL VỚI VIEW**

![2way](http://docs.angularjs.org/img/Two_Way_Data_Binding.png)

Angular có khả năng tự động đồng bộ hoá data giữa Model và View. Data được thay đổi trên View (thông qua input field) sẽ ngay lập tức được cập nhật vào Model javascript object. Ngược lại, javascript object khi có thay đổi, có thể là từ JSON phía server API trả về, sẽ được tự động cập nhật hiển thị lên HTML view ngay mà bạn không cần phải can thiệp vào. Đây chắc chắn là thế mạnh mà bạn sẽ cực kỳ thích thú.a
SCOPE

**Scope** có thể hiểu là những objects model ở tầng application (chú ý, nó không chỉ là Model để lưu các giá trị thuộc tính của object trong OOP, mà nó còn lưu cả các cài đặt cho application ở thời điểm hiện tại nữa). Và chúng sẽ đóng vai trò kết nối giữa controller với view. Chẳng hạn, bạn sẽ gán action cho button đến một hàm trong scope.
CONTROLLER

**Controller** trong Angular JS sẽ chứa các javascript method, và giới hạn trong một scope cụ thể.

**SERVICES**
AngularJS cung cấp một vài services sẵn, ví dụ như $http để thực hiện một lời gọi AJAX (XMLHttpRequest) đến server API. Những services này là những object duy nhất, dùng chung trong toàn app, và nó chỉ được khởi tạo một lần. Bạn sẽ có thể sẵn sàng sử dụng các object này ngay bất cứ lúc nào, và Angular framework sẽ quản lý những object này giúp bạn.

**FILTERS - CÁC BỘ LỌC **

Bạn sẽ sử dụng các bộ lọc này để lọc ra được những item từ một arrays nào đó.

**DIRECTIVES - ĐIỀU HƯỚNG **

Các điều hướng là những đánh dấu (markers) trên các thành phần DOM. Nó có thể là bản thân cả element, thuộc tính, css,... để giúp bạn thao tác với element đó. Directives cũng có thể được sử dụng để tạo ra những thẻ HTML tuỳ biến, các widgets. AngularJS cung cấp sẵn một số directive thường dùng, mà sau này bạn sẽ quen thuộc, ví dụ như ngBind, ngModel, ...

**TEMPLATES - MẪU GIAO DIỆN **

Template sẽ những view hiển thị các thông tin từ model do controller chỉ thị. Nó có thể là một file (ví dụ index.html), có thể là nhiều view như là những thành phần con (partials) để ghép lại thành một màn hình.

**ROUTING - CHUYỂN HƯỚNG TRANG WEB **

Nếu bạn đã từng làm việc với các framework MVC, bạn sẽ hiểu khái niệm này. Routing sẽ giúp bạn chỉ định view nào sẽ hiển thị, nếu người dùng truy cập vào URL có patterns như thế nào. Nghĩa là nó sẽ thay đổi views hiển thị tương ứng với ngữ cảnh.

**MVW - MODEL VIEW WHATEVER**

MVW là một design pattern mà chia một ứng dụng thành các phần Model, View, và thường là Controller tương tự là MVC truyền thống. Mỗi phần sẽ có khả năng và vai trog đáp ứng riêng. So với MVC truyền thống, MVW còn pha trộn thêm MVVW (Model-View-ViewModel). Và cái tên MVW Model View Whatever là do Angular JS team đặt ra.

**DEEP LINKING - LIÊN KẾT SÂU**

Deep linking liên kết sâu cho phép ta mã hoá tình trạng của ứng dụng vào URL, và ta có thể bookmark lại được. Sau đó, ứng dụng có được dựng lại hoàn toàn trạng thái của nó sau này khi ta access vào URL đó.

**DEPENDENCY INJECTION**
AngularJS có sẵn một hệ thống injection để developers có thể dễ dàng tạo, hiểu, và kiểm tra ứng dụng.


###Ưu điểm của AngularJS

- Với concept ý tưởng, cũng như những thành phần có sẵn mà Angular cung cấp, ta có thể thấy là những ứng dụng SPA Single Page Application - Ứng dụng một trang, sẽ rất thực hiện một các rõ ràng clean, và dễ cho bảo trì code.

- Với việc mà binding được data vào HTML DOM, nó rất nhanh update data qua lại giữa view và model.

- Code viết với AngularJS rất dễ test.

- AngularJS sử dụng injection để bạn ngăn cách và hiểu một cách tách bạch được những thứ liên quan đến nhau.

- Có thể viết theo hướng tái sử dụng.

- Với AngularJS, các lập trình viên developers sẽ chỉ cần code ít hơn cho những tính năng lớn.

- Trong AngularJS, các views là những trang HTML code thuần; các Controller thì được viết bằng javascript để thực hiện các nghiệp vụ business.

- Và điều quan trọng nhất, ứng dụng viết bằng AngularJS sẽ chạy trên hầu hết các trình duyệt hiện nay, bao gồm cả các trình duyệt trên smart phones, tablets máy tính bảng, đương nhiên là bao gồm cả iOS và Android :)


###Nhược điểm của AngularJS

- Mặc dù có nhiều lợi ích khi sử dụng AngularJS, tuy nhiên không có gì là hoàn hảo, bạn cũng cần xem xét một số nhược điểm của Angular để có kế hoạch cho mình khi develop app bằng AngularJS. Điều may mắn là những nhược điểm này có thể khắc phục hoặc hạn chế được, đủ để ta yên tâm coding app bằng AngularJS. 
Không an toàn: Vì nó là nền tảng dựa trên javascript, có nghĩa là nó chạy phía client. 

- Điều này đồng nghĩa với việc người dùng có hiểu biết về coding, có mục đích mờ ám, thì họ có thể sửa đổi code phía client trước khi submit lên server. Do đó, một số các tác vụ quan trọng, bạn nên thực hiện phía server, ví dụ: Authenticate và Authorization (xác thực và kiểm tra quyền của người dùng); thực hiện validation với những data được submit lên API trước khi save hoặc thao tác với data do người dùng submit lên đó. Do đó cách tốt nhất là dùng AngularJS để query vào các WebService API, không nên save trực tiếp data vào database mà không check.

- Nếu người dùng ứng dụng, bật chức năng chặn Javascript, bạn sẽ không thể làm gì được, webpage sẽ chỉ hiển thị được những thông tin cơ bản, và đương nhiên là các thao tác business sẽ không hoạt động. Tuy nhiên điều này có lẽ ít xảy ra, nhưng bạn cũng cần consider chuyện này.