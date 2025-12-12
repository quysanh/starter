import './App.css';

const features = [
  {
    title: 'Tạo hồ sơ chuẩn AI',
    desc: 'Upload ảnh toàn thân và thông số cơ thể để thử đồ chính xác.'
  },
  {
    title: 'Kho đồ thời trang',
    desc: 'Chọn nhanh danh mục, xem ngay bạn mặc item mới trong 1 chạm.'
  },
  {
    title: 'Trải nghiệm mượt',
    desc: 'Kết quả render nhanh, giao diện tối giản, tối ưu cho mobile.'
  }
];

const steps = [
  { label: '01', title: 'Đăng ký', desc: 'Tạo tài khoản bằng email, bảo mật JWT.' },
  { label: '02', title: 'Thiết lập', desc: 'Nhập chiều cao/cân nặng, upload ảnh toàn thân.' },
  { label: '03', title: 'Thử đồ', desc: 'Chọn danh mục và xem ngay ảnh bạn mặc item.' }
];

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <span className="dot" />
          <span>Try-on</span>
        </div>
        <nav className="nav">
          <a href="#features">Tính năng</a>
          <a href="#how-it-works">Luồng</a>
          <a href="#cta">Bắt đầu</a>
        </nav>
        <a className="nav-cta" href="#cta">
          Đăng ký
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-text">
            <p className="pill">Virtual Try-on · GenAI</p>
            <h1>Thử đồ ảo, vừa nhanh vừa chuẩn</h1>
            <p className="lede">
              Tạo hồ sơ cá nhân, upload ảnh toàn thân và thử ngay bộ sưu tập mới trong vài giây.
              Trải nghiệm mượt, không cần đến cửa hàng.
            </p>
            <div className="hero-actions">
              <a className="button" href="#cta">
                Bắt đầu miễn phí
              </a>
              <a className="button ghost" href="#features">
                Xem tính năng
              </a>
            </div>
            <div className="stats">
              <div>
                <h3>5k+</h3>
                <p>Ảnh thử đồ đã render</p>
              </div>
              <div>
                <h3>95%</h3>
                <p>Người dùng hài lòng UI/UX</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar" />
            <div className="card-body">
              <p className="badge">Preview</p>
              <h2>Áo blazer tối giản</h2>
              <p className="muted">Tự động khớp dáng, xem nhiều góc chỉ với một lần upload.</p>
              <div className="chip-row">
                <span className="chip">GenAI</span>
                <span className="chip">Supabase Storage</span>
                <span className="chip">JWT Auth</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-head">
            <p className="pill">Tính năng chính</p>
            <h2>Thiết kế cho trải nghiệm thử đồ hiện đại</h2>
            <p className="lede">
              Bám theo US-01 và US-02: tạo tài khoản, thiết lập hồ sơ, upload ảnh toàn thân và thử
              nhiều sản phẩm ngay trên trình duyệt.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="card">
                <h3>{feature.title}</h3>
                <p className="muted">{feature.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-head">
            <p className="pill">Luồng sản phẩm</p>
            <h2>3 bước để bắt đầu</h2>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article key={step.label} className="step-card">
                <span className="step-label">{step.label}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta" id="cta">
          <div>
            <p className="pill light">Sẵn sàng thử?</p>
            <h2>Bắt đầu với tài khoản miễn phí</h2>
            <p className="lede">
              Đăng ký, thiết lập hồ sơ và thử ngay outfit đầu tiên. Bạn có thể mở rộng lên gói
              thương mại sau.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button" href="#top">
              Lên trang đầu
            </a>
            <a className="button ghost" href="mailto:hello@tryon.dev">
              Liên hệ
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="dot" />
          <span>Try-on</span>
        </div>
        <p className="muted">Sprint 1 • Landing Page & Auth onboarding.</p>
        <a href="#top">Về đầu trang</a>
      </footer>
    </div>
  );
}

export default App;
