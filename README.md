# MeowLearn 2.0

MeowLearn là studio học chuyên sâu cho cặp ngôn ngữ Anh–Việt. Phiên bản 2.0 thay trải nghiệm mô phỏng game bằng lộ trình học theo tình huống: rõ, ngắn và dùng được ngay.

## Nền tảng

- Next.js 16.3.4 (App Router + Turbopack)
- React 19.2
- Clerk 7.9 cho xác thực
- Drizzle ORM + Neon PostgreSQL
- Tailwind CSS 3.4
- Stripe Billing
- React Admin cho CMS nội bộ

Yêu cầu Node.js 20.9 trở lên.

## Chạy dự án

```bash
npm install
npm run dev
```

Các lệnh kiểm tra:

```bash
npm run lint
npm run typecheck
npm run build
```

## Biến môi trường

Dự án cần các biến sau trong `.env`:

```dotenv
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Không dùng Clerk development key hoặc Stripe test configuration cho production.

## Dữ liệu bài học

Bộ dữ liệu nằm tại `scripts/seed-data.ts` và được sinh theo hai chiều:

- Tiếng Anh cho người Việt
- Tiếng Việt cho người nói tiếng Anh
- 16 chương (8 chủ đề cho mỗi hướng)
- 64 bài học
- 256 câu hỏi
- 768 phương án trả lời

Chạy seed:

```bash
npm run db:seed
```

> Cảnh báo: seed hiện là thao tác dựng lại dữ liệu phát triển. Nó xóa khóa học, tiến độ và gói thuê bao hiện có trước khi tạo bộ nội dung mới. Không chạy trực tiếp trên production; hãy dùng migration có backup.

## Cấu trúc chính

- `app/(marketing)` — landing page
- `app/(main)` — studio, lộ trình, bài học, mục tiêu và kho hỗ trợ
- `app/admin` — quản trị nội dung nội bộ
- `actions` — Server Actions cho tiến độ và thanh toán
- `db` — schema và truy vấn Drizzle
- `scripts/seed-data.ts` — nguồn nội dung song ngữ
- `scripts/seed.ts` — trình dựng dữ liệu

## Ghi chú nâng cấp 2.0

- `middleware.ts` đã chuyển sang convention `proxy.ts` của Next.js 16.
- Clerk `auth()`/`currentUser()` đã chuyển sang server API bất đồng bộ; `SignedIn`/`SignedOut` được thay bằng `Show`.
- Dynamic route params và `headers()` đã chuyển sang Async Request APIs.
- Stripe đã nâng sang API `2026-08-26.dahlia`; chu kỳ thuê bao đọc từ subscription item.
- ESLint dùng flat config và chạy trực tiếp bằng CLI.

Xem các việc còn cần hoàn thiện tại `ROADMAP.md`.
