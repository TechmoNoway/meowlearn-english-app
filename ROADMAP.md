# Roadmap sau bản 2.0

## Cần hoàn thiện trước khi đưa lên production

1. **Migration dữ liệu production** — viết migration chuyển nội dung mới mà không xóa tiến độ, chạy backup và kiểm tra rollback. `db:seed` chỉ phù hợp môi trường phát triển.
2. **Xác thực production** — thay Clerk development keys, đưa danh sách admin hard-code sang role/permission và kiểm thử toàn bộ quyền API.
3. **Thanh toán thật** — tạo Stripe Product/Price cố định thay cho `price_data` tạo động, cấu hình portal, webhook retry và đối soát trạng thái thuê bao.
4. **Kiểm thử tự động** — bổ sung Playwright cho đăng nhập → chọn lộ trình → hoàn thành bài → trừ/nạp năng lượng; thêm test cho webhook và Server Actions.
5. **Dọn cảnh báo dependency admin** — chuỗi React Admin hiện kéo theo advisory mức moderate từ `query-string`; npm chưa có bản vá hợp lệ. Cân nhắc thay data provider hoặc viết CMS nội bộ nhẹ hơn.

## Nâng chất lượng học tập

1. **Phát âm và ghi âm** — thu âm câu trả lời, speech-to-text, chấm độ rõ và chỉ ra âm người Việt thường nhầm.
2. **Ôn tập ngắt quãng** — tạo hàng đợi ôn dựa trên câu sai, độ khó và thời điểm học gần nhất thay vì chỉ cộng điểm tổng.
3. **Giải thích sau đáp án** — thêm trường `explanation`, phiên âm, ví dụ thay thế và ghi chú sắc thái tiếng Anh dành cho người Việt vào schema.
4. **Loại bài tập mới** — sắp xếp câu, điền từ, nghe chép chính tả, hội thoại phân nhánh và trả lời tự do.
5. **Đánh giá đầu vào** — bài placement test ngắn để mở lộ trình phù hợp thay vì mọi người bắt đầu từ bài đầu.

## Trải nghiệm và vận hành

1. Dashboard thống kê theo kỹ năng nghe/nói/đọc/từ vựng.
2. Nhắc học cá nhân hóa và mục tiêu theo tuần, không dùng bảng đua gây áp lực.
3. PWA/offline cho các bài đã tải và đồng bộ tiến độ khi có mạng.
4. Quy trình biên tập nội dung có draft/review/publish và lịch sử phiên bản.
5. Kiểm tra accessibility đầy đủ: bàn phím, screen reader, contrast và reduced motion.
