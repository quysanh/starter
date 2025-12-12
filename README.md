# Try-on (GenAI4Dev K1)

Thiết lập Sprint 1 hoàn tất: đã khởi tạo backend (Node.js + Express) và frontend (React + Vite), cấu hình lint/format, JWT/CORS và mẫu biến môi trường.

## Cấu trúc chính
- `backend/`: Express API, CORS, JWT helpers, Supabase client placeholder.
- `frontend/`: React + Vite scaffold, cấu trúc `src/components|pages|routes`, cấu hình lint/prettier.
- `sprints/`: user stories + sprint backlog.
- `PB.md`: product backlog.
- `.cursor/`: rules/commands cho Cursor.

## Yêu cầu hệ thống
- Node.js >= 18, npm >= 9.

## Thiết lập backend
```bash
cd backend
cp .env.example .env   # điền SUPABASE_URL, SUPABASE_ANON_KEY, JWT_SECRET
npm install             # đã chạy sẵn, dùng lại nếu cần
npm run dev             # chạy API tại http://localhost:4000
```
- CORS: cấu hình qua `CORS_ORIGIN` (hỗ trợ danh sách cách nhau bởi dấu phẩy).
- JWT: secret và thời gian sống cấu hình qua `.env`.

## Thiết lập frontend
```bash
cd frontend
cp .env.example .env    # VITE_API_BASE_URL (mặc định http://localhost:4000/api)
npm install             # đã chạy sẵn, dùng lại nếu cần
npm run dev             # chạy UI tại http://localhost:5173
```

## Lint & format
- Backend: `cd backend && npm run lint` · `npm run format`
- Frontend: `cd frontend && npm run lint` · `npx prettier --write .`

## Tài liệu backlog
- Backlog tổng quan: `PB.md`
- Sprint 1 backlog: `sprints/sprint1.md`
- User stories: `sprints/US-01.md`, `sprints/US-02.md`