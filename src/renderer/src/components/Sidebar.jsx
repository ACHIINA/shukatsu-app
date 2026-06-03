const ITEMS = [
  { key: 'autoRegister', label: '★ 自動登録', icon: '🤖' },
  { key: 'schedule', label: 'スケジュール', icon: '📅' },
  { key: 'research', label: '企業調査', icon: '🔍' },
  { key: 'esDraft', label: 'ES下書き', icon: '✍️' },
  { key: 'email', label: 'メール', icon: '📧' },
]

export default function Sidebar({ current, onNavigate }) {
  return (
    <nav style={{ width: 200, background: '#1a1a2e', color: '#fff', padding: '16px 0' }}>
      <h2 style={{ padding: '0 16px 16px', fontSize: 14, opacity: 0.6 }}>就活補助アプリ</h2>
      {ITEMS.map(item => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.key)}
          style={{
            display: 'block', width: '100%', textAlign: 'left',
            padding: '12px 16px', border: 'none', cursor: 'pointer',
            background: current === item.key ? '#16213e' : 'transparent',
            color: current === item.key ? '#e94560' : '#fff',
            fontSize: 14,
          }}
        >
          {item.icon} {item.label}
        </button>
      ))}
    </nav>
  )
}
