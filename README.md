# Neneneko - Minecraft 伺服器管理平台

Neneneko 是一個基於 React 的 Minecraft 伺服器管理前端介面，提供直覺的深色主題 UI，讓管理員可以輕鬆管理伺服器的各項功能。

## 功能頁面

| 頁面 | 路由 | 說明 |
|------|------|------|
| 登入 | `/` | 使用者登入 / 註冊頁面 |
| 伺服器 | `/dashboard` | 伺服器總覽、狀態監控、CPU / RAM 使用率圖表 |
| 選項 | `/options` | 伺服器設定（遊戲模式、難度、安全性、網路等） |
| 控制台 | `/console` | 即時終端機，查看伺服器輸出並執行指令 |
| 紀錄 | `/logs` | 伺服器日誌瀏覽，支援即時更新 |
| 玩家 | `/players` | 玩家管理（在線狀態、白名單、封禁） |
| 軟體 | `/software` | 伺服器核心安裝（Paper、Spigot、Forge 等）與版本管理 |
| 檔案 | `/files` | 檔案管理器（瀏覽、上傳、刪除、多選操作） |
| 世界 | `/worlds` | 世界地圖管理與備份還原 |
| 備份檔案 | `/backups` | 備份管理、自動排程、儲存空間監控 |
| 存取權 | `/access` | 使用者權限控制（細粒度的 toggle 開關） |

## 技術棧

- **React** 19 + React Router 7
- **Tailwind CSS** 3（含 `@tailwindcss/forms` 插件）
- **Material Symbols Outlined**（Google 圖示字型）
- **Axios**（HTTP 請求）

## 專案結構

```
src/
├── components/
│   ├── DashboardLayout.jsx   # 共用版面（Sidebar + 內容區）
│   └── Sidebar.jsx           # 側邊欄導覽
├── pages/
│   ├── Home.jsx              # 登入頁
│   ├── Dashboard.jsx         # 伺服器總覽
│   ├── Options.jsx           # 伺服器選項
│   ├── Console.jsx           # 即時控制台
│   ├── Logs.jsx              # 伺服器紀錄
│   ├── Players.jsx           # 玩家管理
│   ├── Software.jsx          # 軟體安裝
│   ├── Files.jsx             # 檔案管理
│   ├── Worlds.jsx            # 世界管理
│   ├── Backups.jsx           # 備份管理
│   └── Access.jsx            # 存取權限
└── App.js                    # 路由設定
```

## 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm start
```

開啟 [http://localhost:3000](http://localhost:3000) 即可瀏覽。

### 建置生產版本

```bash
npm run build
```

輸出至 `build/` 資料夾。

## 設計風格

- 深色主題（Dark Mode）
- 主色調：`#35355f`
- 背景色：`#16161c`（主區域）/ `#1a1a24`（側邊欄）
- 字型：Inter + Noto Sans TC
- 圖示：[Material Symbols Outlined](https://fonts.google.com/icons)
