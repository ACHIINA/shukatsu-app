// ★ コアUSP: 企業個別採用サイトへの自動登録
// TODO: Playwrightを使ってフォームを自動入力する実装
import { useState } from 'react'

export default function AutoRegister() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('')

  const handleRegister = async () => {
    setStatus('実行中...')
    // TODO: window.api.autoRegister(url, userProfile) を呼び出す
    setStatus('TODO: Playwright自動入力を実装する')
  }

  return (
    <div>
      <h1>🤖 企業サイト自動登録</h1>
      <p>企業の採用ページURLを入力すると、プロフィール情報を自動で入力します。</p>
      <div style={{ marginTop: 24 }}>
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="https://recruit.example.co.jp/entry"
          style={{ width: 400, padding: 8, marginRight: 8 }}
        />
        <button onClick={handleRegister} style={{ padding: '8px 16px' }}>
          自動入力開始
        </button>
      </div>
      {status && <p style={{ marginTop: 16, color: '#888' }}>{status}</p>}
      {/* TODO: プロフィール設定フォーム（氏名・大学・住所等） */}
      {/* TODO: 実行ログ表示 */}
      {/* TODO: 対応サイト一覧 */}
    </div>
  )
}
